import ChatMessage from '../ChatMessage'

import { wrapperStyle } from './style'

const ChatMessages = ({ messages }) => {
  return (
    <div className={wrapperStyle}>
      {messages.map((msg, index) => <ChatMessage key={index} data={msg} />)}
    </div>
  )
}

export default ChatMessages
