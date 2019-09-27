const asyncCallback = function (cb) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      cb(null, 'Hello World')
    } else {
      cb(new Error('hello error'))
    }
  }, 2000)
}

const functionCallback = (err, msg) => {
  if (err) {
    console.log(`error: ${err}`)
  } else {
    console.log(`message: ${msg}`)
  }
}

asyncCallback(functionCallback)