const factorial = (n) => {
    let num1 = 1;

    for (let i = n; i > 0; i--){
        num1 *= i
    }

    return num1;
}

// console.log(factorial(4));



function getSecondLargest(nums) {

    let sortArr = nums.sort(function(a, b) {
        return a -b;
    })
    
    let largetst = sortArr[sortArr.length - 1];
    
    for (let i=0; i < sortArr.length; i++){
        if (sortArr[i] >= largetst){
            return sortArr[i - 1]
        }
    }
    
}

// console.log(getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(getSecondLargest([2, 3, 6, 6, 5]))


const recussiveFactorial = (x) => {
    if (x === 0) return 1;
    return recussiveFactorial(x-1);
}

console.log(recussiveFactorial(4))