function formContinue(step){

    switch (step){
        case "step2":
            console.log("Hello step2");
            $("#item-1 a").addClass("complete");
            $("#stepOneRight").addClass("active");
            $("#stepTwoLeft").addClass("active");
            $("#item-2 a").addClass("active");
            $("#item-2").removeClass("disabled");
            $("#item-2 a").removeClass("disabled");
            $("#personalTab").removeClass("show active");
            $("#addressTab").addClass("show active");

            break;
        case "step3":
            $("#item-2 a").addClass("complete");
            $("#stepTwoRight").addClass("active");
            $("#stepThreeLeft").addClass("active");
            $("#item-3 a").addClass("active");
            $("#item-3 a").removeClass("disabled");
            $("#item-3").removeClass("disabled");
            $("#addressTab").removeClass("show active");
            $("#contactTab").addClass("show active");
            break;
        case "step4":
            $("#item-3 a").addClass("complete");
            $("#stepThreeRight").addClass("active");
            $("#stepFourLeft").addClass("active");
            $("#item-4").removeClass("disabled");
            $("#contactTab").removeClass("show active");
            $("#paymentTab").addClass("show active");
            break;
        case "done":
            $("#item-4 a").addClass("complete");
            $("#paymentTab").removeClass("show active");
            $("#doneTab").addClass("show active");

    }
}


function myFunction() {
    $(".containerMenu")[0].classList.toggle("change");
    if($(".containerMenu").hasClass("change")){
        $('.textMenu').text('Sluiten');
    }
    else{
        $('.textMenu').text('Menu');
    }
}
