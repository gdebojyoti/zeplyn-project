import { useState } from 'react'

import { ChevronDown } from '../../assets/ChevronDown'
import { ChevronRight } from '../../assets/ChevronRight'

import getFileIcon from '../../utils/getFileIcon'
import getFileName from '../../utils/getFileName'

import { explorerStyle, panelNameStyle, LabelStyle } from './style'

const Explorer = ({
  tree,
  setSelectedFilePath,
  selectedFilePath
}) => {
  return (
    <aside className={explorerStyle}>
      <h2 className={panelNameStyle}>Explorer</h2>
      <Label
        setSelectedFilePath={setSelectedFilePath}
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
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { type, path, nodes } = tree

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const selectFile = () => {
    setSelectedFilePath(path)
  }

  if (type === 'folder') {
    return (
      <>
        <LabelStyle style={{ paddingLeft: `${depth * 10}px` }} onClick={toggleCollapse}>
          {isCollapsed ? <ChevronRight /> : <ChevronDown />}
          <span>{getFileName(path)}</span>
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

    return (
      <LabelStyle isSelected={selectedFilePath === path} style={{ paddingLeft: `${depth * 10}px` }} onClick={selectFile}>
        <Icon />
        <span className='label__file-name'>
          {getFileName(path)}
        </span>
      </LabelStyle>
    )
  }

  return null
}

export default Explorer
