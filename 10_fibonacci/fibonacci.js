const fibonacci = function(n) {
    n = parseInt(n);
    let first = 0;
    let second = 1;    

    if(n < 0) return "OOPS";
    if(n === 0) return 0;
    if(n === 1) return 1;
    
    
    for(let i = 2;i <= n;i ++){
        let sum = first + second;
        first = second;
        second = sum;
    }

    return second;
};

// Do not edit below this line
module.exports = fibonacci;
