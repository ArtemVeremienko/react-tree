import { createContext, useContext } from 'react'
import { CheckboxStatus } from './Checkbox'
import { ID } from './configTree'

export type CheckedState = Record<ID, CheckboxStatus>
export type TreeState = {
  setChecked: (id: ID, checked: boolean) => void
  setCollapsed: (id: ID, collapsed: boolean) => void
}

export const TreeContext = createContext<TreeState | null>(null)

export const useTreeViewContext = () => {
  const treeState = useContext(TreeContext)

  if (!treeState) {
    throw new Error('Unkwnown tree provider')
  }

  return treeState
}
