import { useSelector } from 'react-redux'

import ChatPanel from '../ChatPanel'

import { panelContainerStyle } from './style'

const RsPanelContainer = () => {
  const activePanelKey = useSelector(state => state.rightSidebar.activePanelKey)

  let Panel = null

  switch (activePanelKey) {
    case 'chat': {
      // TODO: use dynamic loading instead
      Panel = ChatPanel
    }
  }

  if (!Panel) {
    return null
  }

  return (
    <aside className={panelContainerStyle}>
      <Panel />
    </aside>
  )
}

export default RsPanelContainer
