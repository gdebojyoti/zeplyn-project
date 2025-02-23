import { useDispatch, useSelector } from 'react-redux'

import { APP_NAME } from '../../../../config/variables'
import { togglePanel as togglePanelAction } from '../../../store/slices/rightSidebarSlice'

import chatIcon from '../../../assets/icons/chat.png'

import { iconStyle, navStyle, iconWrapperStyle, activeIconWrapperStyle } from './style'

const menu = [
  {
    key: 'chat',
    icon: chatIcon,
    title: `Chat with ${APP_NAME}`
  }
]

const RsNav = () => {
  const dispatch = useDispatch()
  const activePanelKey = useSelector(state => state.rightSidebar.activePanelKey)

  const togglePanel = (id) => {
    console.log('toggling..', id)
    dispatch(togglePanelAction(id))
  }

  return (
    <nav className={navStyle}>
      {menu.map(({ key, ...rest }) => (
        <NavItem
          key={key}
          isActive={activePanelKey === key}
          onClick={() => togglePanel(key)}
          {...rest}
        />
      ))}
    </nav>
  )
}

const NavItem = ({ isActive, icon, title, onClick }) => {
  return (
    <div className={`${iconWrapperStyle} ${isActive ? activeIconWrapperStyle : ''}`} onClick={onClick}>
      <img src={icon} title={title} className={iconStyle} />
    </div>
  )
}

export default RsNav
