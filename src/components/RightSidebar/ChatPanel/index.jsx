import { panelStyle } from './style'
import ChatMessages from '../../panel/ChatMessages'
import ChatBox from '../../panel/ChatBox'

const msgList = [
  {
    user: { name: 'You' },
    msg: {
      text: 'Tell me if this file has syntax errors',
      path: '/src/api/dummy.json'
    }
  },
  {
    user: { name: 'Zeplyn Copilot' },
    msg: {
      text: 'This function is not implemented but I got a dummy.ts as input'
    }
  }
]

const ChatPanel = () => {
  const onNewMessage = (msg) => {
    console.log('new msg:', msg)
  }

  return (
    <div className={panelStyle}>
      <ChatMessages messages={msgList} />
      <ChatBox onNewMessage={onNewMessage} />
    </div>
  )
}

export default ChatPanel
