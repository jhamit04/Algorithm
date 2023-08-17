function isPowerOFTwo(n) {
    if(n < 1){
        return false;
    }
    while(n > 1){
        if(n % 2 !== 0 ){
            return false
        }
        n = n/2;
    }
    return true;
}

console.log(isPowerOFTwo(4))
console.log(isPowerOFTwo(8))
console.log(isPowerOFTwo(10))

//time complexity = o(log n) because in every iteration 
//n is decrease by half

function isPowerOFTwoBitwise(n){
    if(n < 1){
        return false;
    }
    return (n & n-1) === 0 ;
}
console.log(isPowerOFTwoBitwise(6))
console.log(isPowerOFTwoBitwise(8))
console.log(isPowerOFTwoBitwise(10))

//time complexity = o(1)