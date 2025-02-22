export default function getParentFolder (path) {
  // get last slash
  const lastSlashIndex = path.lastIndexOf('/')

  // handle '/' cases
  if (lastSlashIndex <= 0) {
    return 'project'
  }

  return path.substring(0, lastSlashIndex)
}
