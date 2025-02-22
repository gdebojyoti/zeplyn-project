import RsNav from './RsNav'
import RsPanelContainer from './RsPanelContainer'

import { rightSidebarStyle } from './style'

const RightSidebar = () => {
  return (
    <div className={rightSidebarStyle}>
      <RsNav />
      <RsPanelContainer />
    </div>
  )
}

export default RightSidebar
