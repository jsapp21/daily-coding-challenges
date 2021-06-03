// linear search - return index of found num in array, if not found return -1
// this is what is happening in built in JS methods (indexOf, includes, find, findIndex)
// O(n) - linear

const linearSerch = (arr, num) => {

    for (let i=0; i < arr.length; i++){
        if (arr[i] === num) return i;
    }
    return -1
}

// console.log(linearSerch([34, 56, 1, 2], 1))
// console.log(linearSerch([34, 56, 1, 2], 5))

// SLIDING WINDOW
// binary search - accepts a sorted array and value, create two pointers
// left one at the start and right one at the end of array
// while left pointer comes before the right pointer:
// create a middle pointer
    // if you find the value return index
    // too small? move the left pointer up
    // too large? move the right pinter down
    // if never found return -1

const binarySearch = (arr, num) => {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    
    while (arr[middle] !== num && start <= end){
        // console.log(start, middle, end)
        if (num < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    // console.log(start, middle, end)
    if (arr[middle] === num){
        return middle
    } else {
        return -1
    }


}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 9))
