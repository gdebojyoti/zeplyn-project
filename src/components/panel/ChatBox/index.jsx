import { useState } from 'react'

import { inputStyle } from './style'

const ChatBox = ({ onNewMessage }) => {
  const [msg, setMsg] = useState('')

  const onType = e => {
    setMsg(e.target.value)
  }

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      // update parent
      onNewMessage(msg)

      // clear internal msg
      setTimeout(() => { setMsg('') })
    }
  }

  return (
    <textarea
      className={inputStyle}
      onChange={onType}
      onKeyDown={onKeyDown}
      placeholder='Ask Copilot'
      value={msg}
    />
  )
}

export default ChatBox
