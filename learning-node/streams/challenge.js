const { Transform } = require('stream')

const trasformString = new Transform({
  transform(chunk, encoding, callback) {
    const text = chunk.toString()
    const arr = text.split(' ')
    const newArr = arr.map(e => {
      return e.charAt(0).toUpperCase() + e.slice(1)
    })
    const newText = newArr.join('')
    this.push(newText)
    callback()
  }
})

process.stdin.pipe(trasformString).pipe(process.stdout)