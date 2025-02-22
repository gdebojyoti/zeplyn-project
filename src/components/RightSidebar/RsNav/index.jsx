import chatIcon from '../../../assets/icons/chat.png'

import { iconStyle, navStyle, iconWrapperStyle } from './style'

const menu = [
  {
    key: 'chat',
    icon: chatIcon,
    title: 'Chat with Zeplyn Copilot'
  }
]

const RsNav = () => {
  const togglePanel = (id) => {
    console.log('toggling..', id)
  }
  return (
    <nav className={navStyle}>
      {menu.map(({ key, ...rest }) => <NavItem key={key} {...rest} onClick={() => togglePanel(key)} />)}
    </nav>
  )
}

const NavItem = ({ icon, title, onClick }) => {
  return (
    <div className={iconWrapperStyle}>
      <img src={icon} onClick={onClick} title={title} className={iconStyle} />
    </div>
  )
}

export default RsNav
