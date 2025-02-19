import { useState } from 'react'

import { ChevronDown } from '../assets/ChevronDown'
import { ChevronRight } from '../assets/ChevronRight'

import getFileIcon from '../utils/getFileIcon'
import getFileName from '../utils/getFileName'

const Sidebar = ({
  tree,
  setEditorContent,
  setSelectedFilePath,
  selectedFilePath
}) => {
  return (
    <aside className='sidebar'>
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
  selectedFilePath
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
      <div className='label'>
        <span className='label--file' onClick={toggleCollapse}>
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
              key={index}
            />
          ))}
      </div>
    )
  }

  if (type === 'file') {
    const Icon = getFileIcon(path)
    const isSelected = selectedFilePath === path

    return (
      <div className='label label--file'>
        <Icon />
        <span
          className={`label__file-icon ${
            isSelected && 'label__file-icon--selected'
          }`}
          onClick={selectFile}
        >
          {getFileName(path)}
        </span>
      </div>
    )
  }

  return null
}

export default Sidebar
