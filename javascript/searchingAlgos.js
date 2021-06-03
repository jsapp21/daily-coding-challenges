// linear search - return index of found num in array, if not found return -1
// this is what is happening in built in JS methods (indexOf, includes, find, findIndex)
// O(n) - linear

const linearSerch = (arr, num) => {

    for (let i=0; i < arr.length; i++){
        if (arr[i] === num) return i;
    }
    return -1
}

console.log(linearSerch([34, 56, 1, 2], 1))
console.log(linearSerch([34, 56, 1, 2], 5))

