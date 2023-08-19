function factorial(n){
    if(n === 0){
        return 1;
    }
   return n * factorial(n-1);
}
console.log(factorial(1))
console.log(factorial(200))
console.log(factorial(50))
console.log(factorial(17))