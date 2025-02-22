let color = undefined

window.addEventListener('DOMContentLoaded', function() {
    this.document.querySelector('#btn').addEventListener('click', function(){
        onclickMeClicked()
    })
})

function onclickMeClicked(){
    updateBg()
}

/**
 * Model
 */

function updateBg(){
    color = getBgColor() //updade state
     renderBg()          // render based on the updated state
}

function getBgColor(){
 const colors = ['black', 'red', 'green', 'white', 'blue']
 return colors[Math.floor( Math.random() * colors.length)]
}

// View
function renderBg(){
document.querySelector('#hex').innerHTML = color
document.body.style.backgroundColor = color
}