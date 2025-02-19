export default function getFileName (path) {
  const parts = path.split('/')
  return parts.pop() || 'project'
}
