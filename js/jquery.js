
/*Menu effeito*/
$(window).scroll(function(event){

    const efeito = window.pageYOffset;
    const posicao = 180;
    if (efeito > posicao){
        $(".head").addClass('active');
        $(".logo").addClass('active');
        $(".logo2").addClass('active');
        $(".BTmenu").addClass('active');
    }else{
        $(".head").removeClass('active');
        $(".logo").removeClass('active');
        $(".logo2").removeClass('active');
        $(".BTmenu").removeClass('active');
    }
});
/*Menu effeito*/

/*Menu escondido effeito*/
$(document).ready(function(){
    $('.menuHidden').click(function(){
        $('.nav-menu').toggleClass('active')
        $('.head').toggleClass('active')
    });
});
/*Menu escondido effeito*/

/*botão effeito*/
jQuery(document).ready(function(){

jQuery("#btn_UP").hide();
jQuery('#btn_UP').click(function () {
            jQuery('body,html').animate({
            scrollTop: 0
            }, 800);
        return false;
    });

jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 500) {
            jQuery('#btn_UP').fadeIn();
            } else {
            jQuery('#btn_UP').fadeOut();
            }
        });
});

/*botão effeito*/


/*Botão blog effeito*/
$(window).scroll(function(event){

    const efeito = window.pageYOffset;
    const posicao = innerHeight*4;
    if(efeito > posicao){
        $("#Bt_Blog").addClass('activeBG');
    }else{
        $("#Bt_Blog").removeClass('activeBG');
    }
});
/*Botão blog effeito*/

