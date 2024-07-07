const reverseString = function(word) {
    let wordLength = word.length;
    let reversedWord = "";

    for(let i = 0;i < word.length;i ++){
        reversedWord += word[wordLength - (i + 1)];
    }

    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
