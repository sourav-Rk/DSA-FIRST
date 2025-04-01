//recursive fibonacci
function recursiveFibonacci() {
    if(n<2) return n
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

//to print a series of fibonacci series using recursive
function recursiveFibonacciSeries(n,a=0,b=1){
    if(n===0) return
    console.log(a)
    recursiveFibonacciSeries(n-1,b,a+b)
}

//recursive factorial
function recursiveFactorial(n) {
    if(n===1) return 1
    return n*recursiveFactorial(n-1)
}

//function to find the sum of an array
function recursiveSum(arr,index=0) {
    if(index ===arr.length) return 0
    return arr[index] + recursiveSum(arr,index+1)
}


