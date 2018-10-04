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

});
