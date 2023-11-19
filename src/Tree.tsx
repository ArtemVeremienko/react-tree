import { NodeWithParent } from './utils/addParentToNode';
import { ListItem } from './ListItem';

export function Tree({ config }: { config: NodeWithParent[]; }) {
  return (
    <ul>
      {config.map(({ name, id, collapsed, status, children }) => (
        <ListItem
          label={name}
          key={name}
          name={name}
          itemId={id}
          collapsed={collapsed}
          status={status}
        >
          {children.length > 0 && <Tree config={children} />}
        </ListItem>
      ))}
    </ul>
  );
}
