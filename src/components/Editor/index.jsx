import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import getFileName from '../../utils/getFileName'
import getFileContent from '../../utils/getFileContent'

import { editorHeaderStyle, editorStyle, editorTabStyle, editorWindowStyle } from './style'

const Editor = () => {
  const tree = useSelector(state => state.explorer.tree)
  const selectedFilePath = useSelector(state => state.explorer.selectedFilePath)

  const editorContent = useMemo(() => getFileContent(tree, selectedFilePath), [tree, selectedFilePath])

  return (
    <main className={editorStyle}>
      {selectedFilePath && (
        <div className={editorHeaderStyle}>
          <div className={editorTabStyle}>{getFileName(selectedFilePath)}</div>
        </div>
      )}
      <div className={editorWindowStyle}>{editorContent}</div>
    </main>
  )
}

export default Editor
