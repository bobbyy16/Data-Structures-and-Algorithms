var moveZeroRight = function (arr){
    let left = 0
    let right = 0
    while (right < arr.length) {
        if (arr[right] !== 0){
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
        }
        right++
    }
    return arr;
}

const arr = [0, 1, 0, 5, 6]
moveZeroRight(arr)
console.log(arr);
