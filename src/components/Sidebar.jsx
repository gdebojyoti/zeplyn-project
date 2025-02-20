import { useEffect, useState } from 'react'

import { ChevronDown } from '../assets/ChevronDown'
import { ChevronRight } from '../assets/ChevronRight'

import getFileIcon from '../utils/getFileIcon'
import getFileName from '../utils/getFileName'

import { dummyStyle, PanelNameStyle } from './style'

const Sidebar = ({
  tree,
  setEditorContent,
  setSelectedFilePath,
  selectedFilePath
}) => {
  const [isEnabled, setIsEnabled] = useState(false)
  useEffect(() => {
    setTimeout(() => setIsEnabled(true), 2000)
  }, [])
  return (
    <aside className={dummyStyle}>
      <PanelNameStyle className='panel-name' isEnabled={isEnabled}>Explorer</PanelNameStyle>
      <Label
        setEditorContent={setEditorContent}
        setSelectedFilePath={setSelectedFilePath}
        selectedFilePath={selectedFilePath}
        tree={tree}
      />
    </aside>
  )
}

const Label = ({
  tree,
  setEditorContent,
  setSelectedFilePath,
  selectedFilePath,
  depth = 0
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { type, path, nodes, content } = tree

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const selectFile = () => {
    setEditorContent(content)
    setSelectedFilePath(path)
  }

  if (type === 'folder') {
    return (
      <>
        <span className='label' style={{ paddingLeft: `${depth * 10}px` }} onClick={toggleCollapse}>
          {isCollapsed ? <ChevronRight /> : <ChevronDown />}
          <span>{getFileName(path)}</span>
        </span>
        {!isCollapsed &&
          nodes.map((node, index) => (
            <Label
              setEditorContent={setEditorContent}
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

    const className = `label ${
      selectedFilePath === path && 'label--selected'
          }`

    return (
      <div className={className} style={{ paddingLeft: `${depth * 10}px` }} onClick={selectFile}>
        <Icon />
        <span className='label__file-name'>
          {getFileName(path)}
        </span>
      </div>
    )
  }

  return null
}

export default Sidebar
