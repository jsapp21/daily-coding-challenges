//



const sameFrequency = (num1, num2) => {
    if (num1 === num2) return true
    // split into arr loop through to parseInt
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

console.log(sameFrequency(182, 281))
console.log(sameFrequency(182, 381))