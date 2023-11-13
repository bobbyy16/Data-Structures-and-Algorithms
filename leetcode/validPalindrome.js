var isPalindrome = function(s) {
    
    
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,'')
    let l = 0;
    let r = s.length - 1;
    
    while (l < r) {
        if (s[l] === s[r]) {
            l++;
            r--;
        } else {
            return false;
        }
    }
    
    return true;
};

let str = "A man, a plan, a canal: Panama"


console.log(isPalindrome(str));