import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ChevronDown } from '../../assets/ChevronDown'
import { ChevronRight } from '../../assets/ChevronRight'

import ContextMenu from '../ContextMenu'

import getFileIcon from '../../utils/getFileIcon'
import getFileName from '../../utils/getFileName'

import { updateSelectedFilePath } from '../../store/slices/explorerSlice'
import { sendMessage } from '../RightSidebar/ChatPanel/fetchData'

import { explorerStyle, panelNameStyle, LabelStyle } from './style'

const Explorer = () => {
  const dispatch = useDispatch()
  const tree = useSelector(state => state.explorer.tree)
  const selectedFilePath = useSelector(state => state.explorer.selectedFilePath)

  return (
    <aside className={explorerStyle}>
      <h2 className={panelNameStyle}>Explorer</h2>
      <Label
        setSelectedFilePath={path => dispatch(updateSelectedFilePath(path))}
        selectedFilePath={selectedFilePath}
        tree={tree}
      />
    </aside>
  )
}

const Label = ({
  tree,
  setSelectedFilePath,
  selectedFilePath,
  depth = 0
}) => {
  const entityRef = useRef(null)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const dispatch = useDispatch()

  const { type, path, nodes } = tree

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const selectFile = (e) => {
    setSelectedFilePath(path)
  }

  if (type === 'folder') {
    const rightClickMenu = [
      {
        label: `${isCollapsed ? 'Expand' : 'Collapse'} this folder`,
        onClick: toggleCollapse
      }
    ]

    return (
      <>
        <LabelStyle
          style={{ paddingLeft: `${depth * 10}px` }}
          onClick={toggleCollapse}
          ref={entityRef}
        >
          {isCollapsed ? <ChevronRight /> : <ChevronDown />}
          <span>{getFileName(path)}</span>
          <ContextMenu entityRef={entityRef} items={rightClickMenu} />
        </LabelStyle>
        {!isCollapsed &&
          nodes.map((node, index) => (
            <Label
              setSelectedFilePath={setSelectedFilePath}
              selectedFilePath={selectedFilePath}
              tree={node}
              depth={depth + 1}
              key={index}
            />
          ))}
      </>
    )
  }

  if (type === 'file') {
    const Icon = getFileIcon(path)

    const rightClickMenu = [
      type === 'file' && {
        label: 'Open this file',
        onClick: () => {
          selectFile()
        }
      },
      {
        label: 'Explain the utility of this file',
        onClick: () => {
          sendMessage(dispatch, 'Explain the utility of this file', path, true)
        }
      }
    ]

    return (
      <LabelStyle
        isSelected={selectedFilePath === path}
        style={{ paddingLeft: `${depth * 10}px` }}
        onClick={selectFile}
        ref={entityRef}
      >
        <Icon />
        <span className='label__file-name'>
          {getFileName(path)}
        </span>
        <ContextMenu entityRef={entityRef} items={rightClickMenu} />
      </LabelStyle>
    )
  }

  return null
}

export default Explorer
