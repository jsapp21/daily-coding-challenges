// write a function called sumZero, accepts a sorted array of intergers
// finds the first pair where sum equals 0
// return an array of the pair that equals 0 or undefined if no pair exists

const sumZero = (arr) => {
    
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0){
            right--;
        } else {
            left++;
        }
    }

}

describe('sumZero', () => {
    test('one', () => {
      (sumZero([-3, -2, -1, 0, 1, 2, 3]), [-3, 3]);
    });
    test('two', () => {
      (sumZero([-2, 0, 1, 3]), undefined);
    });
});
