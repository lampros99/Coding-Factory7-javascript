$(function() {
    sayHello()
    sayLorem()
    changeBg()
    changeCl()


})

function sayHello(){
    $('#aueb-text').html('Hello Coding Factory')
}

function sayLorem() {
    const p = $('<p></p>')
    p.html(`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laudantium veritatis vitae accusamus quo, delectus optio placeat
        debitis commodi corrupti rerum officiis enim nisi fugit? Ullam
        cupiditatemolestiae necessitatibus commodi animi.`)
        $('body').append(p)
}

const changeBg = function(){
    $('#changeBgBtn').click(function() {
        $('body').css({'background': 'red'})
        $('.bgBtn').css({'background': 'orange'})
    })
}

const changeCl = function(){
    $('#changeColorBtn').click(function(){
        $('button').css({'color': 'aqua'})
        $('.bgBtnSec').css({'background': 'black'})
    })
}

