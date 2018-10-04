$(document).ready(function(){
    $('.list_slide').slick({
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
    });

    $(".list_slide .slick-next").html("");
    $(".list_slide .slick-prev").html("");
});
