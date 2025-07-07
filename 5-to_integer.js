const { argv } = require('node:process')

if (argv[2]){
    let num = Number(argv[2])
    if (num){
        console.log(`My number: ${num}`)
    }else{
        console.log('Not a number')
    }
}
