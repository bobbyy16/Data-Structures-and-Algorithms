
var nCr = function(n, r) {
    let res = 1;
    
    for (let i = 0; i < r; i++) {
        res = res * (n - i);
        res = res / (i + 1);
    }

    return parseInt(res);
};

const r = 5
const c = 3
const find = nCr(r-1, c-1)
console.log(find);

function pascalTriangleArray(n) {
    let array = []
    for (let c = 1; c <= n; c++) {
      array.push(nCr(n - 1, c - 1));
    }
    return array
}

const arr = pascalTriangleArray(5)
console.log(arr)

var generate = function(numRows) {
        let ans = [];
        
        for (let i = 0; i < numRows; i++) {
            let temp = [];
            for (let j = 0; j <= i; j++) {
                temp.push(nCr(i, j));
            }
            ans.push(temp);
        }
        return ans;
    };

    const ans = generate(5)
    console.log(ans);