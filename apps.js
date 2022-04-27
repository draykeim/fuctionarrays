//Addition
function getAddition (a, b) {
    var addition = (a + b);
    console.log(addition);
    return addition;
}

var sum = getAddition(9, 10);
console.log("the sum is" + sum);

//Subtraction
function getDifference (a, b) {
    var diff = (a - b);
    console.log(diff);
    return diff;
}

var diff = getDifference(9, 10);
console.log("the difference is" + diff);

//Multiplication
function getMulti (a, b) {
    var multiply = (a * b);
    console.log(multiply);
    return multiply;
}

var multiply = getMulti(9, 10);
console.log("the product is" + multiply);

//Division
function getDivision (a, b) {
    var division = (a / b);
    console.log(division);
    return division;
}

var division = getDivision(100, 10);
console.log("the quotient is" + division);
