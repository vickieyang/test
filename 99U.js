$(document).ready(function(){
    $('.header-mainmenu li').click(function(){
        var  cutNumber = $(this).attr('rules'),
            wheretoGo = $('.main-container').eq(cutNumber),
            $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

        $body.animate({
            scrollTop: $(cutNumber).offset().top
        }, 700);
    })
})