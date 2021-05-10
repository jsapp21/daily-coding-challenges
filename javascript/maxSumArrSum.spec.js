// write a function that accepts array of numbers and a number called n
// should calculate the max sum of n - O(n) linear complexity 
// ex. maxSubArrSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
// 2 + 6 + 9 = 17
// 6 + 9 + 2 = 17
// 9 + 2 + 1 = 12 
// returns the largest possible sum

const maxSubArrSum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;

    // loop num amount of times only
    for (let i=0; i < num; i++){
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i=num; i < arr.length; i++){
        // takes num amount of times - arr[0] + arr[3]
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

describe('max Sum', () => {
    test('one', () => {
      (maxSubArrSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3), 19);
    });
});