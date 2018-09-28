$(document).ready(function(){

    $("#btn_search").click(function(){
        var inpVal = $("#input_search").val();
        var classCurrent = $("#search_field").attr("class");
        var add = true;

        if (inpVal != '') {
            add = false;
        }

        var classArr = classCurrent.split(' ');
        for (var i = 0; i < classArr.length; i++) {
            if(classArr[i] == 'show') {
                add = false;
            }
        }

        if ((inpVal == '') && (add == true)) {
            $("#search_field").addClass("show");
        }
        else if ((inpVal == '') && (add == false)) {
            $("#search_field").removeClass("show");
        }
        else if ((inpVal != '') && (add == false)) {
            $("#search_field").removeClass("show");
            $("#input_search").val("");

            /* Code function search here */
        }
    });

    $("#open_modalsp").click(function(){
        $("#sp_modal").slideDown(500);
        $('body').css('overflow', 'hidden');
    });
    $("#close_modalsp").click(function(){
        $("#sp_modal").slideUp(500);
        $('body').css('overflow', 'unset');
    });

});


function pushHeader () {
document.write('\
<header id="header" class="header container-fluid-width">\
<div class="header__top">\
<ul class="header__tool container">\
<div class="clearfix">\
<li><button>ENGLISH</button></li>\
<li class="un_active"><button>VIETNAM</button></li>\
<li><button>LOGIN</button></li>\
</div>\
</ul>\
</div>\
<div class="header__main container">\
<nav class="navbar navbar-inverse">\
<div class="container-fluid-width">\
<div class="navbar-header">\
<button type="button" id="open_modalsp" class="header__hamberger navbar-toggle">\
<span class="icon-bar"></span>\
<span class="icon-bar"></span>\
<span class="icon-bar"></span> \
</button>\
<a class="header__logo navbar-brand" href="#">\
<img src="img/quanjian_logo.png" alt="">\
</a>\
</div>\
<div class="collapse navbar-collapse">\
<ul class="header__menu nav navbar-nav navbar-right">\
<li><a href="#">RECRUITMENT</a></li>\
<li><a href="#">PRODUCT</a></li>\
<li><a href="#">THERAPEUTIC</a></li>\
<li><a href="#">FQA</a></li>\
<li><a href="#">CONTACT US</a></li>\
<li id="search_field" class="header__search form-inline">\
<input type="text" name="" placeholder="Search" id="input_search">\
<button id="btn_search"><i class="glyphicon glyphicon-search"></i></button>\
</li>\
</ul>\
</div>\
</div>\
</nav>\
</div>\
<div id="sp_modal" class="header__sp collapse">\
<div class="container">\
<button id="close_modalsp" class="header__close--btn"></button>\
<div class="header__link">\
<a href="#">FACEBOOK</a>\
<a href="#">ZALO</a>\
</div>\
<div class="header__searchsp clearfix">\
<input type="text" name="" placeholder="Search">\
<button><i class="glyphicon glyphicon-search"></i></button>\
</div>\
<ul class="header__menusp">\
<li><a href="#">HOME</a></li>\
<li><a href="#">MY QUANJIAN</a></li>\
<li><a href="#">HOME OF QUANJIAN</a></li>\
<li><a href="#">NEWS</a></li>\
<li><a href="#">RECRUITMENT</a></li>\
<li><a href="#">PRODUCT</a></li>\
<li><a href="#">THERAPEUTIC</a></li>\
<li><a href="#">FQA</a></li>\
<li><a href="#">CONTACT US</a></li>\
</ul>\
<ul class="header__toolsp clearfix">\
<li><button>ENGLISH</button></li>\
<li class="un_active"><button>VIETNAM</button></li>\
<li><button>LOGIN</button></li>\
</ul>\
</div>\
</div>\
</header>'
);
}

function pushFooter () {
document.write('\
<footer id="footer" class="footer container-fluid-width pc">\
<div class="footer__mess">\
<button><span>MESSEGER</span></button>\
</div>\
<div class="container">\
<nav class="navbar navbar-inverse">\
<ul class="nav navbar-nav navbar-header footer_menu">\
<li class="">\
<a class="" href="#">HOME</a>\
</li>\
<li class="dropdown">\
<a class="dropdown-toggle" data-toggle="dropdown" href="#">MY QUANJIAN\
</a>\
<ul class="dropdown-menu clearfix">\
<li><a href="#">Company Profile</a></li>\
<li><a href="#">Chairman Profile</a></li>\
<li><a href="#">Corporate Culture</a></li>\
<li><a href="#">Development History</a></li>\
</ul>\
</li>\
<li class="dropdown">\
<a class="dropdown-toggle" data-toggle="dropdown" href="#">HOME OF QUANJIAN\
</a>\
<ul class="dropdown-menu clearfix">\
<li><a href="#">Social activities</a></li>\
<li><a href="#">Enterprise honor</a></li>\
</ul>\
</li>\
<li class="dropdown">\
<a class="dropdown-toggle" data-toggle="dropdown" href="#">NEWS\
</a>\
<ul class="dropdown-menu clearfix">\
<li><a href="#">Company news</a></li>\
<li><a href="#">Product infomation</a></li>\
</ul>\
</li>\
</ul>\
<ul class="nav navbar-nav navbar-right link">\
<li><a href="#">FACEBOOK</a></li>\
<li><a href="#">ZALO</a></li>\
</ul>\
</nav>\
</div>\
</footer>'
);
}