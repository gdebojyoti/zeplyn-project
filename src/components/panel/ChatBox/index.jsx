import { useState } from 'react'

import { inputStyle } from './style'

const ChatBox = ({ onNewMessage, isSendingDisabled }) => {
  const [msg, setMsg] = useState('')

  const onType = e => {
    setMsg(e.target.value)
  }

  const onKeyDown = e => {
    // ignore if disabled
    if (isSendingDisabled) {
      return
    }

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
      // TODO: make this message concise; add CTA instead
      placeholder='Type your message, and press enter to ask Copilot'
      value={msg}
    />
  )
}

export default ChatBox
