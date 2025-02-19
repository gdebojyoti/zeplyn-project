import getFileName from '../utils/getFileName'

const Editor = ({ selectedFilePath, editorContent }) => {
  return (
    <main className='editor'>
      <div className='editor__header'>
        {selectedFilePath && (
          <div className='editor__tab'>{getFileName(selectedFilePath)}</div>
        )}
      </div>
      <div className='editor__window'>{editorContent}</div>
    </main>
  )
}

export default Editor
