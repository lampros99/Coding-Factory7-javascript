$(function() {
    $('.images').on('mouseenter', '.img', function(){
        $(this).next().clone().removeClass('hidden').appendTo('.scene')
    })

    $('.image').on('mouseleave', '.img', function(){
        $('.scene').find('div').remove()
    })
})