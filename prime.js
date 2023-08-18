function isPrime(n) {
    if(n < 2){
        return true;
    }
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
 console.log(isPrime(7));
 console.log(isPrime(8));
 console.log(isPrime(13));


// time complexity = o(n)


//A prime no is a natural number greater than 1 that is not
// a product of two smaller natural number.

// optimized solution

function isPrime(n) {
    if(n < 2){
        return true;
    }
    for(let i = 2; i <= Math.sqrt(n); i++){ //because one divisor is always less than n
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
 console.log(isPrime(7));
 console.log(isPrime(8));
 console.log(isPrime(13));

 // time complexity = o(sqrt n)
