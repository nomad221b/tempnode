
const path = require('path')
console.log(path.sep)
const filepath = path.join('/content', 'sub', 'test.txt')
console.log(filepath)
const base= path.basename(filepath)
console.log(base)
const absolutepath = path.resolve(__dirname,'/content','sub','test.txt')
console.log(absolutepath)