// create a function that accpets a sorted array and counts the unique values, return that number
// O(n) b/c it only loops once 

// if not sorted, sort first

const arr = [1, 2, 3, 4, 7, 7, 12, 12, 12, 13]

const countUniqueValues = (arr) => {
    let i=0;

    for (let j=0; j < arr.length; j++){
       if (arr[i] !== arr[j]) {
           i++;
           arr[i] = arr[j]
       }
    }

    return i + 1;

}

console.log(countUniqueValues(arr))


// #################  MY SOLUTION ##############

// if (arr.length <= 1) {
//     return arr.length
// }
// let count = {};

// for (let i=0; i < arr.length; i++){
//     let key = arr[i];

//     if (count[key] > 0){
//         count[key]++
//     } else {
//         count[key] = 1
//     }
// }

// let values = Object.values(count)

// return values.length