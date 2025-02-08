const students = ['Alice', 'Andreas', 'Andreas', 'Bob', 'Costas']

students.forEach(function(st,val, arr){
    console.log(val, st, arr)
})

console.log(students)
console.log()
console.log(students)

let filtered = students.filter(student => student === "Andreas")
console.log(filtered)

let mapped = students.map(student => "Student: " + student)
console.log(mapped)

const numbers = [1, 2, 3, 4, 5]
let sum = numbers.reduce((total, val) => total + val, 0)
console.log(sum)

