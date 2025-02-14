let bag = new Set()

bag.add("Orange")
bag.add("Apples")
bag.add("Apples")

if(bag.has('Apples')) console.log("Has Apples")

    function addToSet(set, ...values){
        values.forEach(value => set.add(value))
    }

    const mySet = new Set();
    addToSet(mySet, 1, 2, 3, 4, 5)


    function createSet(...elements){
        return new Set(elements)
    }

    const numSet = createSet(1, 20, 30, 40, 50, 100, 100)

    const cities = [
        {prod: 1, city: "Athens"},
        {prod: 2, city: "Athens"},
        {prod: 3, city: "Lamia"}
        ]

function getUniqueCities(arr){
    return [...new Set(arr.map(product => product.city))]
}

