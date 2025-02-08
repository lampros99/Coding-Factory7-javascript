const cities = ["Paris", "London", "Berlin", "Athens"]
const numbers = [10, 101, 103, 77, 99, 690, 590]

console.log(cities.sort())
console.log(numbers.sort())

numbers.sort(function(a, b){
    return a - b;
})

numbers.sort(function(a, b){
    return b - a;
})

console.log(numbers)
console.log(numbers.sort())

