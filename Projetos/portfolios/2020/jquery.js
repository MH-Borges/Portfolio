/*Menu effeito*/
$(window).scroll(function(event){

    const efeito = window.pageYOffset;
    const posicao = 180;
    if (efeito > posicao){
        $(".menu").addClass('active');
        $(".menuHidden").addClass('active');
        $("nav ul").addClass('active');
        $(".botmenu").addClass('active');
        $(".backlogo").addClass('active');
        $(".logo").addClass('active');
        $(".logo2").addClass('active');
    }else{
        $(".menu").removeClass('active');
        $(".menuHidden").removeClass('active');
        $("nav ul").removeClass('active');
        $(".botmenu").removeClass('active');
        $(".backlogo").removeClass('active');
        $(".logo").removeClass('active');
        $(".logo2").removeClass('active');
    }
});
/*Menu effeito*/

/*Menu escondido effeito*/
    $(document).ready(function(){
        $('.menuHidden').click(function(){
            $('nav').toggleClass('active')
            $('#backlogo').addClass('active')
            $('.menu').addClass('active')
            $('.menuHidden').addClass('active')

            $('nav ul li a').click(function(){
                $('nav').removeClass('active')
            });
        });
    });
/*Menu escondido effeito*/

/*botão effeito*/
jQuery(document).ready(function(){

    jQuery("#btn_UP").hide();
    
    jQuery('a#btn_UP').click(function () {
             jQuery('body,html').animate({
               scrollTop: 0
             }, 800);
            return false;
       });
    
    jQuery(window).scroll(function () {
             if (jQuery(this).scrollTop() > 600) {
                jQuery('#btn_UP').fadeIn();
             } else {
                jQuery('#btn_UP').fadeOut();
             }
         });
    });
    