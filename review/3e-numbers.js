let num1 = 10
let num2 = 3

let divResult = num1 / num2
let expr = (num1 / num2) * (8.5 / 3.3)

let fixedDiv = (num1 / num2).toFixed(2)
let intResult = Math.floor(num1 / num2)
let upperInt = Math.ceil(num1 / num2)
let roundResult = Math.round(num1 / num2)

// Το modulo διατηρεί το πρόσημο του διαιρετέου
let modResult = num1 % num2 //JS & JAVA remaining part of division


console.log(divResult, expr, fixedDiv, intResult, upperInt, roundResult, modResult)