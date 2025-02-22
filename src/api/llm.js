export default function llm (path) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`This function is not implemented but I got a ${path} as input`)
    }, 500)
  })
}
