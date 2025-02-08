const objArray = [
    {id: 1, first: "Νίκος", age: 23},
    {id: 2, first: "Αντρέας", age: 40},
    {id: 3, first: "Κώστας", age: 20},
    {id: 4, first: "Κώστας", age: 18},
]

// objArray.sort(function(a, b){
//     return a.age - b.age
// })
// console.log(objArray)

objArray.sort(function(a, b){
    if(a.first === b.first){
        return a.age - b.age
    }
    return a.first.localeCompare(b.first)
})

console.log(objArray)
