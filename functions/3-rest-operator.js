function max(...numbers){
    let maxVal = -Infinity

    for(let n of numbers){
        if(n > maxVal){
            maxVal = n
        }
    }
    return maxVal
}

console.log(max(10, 2, 3 ,4, 190, 2))

function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0)
}

//spread vs rest

function maxx(...numbers) {    // rest
    return Math.max(...numbers)// spread
}

console.log(sum(1, 2, 3, 4, 22))
console.log(maxx(5, 4, 8, 9))

function greet(message, ...names){
    console.log(message + ", " + names.join(", "))
}

greet("Hello", "Alice", "Bob", "Costas")

