const fs = require('fs')

const file = process.argv[2]
const name = process.argv[3]

if (!file || !name) {
  throw new Error('Parametros no encontrados')
}

fs.copyFile(file, name, err => {
  if (err) {
    console.log(err)
  }

  console.log('El archivo fue copiado correctamente')
})