import { addChatMessage, disableChat } from '../../../store/slices/rightSidebarSlice'
import llm from '../../../api/llm'
import getParentFolder from '../../../utils/getParentFolder'

export function sendMessage (dispatch, msg, filePath) {
  // check if folder is to be included
  let folderPath = ''
  if (msg.includes('folder') || msg.includes('dir')) {
    folderPath = getParentFolder(filePath)
  }

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
  llm({
    msg,
    path: folderPath || filePath // NOTE: if folder is to be referred, skip file
  }).then(data => {
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
