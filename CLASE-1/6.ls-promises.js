const { error } = require('node:console')
const fs = require('node:fs/promises')

fs.readdir('.')
    .then(files => {
        files.forEach(file => {
            console.log(file)
        })
    })
    .catch(err => {
        console.log(err)
        return
    })
        
    

