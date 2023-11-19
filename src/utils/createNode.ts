import { Node } from '../configTree'

let id: number = 1

export function createNode(name: string, children: Node[]) {
  return {
    id: id++,
    name,
    children,
  }
}
