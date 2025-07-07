const {argv} = require('node:process')

if (argv[2]){
    let num = Number(argv[2])
    if (num != NaN && num > 0){
        for (let i = 0; i < num; i++){
            let result = ""
            for (let j = 0; j < num; j++){
                result += "X"
            }
            console.log(result)
        }
    }else{
    console.log("Missing size")
}
}else{
    console.log("Missing size")
}
