$('.mb-0').click(function(){
    var id = $('#accordionExample').find('.collapse.show').attr('id');
    if(id){
        var number = id.slice(8);
        var parent = "heading"+number;
    }
    if($(this).parent().attr('id') != parent) {
        $('#' + parent + ' .mb-0').find('span').text(function (i, old) {
            return old == 'Meer lezen' ? 'Minder lezen' : 'Meer lezen';
        });
    }

    $(this).find('span').text(function(i,old){
        return old=='Meer lezen' ?  'Minder lezen' : 'Meer lezen';
    });
});


var originalFontSize = $('.grid_9').css('font-size');

// Increase Font Size
$(".fontsize").click(function(){
    if($(this).hasClass('active')){
        $('.grid_9').css('font-size', originalFontSize);
        $(this).removeClass('active');
    }
    else{
        var currentFontSize = $('.grid_9').css('font-size');
        var currentFontSizeNum = parseFloat(currentFontSize, 10);
        var newFontSize = currentFontSizeNum*1.2;

        $('.grid_9').css('font-size', newFontSize);
        $(this).addClass('active');
    }
});
