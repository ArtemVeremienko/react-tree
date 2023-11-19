import { ID } from './configTree'

import { ChangeEventHandler, MouseEventHandler, ReactNode } from 'react'
import { CheckboxStatus, Checkbox, CHECKBOX_STATUS } from './Checkbox'
import { useTreeViewContext } from './treeContext'

export function ListItem({
  name,
  label,
  children,
  itemId,
  collapsed,
  status,
}: {
  name: string
  label: string
  itemId: ID
  collapsed: boolean
  status: CheckboxStatus
  children?: ReactNode
}) {
  const { setCollapsed, setChecked } = useTreeViewContext()
  const isChecked = status === CHECKBOX_STATUS.CHECKED
  const isIndeterminate = status === CHECKBOX_STATUS.INDETERMINATE

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setChecked(itemId, e.target.checked)
  }

  const handleCollapsed: MouseEventHandler<HTMLButtonElement> = () => {
    setCollapsed(itemId, !collapsed)
  }

  return (
    <li>
      <Checkbox
        label={label}
        name={name}
        checked={isChecked}
        indeterminate={isIndeterminate}
        onChange={handleChange}
      />
      {children && (
        <>
          <button onClick={handleCollapsed}>{collapsed ? '▼' : '▲'}</button>
          <div style={{ display: collapsed ? 'none' : 'block' }}>
            {children}
          </div>
        </>
      )}
    </li>
  )
}
