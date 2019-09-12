let countOccur = function(str, srchChar) {
    if(typeof str == 'string') {        
        let regExp = new RegExp(srchChar.toLowerCase(), 'g');
        lowerStr = str.toLowerCase();
        return lowerStr.match(regExp).length;

    } else {
        return 'Input value is not a string';
    }
}

console.log(countOccur('My big super BiGGer getting project gee', 'G'));
console.log(countOccur(2));