var fibanacci = function(num){

    let a = 1
    let b = 0
    let c = 2

    if (num == 0 && num == 1){
        return 1;
    }
    
    while (c <= num){
        const temp = a + b
        a = b
        b = temp
        c++
    }
    return b
}

const num = 8 //0, 1, 1, 2, 3, 5, 8, 13

console.log(fibanacci(num));