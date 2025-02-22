import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activePanelKey: '',
  data: {}
}

const rightSidebarSlice = createSlice({
  name: 'rightSidebar',
  initialState,
  reducers: {
    togglePanel: (initialState, action) => {
      const oldKey = initialState.activePanelKey
      const newKey = action.payload
      initialState.activePanelKey = oldKey === newKey ? '' : newKey
    }
  }
})

export const { togglePanel } = rightSidebarSlice.actions
export default rightSidebarSlice.reducer
