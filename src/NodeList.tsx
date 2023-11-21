import { NodeItem } from './NodeItem'
import { Node } from './global.types'

interface NodeProps {
  nodes: Node[]
  onChange?: (node: Node, checked: boolean) => void
}

export function NodeList({ nodes }: NodeProps) {
  return (
    <ul>
      {nodes.map(({ id, name, children = [] }) => (
        <NodeItem key={id} name={name}>
          {children.length > 0 && <NodeList nodes={children} />}
        </NodeItem>
      ))}
    </ul>
  )
}
