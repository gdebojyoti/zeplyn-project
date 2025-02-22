import { useEffect, useState } from 'react'

import Explorer from './components/Explorer'
import Editor from './components/Editor'

// Styles
import globalStyles from './globalStyles'
import { getTree } from './api/getTree'

export default function App () {
  const [tree, setTree] = useState({})
  const [selectedFilePath, setSelectedFilePath] = useState()
  const [editorContent, setEditorContent] = useState()

  useEffect(() => {
    getTree()
      .then((data) => data.json())
      .then((data) => {
        setTree(data)
      })
  }, [])

  return (
    <div className={globalStyles}>
      <Explorer
        tree={tree}
        setEditorContent={setEditorContent}
        setSelectedFilePath={setSelectedFilePath}
        selectedFilePath={selectedFilePath}
      />
      <Editor
        selectedFilePath={selectedFilePath}
        editorContent={editorContent}
      />
    </div>
  )
}
