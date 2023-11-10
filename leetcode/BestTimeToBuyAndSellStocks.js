// #leetcode 121 

var maxProfit = function(prices){
    let left = 0;
    let right = 1;
    let maxP = 0;

    while(right < prices.length){
        if (prices[right] > prices[left]){
            let profit = prices[right] - prices[left];
            maxP = Math.max(maxP, profit);
        }else{
            left = right;
        }
        right++;
    }

    return maxP;
}

const arr = [7, 1, 2, 3, 6, 4, 5];

const ans = maxProfit(arr)
console.log(ans);