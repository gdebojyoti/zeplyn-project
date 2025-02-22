export default function getFileContent (tree, path) {
  // return content if file path is a match
  if (tree.path === path) {
    return tree.content
  }

  // for folders, go through individual nodes
  if (tree.nodes) {
    for (const subtree of tree.nodes) {
      const content = getFileContent(subtree, path)
      if (content) {
        return content
      }
    }
  }

  return null
}
