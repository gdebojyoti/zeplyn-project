import ChatUser from '../ChatUser'

import getFileIcon from '../../../utils/getFileIcon'
import getFileName from '../../../utils/getFileName'

import { messageStyle, textStyle, pathStyle } from './style'

const ChatMessage = ({ data }) => {
  const { user: { name }, msg: { text, path } } = data

  return (
    <div className={messageStyle}>
      <ChatUser name={name} />
      <div className={textStyle}>{text}</div>
      <File path={path} />
    </div>
  )
}

const File = ({ path }) => {
  if (!path) {
    return null
  }

  const Icon = getFileIcon(path)
  const fileName = getFileName(path)

  return (
    <div className={pathStyle}>
      <Icon /> {fileName}
    </div>
  )
}

export default ChatMessage
