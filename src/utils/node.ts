import { NodeWithParent } from './addParentToNode'

import { CheckboxStatus, CHECKBOX_STATUS } from '../Checkbox'
import { ID } from '../configTree'

export class NodeWParent implements NodeWithParent {
  public id: ID
  public name: string
  public status: CheckboxStatus
  public collapsed: boolean
  public children: NodeWithParent[]
  public parent: NodeWithParent | null

  constructor({
    id,
    name,
    children = [],
    parent = null,
    collapsed = false,
    status = CHECKBOX_STATUS.UNCHECKED,
  }: {
    id: ID
    name: string
    children: NodeWithParent[]
    parent: NodeWithParent | null
    collapsed: boolean
    status: CheckboxStatus
  }) {
    this.id = id
    this.name = name
    this.children = children
    this.parent = parent
    this.collapsed = collapsed
    this.status = status
  }
}
