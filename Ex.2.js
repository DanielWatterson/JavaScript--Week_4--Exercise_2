console.log("---- EXERCISE 2 ----");
console.log("---- This output is of a function that checks if a value is a number and returns false if it is a string ----");

// TODO: Create a function called sum. 
// The function will take in a parameter and calculate all the numbers from 0 -> the parameter. 
// You must check if the parameterisan integer first before any calculation is made. 
// If the parameter is not a number, return a message stating, “The value passed is not a number”. 
// You are NOT allowedtouse methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). 
// Makesureto test your code effectively. // 

sum = function(num) {
    if (typeof num == 'number'){
        return true;
    } else {
        return "Error, this is not a number!"
    }
}

console.log(sum(5)); // This value is a number = true message
console.log(sum("hello")); // This value is not a number = error message
console.log("----------------------------------------------------------------------------------- \n")

console.log("---- This output is of a function that returns the factorial ----");

// TODO: Create a function called ‘factorial’ that takes in a number as a parameter. 
// The function will print the factorial of the entered number, e.g. factorial(4) ->4*3*2*1 //output 24
factorial = function(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result
}

console.log(factorial(4));
console.log("----------------------------------------------------------------------------------- \n")

console.log("---- This output is of a function that returns the factorial ----");

// TODO: Create a function called funkyMath . 
// If this function is calledwith2arguments the function will subtract the first from the second. 
// If the functionis calledwith 3 arguments it will add all 3 numbers together. 
// If the function is calledwith4arguments it will add together argument 1 and 2 , 3 and 4 separately. 
// Thendividethem accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25// 

funkyMath = function (num1, num2, num3, num4) {
    if (arguments.length === 2) {
        return num1 - num2;
    } else if (arguments.length === 3) {
        return num1 + num2 + num3;
    } else if (arguments.length === 4) {
        return (num1 + num2) / (num3 + num4);
    }
}

console.log(funkyMath(8, 2, 3, 5))
console.log("----------------------------------------------------------------------------------- \n")

console.log("---- This output is of a loop that removes the odd numbers from an array ----");
// TODO: Create a loop that will remove all the odd numbers from the array and add them to a new array.
// Use the current array [1, 2 , 33, 45, 6 ,44]. Bonus: Make sure to arrange them from smallest to biggest.()

numberArray = function (num) {
    let newArray = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            newArray.push(num[i]);
        }
    }
    return newArray
}

console.log (numberArray([1, 2, 33, 45, 6, 44]))
console.log("----------------------------------------------------------------------------------- \n")

console.log("---- This output is of an object ----");
// TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car

const me = {
    firstName: "Dominic",
    lastName: "Peck",
    age: 21,
    favouriteColour: "Black",
    dreamCar: "Ferrari",
}

console.log(`Hello! My name is ${me.firstName} ${me.lastName} and 
    I am ${me.age} years old. 
    My favourite colour is ${me.favouriteColour} and 
    my dream car is the ${me.dreamCar}.`);
console.log("----------------------------------------------------------------------------------- \n")

// TODO: Create and add a new property and value of ‘favourite food’ to the object. 

me.favouriteFood = "Pizza";

console.log(`Hello! My name is ${me.firstName} ${me.lastName} and 
    I am ${me.age} years old. 
    My favourite colour is ${me.favouriteColour} and 
    my dream car is the ${me.dreamCar}. 
    My favourite food is ${me.favouriteFood}.`);
console.log("----------------------------------------------------------------------------------- \n")

// TODO: . Now delete the age property from the object.

delete me.age;

console.log(`Hello! My name is ${me.firstName} ${me.lastName}.
    My favourite colour is ${me.favouriteColour} and 
    my dream car is the ${me.dreamCar}.
    My favourite food is ${me.favouriteFood}.`);
console.log("-----------------------------------------------------------------------------------\n");

