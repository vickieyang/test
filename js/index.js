  $(document).ready(function(){

    $(document).on('scroll', function(){
        
        var windowScrollTop = $(window).scrollTop();
        
        
        if ( windowScrollTop > 200 ){
            $('.above-header').addClass('fixed-above-header');
        }

        else{
            $('.above-header').removeClass('fixed-above-header')
        }

    });
})
  
