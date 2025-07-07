const {argv} = require('node:process')

if (argv[2] && argv[3]){
    let num1 = Number(argv[2])
    let num2 = Number(argv[3])
    if (num1 != NaN  && num2 != NaN ){
        let result = num1 + num2
        console.log(result)
    }else{
        console.log(NaN)
    }
}else{
        console.log(NaN)
    }
