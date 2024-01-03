// throw a hashmap and store the index value and key, and check if there present target - value, if it present then return the array [nums[i], i]

// leetcode 1

const twoSum = (nums, target) => {
    if (nums.length < 2) return;

    const map = new Map()

    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];

        if(map.has(diff)){
            return [map.get(diff), i]
        }

        map.set(nums[i], i)
    }

    return [-1, -1]

}


const arr = [1, 3, 4, 5, 6]
const target = 10

const ans = twoSum(arr, target)
console.log(ans)