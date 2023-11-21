import { ReactNode, useState } from 'react'

export interface NodeItemProps {
  name: string
  children?: ReactNode
}

export const NodeItem = ({ name, children }: NodeItemProps) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <li>
      {name}
      {children && <button onClick={() => setCollapsed((p) => !p)}>x</button>}
      {children && (
        <div style={{ display: collapsed ? 'none' : 'block' }}>{children}</div>
      )}
    </li>
  )
}
