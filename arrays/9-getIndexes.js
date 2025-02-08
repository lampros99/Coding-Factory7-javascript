const arr = [1, 2 ,3 ,4, 5, 6, 7, 9, 3, 2, 8, 10, 9]

//function να επιστρέφει ένα πίνακα με τις θέσεις 
// στις οποίες βρίσκεται ένας συγκεκριμένος αριθμός

const getIndexes = (arr, val) => {
    const indexes = []

    arr.forEach((v, index) => {
        if(v === val) {
            indexes.push(index)
        }
    })

    // arr.forEach(function(v, index){
    //     if(v === val){
    //         indexes.push(index)
    //     }
    // })

    return indexes
}

console.log(getIndexes(arr, 2))