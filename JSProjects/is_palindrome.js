let isPalindrome = function(str) {
    if(typeof str == 'string') {
        var size = str.length;
        for(let i = 0; i < size/2; i++) {
            if(str[i] !== str[size - 1 - i]) {
                return 'String is not a Palindrome';
            }
        }

        return 'String is a Palindrome';
        

    } else {
        return 'Input value is not a string';
    }
}

console.log(isPalindrome('level'));
console.log(isPalindrome('interview'));
//console.log(isPalindrome(2));