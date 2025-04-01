//first and last occurance of an element
function occurance(arr,target){
    let first = -1,last = -1 ;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === target){
            if(first === -1) first = i
            last = i
        }
    }
    return {first,last}
}

//third largest element O(n log n)
function thirdLargest(arr) {
    if(arr.length<3) return "array must contain 3 elements";

    let unique = [...new Set(arr)]
    unique.sort((a,b)=>a-b)
    return unique.length>=3 ? unique[2] : "no third element"
}

//third largest element
function thirdLargest(arr) {
    if(arr.length < 3) return "array must contain 3 elements"

    let first = -Infinity,second = -Infinity,third = -Infinity;
    for(let i =0;i<arr.length;i++){
        if(arr[i] > first){
            third = second
            second = first
            first = arr[i]
        }
        else if(arr[i]>second && arr[i]<first){
            third = second
            second = arr[i]
        }
        else if(arr[i]>third && arr[i]<second){
            third = arr[i]
        }
    }
    return third
}