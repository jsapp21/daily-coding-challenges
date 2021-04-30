// given two strings, determine if the 2nd string is an anagram of the first
// return true or false, O(n)


const str1 = "cat";
const str2 = "act";

const anagram = (str1, str2) => {

    if (str1.length !== str2.length) return false

    let obj = {};

    // creates obj of str1 w/ char counts
    for (let i=0; i < str1.length; i++){
        let key = str1[i];

        if (obj[key] > 0){
            obj[key]++
        } else {
            obj[key] = 1
        }
    }

    // creates obj of str2 comparing if objs keys are exsiting
    for (let i=0; i < str2.length; i++){
        let key = str2[i];

        if (!obj[key]) {
            return false;
        } else {
            obj[key] -= 1;
        }  

    }

    return true


    
}

describe('anagram', () => {
    test('one', () => {
      (anagram("cat", "act"), true);
    });
    test('false', () => {
        (anagram("cat", "acs"), false);
      });
});