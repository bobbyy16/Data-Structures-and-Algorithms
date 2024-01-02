
// create a set and add nums array to the set, Set does allow the duplicate value, if the value of nums array set equals then you return true else false

// leetcode 217

function containsduplicate (nums) {
    return nums.length !== new Set(nums).size
}


const arr = [1, 3, 4, 5, 9, 9]
const result = containsduplicate(arr)
console.log(result);