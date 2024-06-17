const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch (err) {
    console.error(pc.red(`No se ha podido leer la carpeta ${folder}`))
    process.exit(1)
  }

  const filePromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath) // status - informacion del archivo
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${fileType} ${file.padEnd(30)} ${fileSize.padStart(
            5
        )} ${fileModified}`
  })
  const filesInfo = await Promise.all(filePromises)

  filesInfo.forEach((file) => {
    console.log(file)
  })
}

ls(folder)

// finalmente hemos instalado standard (npm i standard -D)
// Comprobamos que se añade al package.json
// instalamos la extension de eslint
// vamos al JSON de los settings del vscode y añadimos:
// "editor.codeActionsOnSave": {
// "source.fixAll.eslint": "always"
// }
// ...y...
// "[javascript]": {
//         "editor.defaultFormatter": "dbaeumer.vscode-eslint",
//         "editor.formatOnSave": true
//     }
