const removeFromArray = function(arr, ...removalArray) {
    let arrLength = arr.length;
    let offset = 0;

    for(let i = 0;i < arrLength;i++){
        if(removalArray.includes(arr[i + offset])){
            arr.splice(i + offset, 1);
            offset -= 1;    
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
