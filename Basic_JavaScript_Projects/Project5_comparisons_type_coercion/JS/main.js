document.write(typeof 3);

document.write("10" + 5);

function multiplication_Function() { //positive infinity
    var Multiplication = 25 ** 310;
    document.getElementById("Math").innerHTML = "25 ** 310 = " + Multiplication;
}

function multiplication_Function2() { //negative infinity
    var Multiplication = Number.NEGATIVE_INFINITY;
    document.getElementById("Math").innerHTML = "Number.NEGATIVE_INFINITY = " + Multiplication;
}

document.write(10 > 2);

document.write(10 < 2);

console.log(2 + 2);

console.log(10 < 3);

document.write(10 == 10);

document.write(3 == 10);

X = 10
Y = 10
document.write(X === Y);

A = 82
B = "82"
document.write(A === B);

C = 5
D = "five"
document.write(C === D);

E = "six"
F = "six"
document.write(E === F);

document.write(5 > 2 && 10 > 4);

document.write(5 > 10 && 10 > 4);

document.write(5 > 10 || 10 > 4);

document.write(5 > 10 || 10 > 20);

function not_function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function not_function2() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}