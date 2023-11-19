import { Tree } from './Tree'
import { TreeContext } from './treeContext'
import { useTreeView } from './hooks/useTreeView'
import { configTree } from './configTree'

function App() {
  const { tree, setChecked, setCollapsed } = useTreeView(configTree)

  return (
    <TreeContext.Provider
      value={{
        setChecked,
        setCollapsed,
      }}
    >
      <Tree config={tree} />
    </TreeContext.Provider>
  )
}

export default App
