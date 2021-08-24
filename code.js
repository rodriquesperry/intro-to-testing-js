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
    if (input === 5) {
        return true;
    } else {
        return false;
    }
}

