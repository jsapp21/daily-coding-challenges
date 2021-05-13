const factorial = (n) => {
    let num1 = 1;

    for (let i = n; i > 0; i--){
        num1 *= i
    }

    return num1;
}

console.log(factorial(4));