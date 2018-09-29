$(document).ready(function(){
    
    $("#open_list").click(function(){
        $("#list_product").slideDown(500);
    });

    $("#close_list").click(function(){
        $("#list_product").slideUp(500);
    });

    // $(window).on('resize', function(){
    //     if ($("html").width() >= 768) {
    //         $(".main__content:last-child").style("display", "block");
    //     }
    // });

    $("#s_qrcode").click(function(){
        $("#product").hide();
        $("#qr_code").show();
    });

    $("#s_product").click(function(){
        $("#qr_code").hide();
        $("#product").show();
    });
});