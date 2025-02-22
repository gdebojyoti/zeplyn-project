import { useEffect, useMemo, useState } from 'react'
import { Provider } from 'react-redux'

import Explorer from './components/Explorer'
import Editor from './components/Editor'
import RightSidebar from './components/RightSidebar'

// Styles
import globalStyles from './globalStyles'

import store from './store'

import { getTree } from './api/getTree'
import getFileContent from './utils/getFileContent'

export default function App () {
  const [tree, setTree] = useState({})
  const [selectedFilePath, setSelectedFilePath] = useState()

  useEffect(() => {
    getTree()
      .then((data) => data.json())
      .then((data) => {
        setTree(data)
      })
  }, [])

  const editorContent = useMemo(() => getFileContent(tree, selectedFilePath), [tree, selectedFilePath])

  return (
    <Provider store={store}>
      <div className={globalStyles}>
        <Explorer
          tree={tree}
          setSelectedFilePath={setSelectedFilePath}
          selectedFilePath={selectedFilePath}
        />
        <Editor
          selectedFilePath={selectedFilePath}
          editorContent={editorContent}
        />
        <RightSidebar />
      </div>
    </Provider>
  )
}
