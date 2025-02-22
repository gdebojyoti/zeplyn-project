import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activePanelKey: 'chat',
  chat: {
    isDisabled: false,
    messages: [
      {
        user: { name: 'You' },
        msg: {
          text: 'Tell me if this file has syntax errors?',
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
  }
}

const rightSidebarSlice = createSlice({
  name: 'rightSidebar',
  initialState,
  reducers: {
    togglePanel: (initialState, action) => {
      const oldKey = initialState.activePanelKey
      const newKey = action.payload
      initialState.activePanelKey = oldKey === newKey ? '' : newKey
    },
    addChatMessage: (initialState, action) => {
      initialState.chat.messages = [...initialState.chat.messages, action.payload]
    },
    disableChat: (initialState, action) => {
      initialState.chat.isDisabled = action.payload
    }
  }
})

export const { togglePanel, addChatMessage, disableChat } = rightSidebarSlice.actions
export default rightSidebarSlice.reducer
