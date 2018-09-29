$(document).ready(function(){
    
    $("#open_question").click(function(){
        $("#list_question").slideDown(500);
    });

    $("#close_question").click(function(){
        $("#list_question").slideUp(500);
    });

    // $(window).on('resize', function(){
    //     if ($("html").width() >= 768) {
    //         $(".main__content:last-child").style("display", "block");
    //     }
    // });
});