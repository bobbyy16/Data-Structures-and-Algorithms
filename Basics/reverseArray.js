const revA = (array) => {
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        const temp = array[start];
        array[start] = array[end];
        array[end] = temp;

        start++;
        end--;
    }
}

const arr = [5, 4, 3, 2, 1];
revA(arr);
console.log(arr);
