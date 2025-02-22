import { userStyle, iconStyle, nameStyle } from './style'

const ChatUser = ({ name }) => {
  return (
    <div className={userStyle}>
      <div className={iconStyle} />
      <div className={nameStyle}>{name}</div>
    </div>
  )
}

export default ChatUser
