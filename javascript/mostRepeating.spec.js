// given an array of integers find the most repeated number
// return the number of occurrences of that element - O(n)

// const arr = [4,3,2,4,4,4,4,4,3,3,6,6,6,1,1,4,4,4]

function findMostRepeated(arr) {

      if (arr.length <= 0) return 0
        
        // make a empty object
        let obj = {};

        // // loop through the array of numbers and create an object 
        for (let i=0; i < arr.length; i++) {
            let key = arr[i];
            
            if (obj[key] > 0){
                obj[key]++
            // if that key already exsist increase by 1
            } else {
                obj[key] = 1
            // if key does not exisit create and add 1
            }
        }
        
        // creates arry of values from passed in obj
        let values = Object.values(obj)

        // spread in the array so it will expand each index as a separate parameter
        let max = Math.max(...values)
        // find max value

        return max
        // return value
}
describe('most repeatting', () => {
    test('one', () => {
      (findMostRepeated([4,3,2,4,4,4,4,4,3,3,6,6,6,1,1,4,4,4]), 9);
    });
});
