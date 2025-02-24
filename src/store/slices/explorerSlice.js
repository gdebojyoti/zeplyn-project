import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tree: {},
  selectedFilePath: ''
}

const explorerSlice = createSlice({
  name: 'explorer',
  initialState,
  reducers: {
    updateTree: (initialState, action) => {
      initialState.tree = action.payload
    },
    updateSelectedFilePath: (initialState, action) => {
      initialState.selectedFilePath = action.payload
    }
  }
})

export const { updateTree, updateSelectedFilePath } = explorerSlice.actions
export default explorerSlice.reducer
