var intersection = function(a, b) {
    const result = []
    const numCounts1 = {};
    const numCounts2 = {};

    // 1. Count the occurrence of elements in the first array (nums1)
    for (const num of a) {
        if (numCounts1[num] === undefined) {
            numCounts1[num] = 0;
        }
        numCounts1[num]++;
        console.log(a, `:${numCounts1[num]}`);
    }

    // 2. Count the occurrence of elements in the second array (nums2)
    for (const num of b) {
        if (numCounts2[num] === undefined) {
            numCounts2[num] = 0;
        }
        numCounts2[num]++;
        console.log(b, `: ${numCounts2[num]}`);
    
    }

    // 3. Find the intersection
    for (const num in numCounts2) {
        const count = Math.min(numCounts1[num] || 0, numCounts2[num]);
        for (let i = 0; i < count; i++) {
            result.push(parseInt(num));
        }
    }

    return result;
}

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const resultArray = intersection(nums1, nums2);
console.log(`intersection = ${resultArray}`);
