const numbers = [1, 2, 3, 4]
const num = 10;

//Modifies the initial array

numbers.push(5)
numbers.splice(1,3)
console.log(numbers)

function addToArrayEnd(arr, num){
    return [...arr, num]
}


function addToArraysStrart(arr, num){
    return [num, ...arr]
}

function addToArrayIndex(arr, num, index){
    return [...arr.slice(0, index), num, ...arr.slice(index)]
}

console.log(addToArrayEnd(numbers, num))

numbers.splice(0, 0, 8)

console.log(numbers)

const updateArray = (arr, newValue) => arr.map(item => newValue) 

//Fresh copy
const updateOneItem = (arr, index, newValue)=>
    arr.map((item, i) => (i === index) ? newValue : item)


const updatedNumbers =  updateOneItem(numbers, 2, 17)
console.log(updatedNumbers)

//Delete

//Modifies the intial array

let index = numbers.indexOf(1)
if(index !== -1) numbers.splice(index, 1)

//fresh copy of deleted array

const deleteFromArray = (arr, num) => arr.filter(item => item !== num)

const deleteByIndex = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)]

