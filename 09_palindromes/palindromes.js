const palindromes = function (sentence) {
    const pattern = /[^a-zA-Z0-9]/g;
    let onlyLetters = sentence.replace(pattern, "").toLowerCase();
    let numOfLetters = onlyLetters.length;
    let flag = true;
    for(let i = 0;i < Math.floor(numOfLetters/2);i ++){
        if(onlyLetters[i] !== onlyLetters[numOfLetters - i - 1]){
            flag = false;
        }
    }

    return flag;
};

// Do not edit below this line
module.exports = palindromes;
