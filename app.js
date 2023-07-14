const a= require('lodash')

const items= [1,[2,[3,[4]]]]

const newitem = a.flattenDeep(items)
console.log(newitem)
