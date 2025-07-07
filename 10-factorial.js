const {argv} = require('node:process')

if(argv[2]){
    let num = Number(argv[2])

    function factorial(n){
        if (n == 0 || n == 1){
            return 1
        }else{
        return (n * factorial(n - 1))
        }
        
    }

    console.log(factorial(num))
}else{
    console.log(1)
}
