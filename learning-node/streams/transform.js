const { Transform } = require('stream')

const transformString = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase())
    callback()
  }
})

process.stdin.pipe(transformString).pipe(process.stdout)