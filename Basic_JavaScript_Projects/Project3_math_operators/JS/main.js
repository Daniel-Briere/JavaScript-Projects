function addition_Function() { //addition
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() { //subtraction
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication_Function() { //multiplication
    var Multiplication = 6 * 8;
    document.getElementById("Math").innerHTML = "6 * 8 = " + Multiplication;
}

function division_Function() { //division
    var Division = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + Division;
}

function more_Math() { //all four combined
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() { //modulus
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() { //negation
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

function increment() { //increment
    var x = 5;
    x++;
    document.write(x);
}

function decrement() { //decement
    var x = 5.25;
    x--;
    document.write(x);
}

window.alert(Math.random() * 100); //random

