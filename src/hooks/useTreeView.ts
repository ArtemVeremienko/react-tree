import { Node } from '../configTree';

import { useState, useCallback } from 'react';
import { CHECKBOX_STATUS } from '../Checkbox';
import { TreeState } from '../treeContext';
import { addParentToNode } from '../utils/addParentToNode';
import { dfs } from '../utils/dfs';
import { updateChildren } from '../utils/updateChildren';
import { updateParentNodes } from '../utils/updateParentNodes';


export function useTreeView(initTree: Node[]) {
  const [tree, setTree] = useState(() => addParentToNode(initTree))

  const setChecked = useCallback<TreeState['setChecked']>((id, checked) => {
    setTree((p) => {
      const newTree = [...p]
      const node = dfs(newTree, id)
      if (!node) return newTree
      const status = checked
        ? CHECKBOX_STATUS.CHECKED
        : CHECKBOX_STATUS.UNCHECKED
      node.status = status
      updateChildren(node, status)
      updateParentNodes(node)
      return newTree
    })
  }, [])

  const setCollapsed = useCallback<TreeState['setCollapsed']>(
    (collapsedId, collapsed) => {
      setTree((p) => {
        const newTree = [...p]
        const node = dfs(newTree, collapsedId)
        if (!node) return newTree
        node.collapsed = collapsed
        return newTree
      })
    },
    []
  )

  return {
    tree,
    setChecked,
    setCollapsed,
  }
}
