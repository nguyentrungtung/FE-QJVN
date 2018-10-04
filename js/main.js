function writeNextPage(prnt, crt) {
    prnt.find(".current_number").text(crt);
}

$(document).ready(function(){
    $('.list_slide').slick({
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
    });

    // $('#list-content').slick({
    //     dots: false,
    //     autoplay: false,
    //     autoplaySpeed: 5000,
    //     arrows: true,
    // });

    $(".slick-next").html("");
    $(".slick-prev").html("");

    $('.carousel').carousel({
        pause: true,
        interval: false
    });

    var i = 1;

    $(".carousel-control.right").click(function(){
        var currentPrnt = $(this).parents(".main__content");
        var currentPage = currentPrnt.find(".current_number").text();
        var nextPage = "0" + (parseInt(currentPage) + 1);
        if(parseInt(currentPage) == 5) {
            nextPage = "01";
        }

        writeNextPage(currentPrnt, nextPage);

    });

    $(".carousel-control.left").click(function(){
        var currentPrnt = $(this).parents(".main__content");
        var currentPage = currentPrnt.find(".current_number").text();
        var nextPage = "0" + (parseInt(currentPage) - 1);
        if(parseInt(currentPage) == 1) {
            nextPage = "05";
        }

        writeNextPage(currentPrnt, nextPage);

    });

});
