const isNumSSN = (num) => {

    if (num.length !== 11) return false

    // let first3 = 3;
    // let second2 = 0;
    // let third4 = 0;
    // let dashCount = 0;

    // // for (let i = 0; i < num.length; i++){
    // //     if (i < 3){
    //         num[i].match(regexNum)
    //         first3++
    // }
    // // }

    let reg = /\d{3}\-\{2}\-\d{4}/

    return num.match(reg)

    // let regexNum = /[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]/g;


    // let regexDash = /[-]/g;

    // let numCount = num.match(regexNum)
    // let dashCount = num.match(regexDash)

    // if (numCount.length === 9 && dashCount.length === 2){
    //     return true

    // }

    // return false

}

console.log(isNumSSN('123-45-6789')) // true
console.log(isNumSSN('1233-45-6789')) // false
console.log(isNumSSN('12345-6789')) // false
console.log(isNumSSN('12345-6789-')) // true, should be false