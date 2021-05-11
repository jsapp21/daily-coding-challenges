// given a sorted of integers and a target average, determine if there is a pair of values in the array
// where the aveage of the pair equals the target average. There can be more than one pair.
// Return true or false
// BONUS: Time - O(n) Space O(1)

const aveagePair = (arr, num) => {

    if (arr.length <= 1) return false

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let avg = (arr[left] + arr[right]) / 2
        if (avg === num){
            return true 
        } else if (avg < num){
            left++
        } else {
            right--
        }
    }

    return false

}

describe('avgPair', () => {
    test('one', () => {
      (aveagePair([1, 2, 3], 2.5), true);
    });
    test('two', () => {
      (aveagePair([1, 3, 3, 5, 6, 7, 10, 12,19], 8), true);
    });
    test('three', () => {
        (aveagePair([-1, 0, 3, 4, 5, 6], 4.1), false);
    });
    test('four', () => {
        (aveagePair([], 4), false);
    });
});

