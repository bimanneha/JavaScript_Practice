let isPalindrome = function(str) {
    if(typeof str == 'string') {
        var regExp = /[^A-Za-z0-9]/g;

        var actualString = str.toLowerCase().replace(regExp, '');
        var reversedString = str.split('').reverse().join('');

        if(actualString === reversedString)
            return 'String is a Palindrome';
        else 
            return 'String is not a Palindrome';

    } else {
        return 'Input value is not a string';
    }
}

console.log(isPalindrome('level'));
console.log(isPalindrome('interview'));
console.log(isPalindrome(2));