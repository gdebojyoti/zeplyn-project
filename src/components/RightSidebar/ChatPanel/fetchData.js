import { addChatMessage, disableChat } from '../../../store/slices/rightSidebarSlice'
import llm from '../../../api/llm'

export function sendMessage (dispatch, msg) {
  // show msg in chat panel
  dispatch(addChatMessage({
    // TODO: hard-coded name should be replaced with value from redux store
    user: { name: 'You' },
    msg: {
      text: msg
    }
  }))

  // disable sending more messages
  dispatch(disableChat(true))

  // hit LLM API
  llm('dummy.json').then(data => {
    // show msg in chat panel
    dispatch(addChatMessage({
      // TODO: hard-coded name should be replaced with value from config
      user: { name: 'Zeplyn Copilot' },
      msg: {
        text: data
      }
    }))
  }).catch(err => {
    // TODO: handle error scenarios
    console.log(err)
  }).finally(() => {
    // once settled, re-enable chat messaging
    dispatch(disableChat(false))
  })
}
