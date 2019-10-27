const fs = require('fs')

fs.copyFile('te_robare.txt', 'teRobare.txt', err => {
  if (err) {
    console.log(err)
  }

  console.log('El archivo fue copiado correctamente')
})