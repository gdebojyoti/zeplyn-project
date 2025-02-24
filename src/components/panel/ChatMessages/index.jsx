import { useEffect, useRef } from 'react'
import ChatMessage from '../ChatMessage'

import { wrapperStyle } from './style'

const ChatMessages = ({ messages }) => {
  const bottomRef = useRef()

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className={wrapperStyle}>
      {messages.map((msg, index) => <ChatMessage key={index} data={msg} />)}
      <div ref={bottomRef} />
    </div>
  )
}

export default ChatMessages
