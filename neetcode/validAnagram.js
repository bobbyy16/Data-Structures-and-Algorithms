// create a map and store the keys of object as characters of string and values as number of counts and compare it with the other strings count-- if there present any value in the second string

// leetcode 242

var validAnagram = (s, t) => {

    if (s.length !== t.length) return false

    let map = {}

    for (let i = 0; i < s.length; i++){
        let letter = s[i]
        if(!map[letter]) map[letter] = 1
        else map[letter]++
    }

    for (let i = 0; i < t.length; i++){
        let letter = t[i]

        if(map[letter] === undefined) return false
        if(map[letter] < 1) return false

        map[letter]--
    }

    return true
}


function validAnagram2(s, t) {
    return s.split('').sort().join('') == t.split('').sort().join('')
}

const s = "anagram"
const t = "nagaram"
const result = validAnagram(s, t)
const result2 = validAnagram2(s, t)
console.log(result);
console.log(result2)