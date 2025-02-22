import { configureStore } from '@reduxjs/toolkit'

import rightSidebarReducer from './slices/rightSidebarSlice'

const store = configureStore({
  reducer: {
    rightSidebar: rightSidebarReducer
  }
})

export default store
