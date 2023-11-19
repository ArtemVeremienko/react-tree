import { ID, Node } from '../configTree'

export function dfs<T extends Node>(tree: T[], id: ID): T | null {
  for (const node of tree) {
    if (node.id === id) return node
    if (node.children) {
      const result = dfs(node.children, id)
      if (result) return result as T
    }
  }
  return null
}
