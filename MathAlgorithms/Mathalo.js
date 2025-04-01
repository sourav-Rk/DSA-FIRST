//fibonacci series
function fibonnaci(value) {
    const arr = [0,1]
    for(let i = 2;i<=value;i++){
        arr.push(arr[i-1] + arr[i-2])
    }
    console.log(arr)
}

//factorial of a number
function factorial(value) {
    let factorial = 1
    for(let i=value;i>=1;i--){
       factorial = factorial*i
    }
    return factorial
}

//prime or not
function isPrime(value){
    if(value<2) return false
    if(value ===2) return true
    if(value%2===0) return false
    for(let i = 2;i<Math.sqrt(value);i++){
        if(value%i===0) return false
    }
    return true
}


//is power of two
function isPowerOfTwo(n) {
    if(n < 1) return false 
    while(n>1){
        if(n%2!==0) return false
        n = n/2
    }
    return true
}