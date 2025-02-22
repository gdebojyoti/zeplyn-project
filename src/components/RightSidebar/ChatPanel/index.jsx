import { useDispatch, useSelector } from 'react-redux'

import ChatMessages from '../../panel/ChatMessages'
import ChatBox from '../../panel/ChatBox'

import { panelStyle } from './style'
import { sendMessage } from './fetchData'

const ChatPanel = () => {
  const dispatch = useDispatch()
  const chat = useSelector(state => state.rightSidebar.chat)
  const { messages, isDisabled } = chat || {}

  const onNewMessage = (msg) => {
    console.log('new msg:', msg)
    sendMessage(dispatch, msg)
  }

  return (
    <div className={panelStyle}>
      <ChatMessages messages={messages} />
      <ChatBox onNewMessage={onNewMessage} isSendingDisabled={isDisabled} />
    </div>
  )
}

export default ChatPanel
