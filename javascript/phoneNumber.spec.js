function createPhoneNumber(numbers){
    let a = numbers.slice(0,3)
    let aStr = a.toString()
    let aSplit = aStr.split(',')
   
    let areaCode = '';
    for (let i=0; i < aSplit.length; i++) {
      areaCode += aSplit[i] 
    }
    
    let b = numbers.slice(3,6)
    let bStr = b.toString()
    let bSplit = bStr.split(',')
    
    let cityCode = '';
    for (let i=0; i < bSplit.length; i++) {
      cityCode += bSplit[i] 
    }
    
    let c = numbers.slice(6,10)
    let cStr = c.toString()
    let cSplit = cStr.split(',')
    
    let lastFour = '';
    for (let i=0; i < cSplit.length; i++) {
      lastFour += cSplit[i] 
    }
    
    return `(${areaCode}) ${cityCode}-${lastFour}` 
  
  }

  describe('Basic tests', () => {
    test('one', () => {
      (createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    });
    test('two', () => {
      (createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    });
    test('three', () => {
      (createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    });
  });