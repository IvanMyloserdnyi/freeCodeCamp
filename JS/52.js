// Декларуйте змінну myGlobal під цим рядком
const myGlobal = 10;

function fun1() {
    // Призначте 5 до oopsGlobal тут
    oopsGlobal = 5
}

// Змініть код лише над цим рядком

function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}