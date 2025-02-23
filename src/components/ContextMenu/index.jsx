import { useEffect, useState } from 'react'

import { menuBackgroundStyle, menuItemStyle, MenuStyle } from './style'

const ContextMenu = ({ entityRef, items = [] }) => {
  const [position, setPosition] = useState(null)

  const onRightClick = (e) => {
    e.preventDefault()
    e.stopPropagation()

    setPosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  useEffect(() => {
    if (!entityRef.current) {
      return
    }

    // if menu is already open (i.e., `position` has value), no need to listen to events
    if (position) {
      return
    }

    const abortController = new AbortController()

    // WARNING: this "overrides" the React synthetic events
    entityRef.current.addEventListener('contextmenu', onRightClick, {
      signal: abortController.signal
    })

    return () => {
      abortController.abort()
    }
  }, [position])

  // when user clicks menu background, close the menu
  const onClickMenuBackground = e => {
    e.preventDefault()
    e.stopPropagation()

    setPosition(null)
  }

  // when user right clicks menu background, ignore it
  const onRightClickMenuBackground = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  // when user clicks a menu item, trigger the corresponding onClick and close the menu (by resetting `position`)
  const onClickMenuItem = (onClick, e) => {
    setPosition(null) // delete context menu
    onClick() // call item's onClick method
  }

  if (position) {
    return (
      <div onClick={onClickMenuBackground} className={menuBackgroundStyle} onContextMenu={onRightClickMenuBackground}>
        <MenuStyle position={position}>
          {items.map(({ label, onClick }, index) => (
            <div key={index} className={menuItemStyle} onClick={onClickMenuItem.bind(null, onClick)}>
              {label}
            </div>
          ))}
        </MenuStyle>
      </div>
    )
  }

  return null
}

export default ContextMenu
