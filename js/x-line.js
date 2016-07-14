// 等頁面loading完成後執行
$(document).ready(function(){
    // 計算視窗高度
    var x = $(window).height(),
    y= x-140;
    // 將視窗高度帶進id為slider的height
    $('#slider').css("height",x);   
    // 將視窗高度帶進class為slider的height
    $('.slider').css("height",x);  

  
    
    //當視窗resize的時候 
    $(window).resize(function(){
        // 重新計算視窗高度
        var x = $(window).height();
        y=x-140;
        // 將視窗高度帶進id為slider的height
        $('#topspace').css("height",x);   
        // 將視窗高度帶進class為slider的height
        $('.topspace').css("height",x);    
    })


    $(document).on('scroll', function(){

        var windowScrollTop = $(window).scrollTop();

        // 數字＝觸發高度
        // x = class name 
        // y = 新增的 class name

        if ( windowScrollTop >= y ){
            $('.header').addClass('fixedheader');
            
        }

        else{
            $('.header').removeClass('fixedheader');
        }

    })
})