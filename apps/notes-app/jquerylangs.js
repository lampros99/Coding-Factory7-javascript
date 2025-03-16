$(function(){
    $('.images').on('mouseenter', '.img', function(){
        let textElement = $(this).parent().find('.text').clone().removeClass('hidden');
        $('.scene').html(textElement).hide().fadeIn(300);
    });

    $('.images').on('mouseleave', '.img', function(){
        $('.scene').fadeOut(200, function() { 
            $(this).empty();
         }); 
    });
});
