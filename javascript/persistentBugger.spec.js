// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    let count = 0;
  
    if (num < 10) {
      return count
    } else {
      
      let a = num.toString().split('')
      let numArray = a.map(n => parseInt(n))
      let total;
      
      while (numArray.length > 1) {
        
        total = numArray.reduce(function (sum, currentValue) {
              return sum * currentValue;
          })
        
        count++;
        
        numArray = total.toString().split('')
      }
    
     return count 
    }
    
  }

  describe('persistent bugger', () => {
    test('one', () => {
      (persistence(39), 3);
    });
});