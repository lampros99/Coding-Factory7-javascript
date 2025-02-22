const  DEFAULT = 0;
let counter = DEFAULT;

Window.addEventListener('DOMcontentLoaded', function(){
this.document.querySelector('#btnDecr').addEventListener('click', () => onDecreaseClicked())
this.document.querySelector('#btnReset').addEventListener('click', () => onResetClicked())
this.document.querySelector('#btnIncr').addEventListener('click', () => onIncreaseClicked())
})

function onDecreaseClicked() {
    decreaseCount()
}

function onResetClicked(){
    resetCount()

}

function onIncreaseClicked(){
    increaseCount()
}

function decreaseCount(){
    counter--;
    render();
}

function resetCount(){
    counter = DEFAULT;
    render();
}

function increaseCount(){
    counter++;
    render();
}

function render(){
    const counterDOM = document.querySelector('#counter');
    counterDOM.textContent = counter;

    styleCounter(counterDOM)
}

function styleCounter(counterDOM){
    counterDOM.classList.toggle('color-green', counter > 0)
    counterDOM.classList.toggle('color-red', counter < 0)
    counterDOM.classList.toggle('color-black', counter === 0)
}

// function styleCounter(counterDOM) {
//     if(counter == 0){
//         counterDOM.style.color = 'green'
//     } else if(counter > 0) {
//         counterDOM.style.color = 'green'
//     } else {
//         counterDOM.style.color = 'red'
//     }
// }



// let counter = 0;

// const btnDecr = document.getElementById('btnDecr')
// const btnReset = document.getElementById('btnReset')
// const btnIncr = document.getElementById('btnIncr')
// let counterDom = document.getElementById('counter')



// btnDecr.addEventListener('click', function(){
//     counter--;

//     counterDom.innerHTML = counter
// })

// btnReset.addEventListener('click', function(){
//     counter = 0;

//     counterDom.innerHTML = counter 
// })


// btnIncr.addEventListener('click', function(){
//     counter++;

//     counterDom.innerHTML = counter 
// })