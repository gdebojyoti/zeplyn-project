import { ROOT_FOLDER_NAME } from '../../config/variables'

export default function getParentFolder (path) {
  // ignore for missing paths
  if (!path) {
    return
  }

  // get last slash
  const lastSlashIndex = path.lastIndexOf('/')

  // handle '/' cases
  if (lastSlashIndex <= 0) {
    return ROOT_FOLDER_NAME
  }

  return path.substring(0, lastSlashIndex)
}
