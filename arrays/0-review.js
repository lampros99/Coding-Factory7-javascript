const cities = ["Athens", "Paris", "London"]


cities.push("Toronto")

let city = cities[0];
console.log(city)

cities.forEach(c => console.log(c))


cities.forEach(c => console.log(c))

cities.sort()

cities.sort((a, b) => a.localeCompare(b, "en"))
const citiesSorted = cities.slice().sort((a, b) => a.localeCompare(b, "en"))//Shallow copy 

const citiesCopy1 = JSON.parse(JSON.stringify(cities))

const cities2 = structuredClone(cities)

const cities3 = [...cities]

const nums = [1, 2, 3, 4]

let maxVal = Math.max(...nums);
let maxIndex = nums.indexOf(maxVal)
console.log(`Max Value: ${maxVal}, Max Index: ${maxIndex}`)



