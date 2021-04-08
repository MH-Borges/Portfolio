
/*Efeito de Fade
AOS.init();
/*Efeito de Fade*/

/*transparencia menu*/
const scrollM = document.getElementById('#banner');
function corMenu(){
    document.querySelectorAll('.head').style.backgroundColor = "rgb(0, 0, 0)"; 
}

/*rolamento menu*/ 
const menuItems = document.querySelectorAll('.navbar a[href^="#"]');
menuItems.forEach(item => {item.addEventListener('click', scrollToIdOnClick);});
function scrollToIdOnClick(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.currentTarget)- 75;
    scrollToPosition(to);
}

function getScrollTopByHref(element){const id = element.getAttribute('href');return document.querySelector(id).offsetTop;}
function scrollToPosition(to){smoothScrollTo(0, to);}
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 600;

const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
};

const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

/*efeitos skills*/
$('svg.radial-progress').each(function( index, value ){ 
    $(this).find($('circle.complete')).removeAttr( 'style' );
});
$(window).scroll(function(){
  $('svg.radial-progress').each(function( index, value ) { 
    if ( 
        $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
        $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
    ) {
        percent = $(value).data('percentage');
        radius = $(this).find($('circle.complete')).attr('r');
        circumference = 2 * Math.PI * radius;
        strokeDashOffset = circumference - ((percent * circumference) / 100);
        $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
    }
  });
}).trigger('scroll');

/*carousel skill*/
$('.carousel').carousel({
  interval: 10000000
})

/*carousel design*/
$('.Carousel_Block').slick({
  centerMode: true,
  slidesToShow: 3,
  focusOnSelect: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});

/*efeito 3D*/
$('.js-tilt').tilt({
  scale: 1
});

/*parallax contato*/
window.onresize = function() {
  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (w > 1200) {
    document.addEventListener("mousemove", parallax);
    function parallax(e){
      this.querySelectorAll('.layer').forEach(layer => {
          const speed = layer.getAttribute('data-speed')
    
          const x = (window.innerWidth - e.pageX*speed)/100
          const y = (window.innerHeight - e.pageY*speed)/100
    
          layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    }
  }
};

