import { Node } from '../configTree'
import { CHECKBOX_STATUS, CheckboxStatus } from '../Checkbox'

export interface NodeWithParent extends Node {
  children: NodeWithParent[]
  parent: NodeWithParent | null
  status: CheckboxStatus
  collapsed: boolean
}

export function addParentToNode(
  tree: Node[],
  parent: NodeWithParent | null = null
): NodeWithParent[] {
  return tree.map((node) => {
    const nodeWithParent: NodeWithParent = {
      id: node.id,
      name: node.name,
      parent,
      status: CHECKBOX_STATUS.UNCHECKED,
      collapsed: false,
      children: []
    }
    if (node.children) {
      nodeWithParent.children = addParentToNode(
        node.children,
        nodeWithParent
      )
    }
    return nodeWithParent
  })
}

export function logPath(node: NodeWithParent) {
  const path: NodeWithParent[] = []
  let current: NodeWithParent = node
  while (current.parent) {
    path.push(current)
    current = current.parent
  }
  path.push(current)
  console.log(path)
}

class NodeWParent implements NodeWithParent {
  public name: string
  public status: CheckboxStatus
  public collapsed: boolean
  public children: NodeWithParent[]
  public parent: NodeWithParent | null

  constructor({
    name,
    children = [],
    parent = null,
    collapsed = false,
    status = CHECKBOX_STATUS.UNCHECKED,
  }: {
    name: string
    children: NodeWithParent[]
    parent: NodeWithParent | null
    collapsed: boolean
    status: CheckboxStatus
  }) {
    this.name = name
    this.children = children
    this.parent = parent
    this.collapsed = collapsed
    this.status = status
  }
}
