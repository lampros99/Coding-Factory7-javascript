console.log(`Number Max value: ${Number.MAX_VALUE}, Number Min Value: ${Number.MIN_VALUE}`)

console.log(`Number Min Safe Intenger: ${Number.MAX_SAFE_INTEGER}, Number Min Safe Integer ${Number.MIN_SAFE_INTEGER}`)

console.log(`Number Positive Infinity: ${Number.POSITIVE_INFINITY}`)

console.log(`Number Negative Infinity: ${Number.NEGATIVE_INFINITY}`)

if(Number.isInteger(12)){
    console.log("Is Integer")
} else {
    console.log("Not Integer")
}

if(Number.isNaN("hello")){
    console.log("True")
} else {
  console.log("False")
}

if(isNaN(NaN)){
    console.log("Is NaN")
} else{
    console.log("Not is NaN")
}

console.log(Number.parseInt("44"))
console.log(parseFloat("44.1"))

const num1 = 0.1 + 0.2
const num2 = 0.3

function compareFloatintPoints(a, b){
    return Math.abs(a - b) < Number.EPSILON;
}

console.log(compareFloatintPoints(num1, num2))