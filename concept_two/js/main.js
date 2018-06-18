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
        case "item-5":
            $('.sideMenuItem').removeClass('active');
            $('.list-item-5').addClass('active');
            sideMenuOnclick = !sideMenuOnclick;
            break
        case "item-6":
            $('.sideMenuItem').removeClass('active');
            $('.list-item-6').addClass('active');
            sideMenuOnclick = !sideMenuOnclick;
            break
        case "item-7":
            $('.sideMenuItem').removeClass('active');
            $('.list-item-7').addClass('active');
            sideMenuOnclick = !sideMenuOnclick;
            break
        case "item-8":
            $('.sideMenuItem').removeClass('active');
            $('.list-item-8').addClass('active');
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
                $(".col-2.dummyCol").addClass("show");
            }
            else {
                $(".sideMenu").removeClass('fixed');
                $(".col-2.dummyCol").removeClass("show");
                $(".sideMenu").width($(".sideMenu").parent().width());
            }

            if ((($(window).scrollTop()) > ($('#list-item-1').offset().top))) {
                console.log("Add class item 1");

                $('.sideMenuItem').removeClass('active');
                $('.sideMenu').removeClass('absolute');
                $(".sideMenu").addClass('fixed');
                $('.list-item-1').addClass('active');
            }

            if ((($(window).scrollTop()) > ($('#list-item-2').offset().top) - 20)) {
                $('.sideMenuItem').removeClass('active');
                $('.sideMenu').removeClass('absolute');
                $(".sideMenu").addClass('fixed');
                $('.list-item-2').addClass('active');
            }

            if ((($(window).scrollTop()) > ($('#list-item-3').offset().top) - 20)) {
                $('.sideMenuItem').removeClass('active');
                $('.sideMenu').removeClass('absolute');
                $(".sideMenu").addClass('fixed');
                $('.list-item-3').addClass('active');
            }

            if ((($(window).scrollTop()) > ($('#list-item-4').offset().top ) - 20)) {
                $('.sideMenuItem').removeClass('active');
                $('.sideMenu').removeClass('absolute');
                $(".sideMenu").addClass('fixed');
                $('.list-item-4').addClass('active');
            }

            if ((($(window).scrollTop()) > ($('#list-item-5').offset().top ) - 20)) {
                $('.sideMenuItem').removeClass('active');
                $('.sideMenu').removeClass('absolute');
                $(".sideMenu").addClass('fixed');
                $('.list-item-5').addClass('active');
            }

            if ((($(window).scrollTop()) > ($('#list-item-6').offset().top ) - 20)) {
                $('.sideMenuItem').removeClass('active');
                $('.sideMenu').removeClass('absolute');
                $(".sideMenu").addClass('fixed');
                $('.list-item-6').addClass('active');
            }

            if ((($(window).scrollTop()) > ($('#list-item-7').offset().top ) - 20)) {
                $('.sideMenuItem').removeClass('active');
                $('.sideMenu').removeClass('absolute');
                $(".sideMenu").addClass('fixed');
                $('.list-item-7').addClass('active');
            }

            if ((($(window).scrollTop()) > ($('#list-item-8').offset().top ) - 20)) {
                console.log(($('#list-item-8').offset().top ) - 20);

                $('.sideMenuItem').removeClass('active');
                $('.sideMenu').removeClass('fixed');
                $(".sideMenu").addClass('absolute');
                $('.list-item-8').addClass('active');
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
