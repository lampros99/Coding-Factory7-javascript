// Higher-order functions
// Function factory
// Closure

function createMultiplier(multipler){
    return function(num){
        return num * multipler
    }
}

const createMultiplier2 = (multipler) => (num) => num * multipler

const double = createMultiplier(2)
const triple = createMultiplier2(3)
console.log(double(2))
console.log(triple(3))