$(document).ready(function () {
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass("sticky");
        }
        else {
            $('header').removeClass("sticky");
        }
    });
    // copyrights Year Auto-update
    function newDate() {
        return new Date().getFullYear();
    }
    document.onload = document.getElementById("autodate").innerHTML = + newDate();

});

$(document).ready(function (){

});

$(document).ready(function (){
    $('.owl-carousel').owlCarousel({
        dots: false,
        items:4,
        loop:false,
        center:true,
        // left:100,
        margin:15,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        nav: true,
        navText: ["<i class='far fa-arrow-alt-circle-left w'></i>","<i class='far fa-arrow-alt-circle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
});

