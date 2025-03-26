let names = ["giorgos", "mike", "will", "jonathan", "jim", "jein"];

function randomNames(names){
    let myRandom = Math.floor(Math.random() * names.length) + 1;

    console.log(names[myRandom]);
}

console.log('before delete with splice')
randomNames(names);



let namesSplice = names.splice(0, 4, 2)

console.log("after deleted with splice")
console.log(namesSplice)

