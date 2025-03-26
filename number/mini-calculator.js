function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function div(a, b){
    if(b === 0){
       return "Error. cannot divide with zero /"
    }
    return a / b; 
}

function mod(a, b){
    if(b == 0){
        return "Error. cannot use zero with mod"
    }

    return a % b + '%';
}

function operator(a, b, operator){
    return operator(a, b);
}

console.log('add: '+ add(9, 2))
console.log('sub: ' + sub(9, 2))
console.log('mul: ' + mul(9, 2))
console.log('div: ' + div(9, 2))
console.log('mod: ' + mod(9, 2))