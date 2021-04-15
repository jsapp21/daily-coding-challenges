function getCount(str) {
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']
    
    for (let i=0; i < vowels.length; i++) {
      for (let e=0; e < str.length; e++) {
        if (str[e] === vowels[i]) {
          vowelsCount += 1
        }
      }
    }
    
    return vowelsCount;
}

// const chai = require("chai");
// const assert = chai.assert;

// describe("Case 1", function(){
//     it ("should be defined", function(){
//         assert.strictEqual(getCount("abracadabra"), 5)
//     });
// });