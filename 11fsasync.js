const { readFile, writeFile} = require('fs')
console.log('start')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
    console.log(err)
    return;
    }
    const first=result;


readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
    console.log(err)
    return
    }
    const second=result

writeFile(
    './content/resultasync.txt', `Here is the result: ${first},${second}`,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('done with the task')

    })
})
})
console.log('staring next one')
// // Since file operations in Node.js are non-blocking, 
// the code doesn't wait for them to finish before moving 
// on to the next line. Therefore, if we executed the second 
// readFile and writeFile operations outside the first readFile 
// callback, they would likely execute before the first 
// file operation has completed.

// // By nesting the subsequent file operations within the callback 
// of the first readFile operation, we ensure that they are executed 
// only when the first file operation has finished successfully. 
// This allows us to maintain the desired sequence of reading 
// the first file, then reading the second file, and finally writing
//  the combined content to a new file.


 
