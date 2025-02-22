import { useDispatch } from 'react-redux'

import ChatUser from '../ChatUser'

import getFileIcon from '../../../utils/getFileIcon'
import getFileName from '../../../utils/getFileName'
import { updateSelectedFilePath } from '../../../store/slices/explorerSlice'

import { messageStyle, textStyle, pathStyle } from './style'

const ChatMessage = ({ data }) => {
  const { user: { name }, msg: { text, filePath } } = data

  return (
    <div className={messageStyle}>
      <ChatUser name={name} />
      <div className={textStyle}>{text}</div>
      <File path={filePath} />
    </div>
  )
}

const File = ({ path }) => {
  const dispatch = useDispatch()

  if (!path) {
    return null
  }

  const openFile = () => {
    dispatch(updateSelectedFilePath(path))
  }

  const Icon = getFileIcon(path)
  const fileName = getFileName(path)

  return (
    <div className={pathStyle} onClick={openFile}>
      <Icon /> {fileName}
    </div>
  )
}

export default ChatMessage
