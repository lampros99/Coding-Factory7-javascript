const obj = {
    name: "lampros",
    lastname: "alexandris",
    age: 26,
    job: "web developer"
}

const deleteObj = (obj, field) => {
    const {[field]:  _  , ...newReturn} = obj;
    return newReturn;
}

const newObj = deleteObj(obj, "age")

console.log(newObj);