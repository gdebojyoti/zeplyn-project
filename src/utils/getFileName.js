import { ROOT_FOLDER_NAME } from '../../config/variables'

export default function getFileName (path) {
  const parts = path.split('/')
  return parts.pop() || ROOT_FOLDER_NAME
}
