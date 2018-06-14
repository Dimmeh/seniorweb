$('#myList .row a:first-child').on('click', function (e) {
    e.preventDefault();
    $(".list-group-item").removeClass("active");
    $("#"+this.id).addClass("active");
    console.log($(this));
    $(".tab-pane").removeClass("show active");
    $("#list-home").addClass("show active");
});
$('#myList .row a:nth-child(2)').on('click', function (e) {
    e.preventDefault();
    $(".list-group-item").removeClass("active");
    $("#"+this.id).addClass("active");
    console.log($(this));
    $(".tab-pane").removeClass("show active");
    $("#list-profile").addClass("show active");
});
$('#myList .row a:nth-child(3)').on('click', function (e) {
    e.preventDefault();
    $(".list-group-item").removeClass("active");
    $("#"+this.id).addClass("active");
    console.log($(this));
    $(".tab-pane").removeClass("show active");
    $("#list-messages").addClass("show active");
});
$('#myList .row a:last-child').on('click', function (e) {
    e.preventDefault();
    $(".list-group-item").removeClass("active");
    $("#"+this.id).addClass("active");
    console.log($(this));
    $(".tab-pane").removeClass("show active");
    $("#list-settings").addClass("show active");
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