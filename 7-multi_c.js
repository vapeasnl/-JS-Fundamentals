const {argv} = require('node:process')

if (argv[2]){
    let num = Number(argv[2])
    if (num != NaN && num > 0){
        for (let i = 0; i < num; i++){
            console.log("C is fun")
        }
    }
}else{
    console.log("Missing number of occurrences")
}
