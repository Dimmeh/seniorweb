var sideMenuOnclick = false;

function addClassOnSideMenu(item) {
    sideMenuOnclick = !sideMenuOnclick;
    switch (item){
        case "item-1":
            $('.sideMenuItem').removeClass('active');
            $('.list-item-1').addClass('active');
            sideMenuOnclick = !sideMenuOnclick;
            break
        case "item-2":
            $('.sideMenuItem').removeClass('active');
            $('.list-item-2').addClass('active');
            sideMenuOnclick = !sideMenuOnclick;
            break
        case "item-3":
            $('.sideMenuItem').removeClass('active');
            $('.list-item-3').addClass('active');
            sideMenuOnclick = !sideMenuOnclick;
            break
        case "item-4":
            $('.sideMenuItem').removeClass('active');
            $('.list-item-4').addClass('active');
            sideMenuOnclick = !sideMenuOnclick;
            break
    }
}
$(document).ready(function () {
    var sideMenu = $("#list-example").offset().top;
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

    if(!sideMenuOnclick) {
        $(window).scroll(function () {
            var y = $(this).scrollTop();
            if (y >= sideMenu) {
                $(".sideMenu").addClass('fixed');
                $(".col-4.dummyCol").addClass("show");
            }
            else {
                $(".sideMenu").removeClass('fixed');
                $(".col-4.dummyCol").removeClass("show");
                $(".sideMenu").width($(".sideMenu").parent().width());
            }

            // console.log("Window scrollTop: " + $('html').scrollTop() + " & Window height: " + $('html').height());
            // console.log("Window total: " + ($('html').scrollTop() + $('html').height()));
            // console.log("Item 1 scrollTop: " + $('#list-item-1').offset().top + " & Item 1 height: " + $('#list-item-1').height());
            // console.log("Item 1 total: " + ($('#list-item-1').offset().top + $('#list-item-1').height()));
            // console.log("Item 1 scrollTop: " + $('#list-item-2').offset().top + " & Item 1 height: " + $('#list-item-2').height());
            // console.log("Item 1 total: " + ($('#list-item-2').offset().top + $('#list-item-2').height()));
            // console.log("Item 1 scrollTop: " + $('#list-item-3').offset().top + " & Item 1 height: " + $('#list-item-3').height());
            // console.log("Item 1 total: " + ($('#list-item-3').offset().top + $('#list-item-3').height()));
            // console.log("Item 1 scrollTop: " + $('#list-item-4').offset().top + " & Item 1 height: " + $('#list-item-4').height());
            // console.log("Item 1 total: " + ($('#list-item-4').offset().top + $('#list-item-4').height()));
            if ((($(window).scrollTop()) > ($('#list-item-1').offset().top))) {
                console.log("Add class item 1");

                $('.sideMenuItem').removeClass('active');
                $('.list-item-1').addClass('active');
            }

            if ((($(window).scrollTop()) > ($('#list-item-2').offset().top) - 20)) {
                $('.sideMenuItem').removeClass('active');
                $('.list-item-2').addClass('active');
            }

            if ((($(window).scrollTop()) > ($('#list-item-3').offset().top) - 20)) {
                $('.sideMenuItem').removeClass('active');
                $('.list-item-3').addClass('active');
            }

            if ((($(window).scrollTop()) > ($('#list-item-4').offset().top ) - 20)) {
                $('.sideMenuItem').removeClass('active');
                $('.list-item-4').addClass('active');
            }
        });
    }
});

function myFunction() {
    $(".containerMenu")[0].classList.toggle("change");
    if($(".containerMenu").hasClass("change")){
        $('.textMenu').text('Sluiten');
    }
    else{
        $('.textMenu').text('Menu');
    }
}
