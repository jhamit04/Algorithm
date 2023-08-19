function fibonacci(n) {
    if(n<2){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(0))
console.log(fibonacci(10))
console.log(fibonacci(15))

//time complexity = o(2^n)