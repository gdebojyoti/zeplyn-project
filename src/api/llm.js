export default function llm ({ path }) {
  let output = 'This function is not implemented'
  if (path) {
    output = `This function is not implemented but I got "${path}" as input`
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(output)
    }, 500)
  })
}
