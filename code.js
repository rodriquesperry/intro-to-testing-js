// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

// // function expression syntax (assigning an anonymous function to a variable)
// const helloWorld = function() {
//     return "Hello, World!";
// }


// sayHello function
const sayHello = (name) =>  {
    if (name === undefined || typeof name === "boolean" || name === null || name === "") {
        return "Hello, World!"
    } else {
        return "Hello, " + name + "!";
    }
}

//isFive function
const isFive = (input) => {
    return input === 5;
}

//isEven function
const isEven = (number) => {

    return (typeof number === "boolean") ? false
            : (number % 2 === 0);
}

//isVowel function
const isVowel = (input) => {
    if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u" ||
        input === "A" || input === "E" || input === "I" || input === "O" || input === "U") {
        return true;
    } else {
        return false;
    }
}

//add function
const add = (num1, num2) => parseInt(num1) + parseInt(num2);




