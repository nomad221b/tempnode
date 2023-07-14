const os= require('os')
// info about current user

const user= os.userInfo()
console.log(user)

//know system uptime in seconds
console.log(`system uptime is: ${os.uptime}` )

const currentos = {
    name: os.type(),
    release: os.release(),
    totalmemory: os.totalmem(),
    freememory:os.freemem(),

}
console.log(currentos)