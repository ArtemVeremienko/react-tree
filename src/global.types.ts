export type ID = string | number

export interface Node {
  id: ID
  name: string
  children?: Node[]
}
