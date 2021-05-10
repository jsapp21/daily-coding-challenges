// given two positive integers, find out if the two numbers have the same number of digits
// return true or false 



const sameFrequency = (num1, num2) => {
    if (num1 === num2) return true

    let arr1 = ("" + num1).split("").map(n => parseInt(n))
    let arr2 = ("" + num2).split("").map(n => parseInt(n))

    if (arr1.length !== arr2.length) return false

    let obj1 = {};
    let obj2 = {};

    for (let val of arr1){
        obj1[val] = (obj1[val] || 0) + 1
    }

    for (let val of arr2){
        obj2[val] = (obj2[val] || 0) + 1
    }

    for (let val in obj1){
        if (obj1[val] !== obj2[val]){
            return false
        }

    }

    return true

}

describe('same frequency', () => {
    test('one', () => {
      (sameFrequency(182, 281), true);
    });
    test('two', () => {
        (sameFrequency(34, 14), true);
    });
    test('three', () => {
        (sameFrequency(22, 222), true);
    });
});