const fs = require('fs')

const out = fs.createWriteStream('./outAomine.log')
const err = fs.createWriteStream('./errAomine.log')

const consoleAomine = new console.Console(out, err)




consoleAomine.zone = txt => {
  console.log(txt)
}

// setInterval(() => {
//   consoleAomine.log(new Date())
//   consoleAomine.error(new Error('Oooops!'))
// }, 2000)

consoleAomine.zone('ahhhhh mi pixula :v')