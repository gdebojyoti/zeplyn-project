import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activePanelKey: 'chat',
  chat: {
    isDisabled: false,
    messages: []
  }
}

const rightSidebarSlice = createSlice({
  name: 'rightSidebar',
  initialState,
  reducers: {
    openPanel: (initialState, action) => {
      initialState.activePanelKey = action.payload
    },
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

export const { openPanel, togglePanel, addChatMessage, disableChat } = rightSidebarSlice.actions
export default rightSidebarSlice.reducer
