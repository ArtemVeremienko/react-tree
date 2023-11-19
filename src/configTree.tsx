export type ID = string | number

export interface Node {
  id: ID
  name: string
  children?: Node[]
}

export const configTree: Node[] = [
  {
    id: 1,
    name: 'users',
    children: [
      {
        id: 2,
        name: 'admin',
        children: [
          { id: 3, name: 'read' },
          { id: 4, name: 'write' },
          { id: 5, name: 'delete' },
        ],
      },
      {
        id: 6,
        name: 'moderator',
        children: [
          { name: 'read', id: 7 },
          { name: 'write', id: 8 },
          {
            name: 'custom',
            id: 11,
            children: [
              { name: 'update', id: 12 },
              { name: 'fix', id: 13 },
            ],
          },
        ],
      },
      { id: 9, name: 'user', children: [{ name: 'read', id: 10 }] },
    ],
  },
]
