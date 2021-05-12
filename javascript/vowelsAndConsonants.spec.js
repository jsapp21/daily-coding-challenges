function vowelsAndConsonants(s) {
    
    const arr = ['a', 'e', 'i', 'o', 'u']
    
    // split s into array
    let strArr = s.split('')

    let vowels = strArr.filter( a => {
        if (arr.includes(a.toLowerCase())){
            console.log(a)
        }
    });
    
    // loop through array and print only consonants
    let consonants = strArr.filter( a => {
        if (!arr.includes(a.toLowerCase())){
            console.log(a)
        }
    });
        
}

// console.log(vowelsAndConsonants('javascriptloops'));
console.log(vowelsAndConsonants('learnjavascriptloopsinhackerrankweekofcode'));