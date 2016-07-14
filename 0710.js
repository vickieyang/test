$(document).ready(function(){

    $(".menu-btn").click(function(){
        $(this).toggleClass("open");
        $('.main-wrap').toggleClass('main-wrap-position');
    });
})