/**
 * Created by ahmad on 7/26/2017.
 */

/*carousel options */

//start slider
$('.carousel').carousel({
    interval:4000
});
//next, prev
$(document).ready(function () {
    $('.next-slider').click(function () {
        $('.carousel').carousel('next')
    });
    $('.prev-slider').click(function () {
        $('.carousel').carousel('prev')
    });
});

/* navbar-menu */
$(window).scroll(function(){
    if($('.navbar').offset().top>50){
        $('.navbar-fixed-top').addClass('navbar-custom-animate');
    }else{
        $('.navbar-fixed-top').removeClass('navbar-custom-animate');
    }
});

//easing animation menu
$(document).ready(function(){
    $('a.page-scroll').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        },1500,'easeInOutExpo');
        event.preventDefault();
    });
});

// Map
function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2), zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

//scroll animation plugin
$(function(){
    function onScrollInit( items, trigger ) {
        items.each( function() {
            var osElement = $(this),
                osAnimationClass = osElement.attr('data-os-animation'),
                osAnimationDelay = osElement.attr('data-os-animation-delay');

            osElement.css({
                '-webkit-animation-delay':  osAnimationDelay,
                '-moz-animation-delay':     osAnimationDelay,
                'animation-delay':          osAnimationDelay
            });

            var osTrigger = ( trigger ) ? trigger : osElement;

            osTrigger.waypoint(function() {
                osElement.addClass('animated').addClass(osAnimationClass);
            },{
                triggerOnce: true,
                offset: '90%'
            });
        });
    }

    onScrollInit( $('.os-animation') );
    onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
});