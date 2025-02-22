import ChatPanel from './ChatPanel'
import { panelContainerStyle } from './style'

const RsPanelContainer = () => {
  const activePanel = 'chat'

  let Panel = null

  switch (activePanel) {
    case 'chat': {
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
