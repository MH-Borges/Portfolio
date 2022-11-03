/*Menu effeito*/
$(window).scroll(function(event){

    const efeito = window.pageYOffset;
    const posicao = 180;
    if (efeito > posicao){
        $(".menu").addClass('active');
        $(".menu ul").addClass('active');
        $("#login").addClass('active');
    }else{
        $(".menu").removeClass('active');
        $(".menu ul").removeClass('active');
        $("#login").removeClass('active');
    }
});
/*Menu effeito*/

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
             if (jQuery(this).scrollTop() > 1000) {
                jQuery('#btn_UP').fadeIn();
             } else {
                jQuery('#btn_UP').fadeOut();
             }
         });
    });

/***/