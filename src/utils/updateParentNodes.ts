import { CHECKBOX_STATUS, CheckboxStatus } from '../Checkbox'
import { NodeWithParent } from './addParentToNode'

function getStatus(node: NodeWithParent) {
  let status: CheckboxStatus = CHECKBOX_STATUS.INDETERMINATE
  const checkboxesCount = node.children.length
  const checkedCount = node.children.filter(
    (child) => child.status === CHECKBOX_STATUS.CHECKED
  ).length
  const uncheckedCount = node.children.filter(
    (child) => child.status === CHECKBOX_STATUS.UNCHECKED
  ).length

  if (checkboxesCount === checkedCount) {
    status = CHECKBOX_STATUS.CHECKED
  }

  if (checkboxesCount === uncheckedCount) {
    status = CHECKBOX_STATUS.UNCHECKED
  }

  return status
}

export function updateParentNodes(node: NodeWithParent) {
  let current = node.parent
  while (current) {
    current.status = getStatus(current)
    current = current.parent
  }
}
