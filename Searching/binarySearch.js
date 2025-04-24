//binary search
function binarySearch(arr,target){
    let left = 0
    let right = arr.length -1
    while(left <= right){
        let middle = Math.floor((left + right)/2)
        if(arr[middle] === target) return middle
        else if(target < arr[middle]) right = middle-1
        else left = middle + 1
    }
    return -1
}

//recursive binary search
function binarySearchRecursive(arr,target,leftIndex,rightIndex) {
    if(leftIndex >= rightIndex) return -1

    let middleIndex = Math.floor((leftIndex + rightIndex)/2);
    if(arr[middleIndex] === target) return middleIndex
    else if(target > arr[middleIndex]) {
        return binarySearchRecursive(arr,target,middleIndex+1,rightIndex)
    }
    else{
        return binarySearchRecursive(arr,target,leftIndex,middleIndex-1)
    }
}

const arr = [1,3,5,5,6,7]
console.log(binarySearchRecursive(arr,5,0,arr.length));

