import { configureStore } from '@reduxjs/toolkit'

import explorerReducer from './slices/explorerSlice'
import rightSidebarReducer from './slices/rightSidebarSlice'

const store = configureStore({
  reducer: {
    explorer: explorerReducer,
    rightSidebar: rightSidebarReducer
  }
})

export default store
