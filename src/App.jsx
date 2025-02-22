import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Explorer from './components/Explorer'
import Editor from './components/Editor'
import RightSidebar from './components/RightSidebar'

// Styles
import globalStyles from './globalStyles'

import { getTree } from './api/getTree'
import { updateTree } from './store/slices/explorerSlice'

export default function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    getTree()
      .then((data) => data.json())
      .then((data) => {
        dispatch(updateTree(data))
      })
  }, [])

  return (
    <div className={globalStyles}>
      <Explorer />
      <Editor />
      <RightSidebar />
    </div>
  )
}
