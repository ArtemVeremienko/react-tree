import { CheckboxStatus } from '../Checkbox';
import { NodeWithParent } from './addParentToNode';

export function updateChildren(node: NodeWithParent, status: CheckboxStatus) {
  node.children.forEach(child => {
    child.status = status
    if (child.children) updateChildren(child, status)
  })
}
