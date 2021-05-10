// given a sorted array of intergers, write a function that accepts a value
// find the value in the array and return the values index


// O(n)
// const binarySearch = (arr, num) => {

//     for (let i=0; i < arr.length; i++){
//         if (arr[i] === num){
//             return i;
//         }
//     }

//     return -1

// }

// to reduce time complexity from O(n) to Log(n), especially for large datasets
// find the mind of arr compare that num to that value num and repeat n times
// to reduce down to two numbers to see if value is there
const binarySearch = (arr, num) => {

    let min = 0;
    let max = arr.length - 1;

    while (min <=  max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (currentElement < num) {
            min = middle + 1;
        } else if (currentElement > num) {
            max = middle - 1;
        } else if (currentElement === num) {
            return middle;
        }
    }
    return - 1;
}


describe('search', () => {
    test('one', () => {
      (binarySearch([1, 2, 3, 4, 5, 6], 4), 3);
    });
    test('two', () => {
        (binarySearch([1, 2, 3, 4, 5, 6], 6), 5);
    });
    test('three', () => {
        (binarySearch([1, 2, 3, 4, 5, 6], 11), -1);
    });
});