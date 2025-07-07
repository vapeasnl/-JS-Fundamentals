const {argv} = require('node:process')

if (argv[2]){
    argv.forEach((arg, index) => {
        if (index == 2){
            console.log(arg)
        }
    })
}else{
    console.log("No argument")
}
