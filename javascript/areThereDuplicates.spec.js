// accepts a variable number of agruments and check if there are any duplicates among the arguments passed in
// return true or false
// must be Time & Space - O(n) 
// BONUS: time - O(n log n), space - O(1)

const areThereDuplicates = (...args) => {

    let arr = [];
    arr.push(...args)

    let sortedArr = arr.sort();

    let left = 0;
    let right = 1;

    while (left < sortedArr.length) {
        if (sortedArr[left] === sortedArr[right]){
            return true
        }
        left++
        right++
    }

    return false

}


console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))


// areThereDuplicates One Liner Solution
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }