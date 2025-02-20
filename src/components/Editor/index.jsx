import getFileName from '../../utils/getFileName'
import { editorHeaderStyle, editorStyle, editorTabStyle, editorWindowStyle } from './style'

const Editor = ({ selectedFilePath, editorContent }) => {
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
