const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const logo2 = document.querySelector('.logo2');
const loader = document.querySelector('.loader');

window.onscroll = () => { window.scroll(0, 0); };
document.body.style.overflow = "hidden";

const Projetos = () => { window.location = './Projetos.html'; }
const Mobile = () => { 
	if(document.querySelector('.links').classList.contains("ativo")){
		document.querySelector('.links').classList.remove('ativo');
	}
	else{
		document.querySelector('.links').classList.add('ativo');
		setTimeout(() => {
			document.querySelector('.links').classList.remove('ativo');
		}, 2500);
	}
}

/*menu efeito*/ 
window.addEventListener('scroll', function() {

    if(window.pageYOffset > 150){
        logo2.classList.remove('hide');
        logo.classList.add('hide');
        header.classList.add('minus');
    }
    else{
        logo.classList.remove('hide');
        logo2.classList.add('hide');
        header.classList.remove('minus');

    }

});
/*menu efeito*/

/*rolamento menu*/ 
const menuItems = document.querySelectorAll('header a[href^="#"]');
menuItems.forEach(item => {item.addEventListener('click', scrollToIdOnClick);});

function scrollToIdOnClick(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.currentTarget)- 50;
    scrollToPosition(to);
}

function getScrollTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

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
        if (time >= duration) {  clearInterval(timer); }
        window.scroll(newX, newY);
    }, 1000 / 60); 
};
/*rolamento menu*/

/*Botão rolamento top*/
$(function () {

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

    $('.scroll').infiniteslide({
        speed: 50
    });


});
/*Botão rolamento top*/


/* Tela de loading e animação banner */
setTimeout(() => {
    loader.classList.add('hide');
    document.body.style.overflow = "auto";
    window.onscroll = () => { window.scroll(); };

	var i = 0, j = 0, k = 0;
	var donetxt = false, donetxt2 = false;

	var txt = 'Olá, seja bem vindo!';
	var txt2 = 'sou MATHEUS HENRIQUE';
	var txt3 = 'Web Designer, Freelancer e Desenvolvedor Front-end :)';

	const frase1 = document.getElementById('txt1');
	const frase2 = document.getElementById('Math');
	const banner = document.querySelector('.ContBanner');

	function typeWriter() {
		if (i < txt.length) {
			frase1.innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, 80);
			if(i === txt.length){
				var blinkTxt = document.createElement('span');
				blinkTxt.classList.add('blinking');
				blinkTxt.innerHTML = '_';
				frase1.appendChild(blinkTxt);
				setTimeout(() => {
					blinkTxt.classList.add('hide');
					donetxt = true;
					typeWriter();
				}, 1500);
			}
		}
		if(j < txt2.length && donetxt){
			
			frase2.innerHTML += txt2.charAt(j);
			j++;
			setTimeout(typeWriter, 120);

			if(j === txt2.length){
				donetxt2 = true;
				var blinkH = document.createElement('span');
				blinkH.classList.add('blinking');
				blinkH.innerHTML = '_';
				frase2.appendChild(blinkH);

				setTimeout(() => {
					const blockfrase3 = document.createElement('p');
					blockfrase3.classList.add('SubTitle');
					banner.appendChild(blockfrase3);

					blinkH.classList.add('hide');
					donetxt2 = true;
					typeWriter();
				}, 1500);
			}
			
		}
		else if (k < txt3.length && donetxt2){
			const frase3 = document.querySelector('.SubTitle');
			frase3.innerHTML += txt3.charAt(k);
			k++;
			setTimeout(typeWriter, 50);
		}

	}

	typeWriter();

}, 2500);
/* Tela de loading e animação banner */

/* Tela de loading*/
function Ticker( elem ) {
	elem.lettering();
	this.done = false;
	this.cycleCount = 5;
	this.cycleCurrent = 0;
	this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+{}|[]\\;\':"<>?,./`~'.split('');
	this.charsCount = this.chars.length;
	this.letters = elem.find( 'span' );
	this.letterCount = this.letters.length;
	this.letterCurrent = 0;

	this.letters.each( function() {
		var $this = $( this );
		$this.attr( 'data-orig', $this.text() );
		$this.text( '-' );
	});
}
  
Ticker.prototype.getChar = function() {
	return this.chars[ Math.floor( Math.random() * this.charsCount ) ];
};
  
Ticker.prototype.reset = function() {
	this.done = false;
	this.cycleCurrent = 0;
	this.letterCurrent = 0;
	this.letters.each( function() {
		var $this = $( this );
		$this.text( $this.attr( 'data-orig' ) );
		$this.removeClass( 'done' );
	});
	this.loop();
};
  
Ticker.prototype.loop = function() {
	var self = this;

	this.letters.each( function( index, elem ) {
		var $elem = $( elem );
		if( index >= self.letterCurrent ) {
		if( $elem.text() !== ' ' ) {
			$elem.text( self.getChar() );
			$elem.css( 'opacity', Math.random() );
		}
		}
	});

	if( this.cycleCurrent < this.cycleCount ) { this.cycleCurrent++; } 
	else if( this.letterCurrent < this.letterCount ) {
		var currLetter = this.letters.eq( this.letterCurrent );
		this.cycleCurrent = 0;
		currLetter.text( currLetter.attr( 'data-orig' ) ).css( 'opacity', 1 ).addClass( 'done' );
		this.letterCurrent++;
	} 
	else { this.done = true; }

	if( !this.done ) {
		requestAnimationFrame( function() {
		self.loop();
		});
	} else {
		setTimeout( function() {
		self.reset();
		}, 750 );
	}
};
  
$words = $( '.palavra' );
$words.each( function() {
	var $this = $( this ),
	ticker = new Ticker( $this ).reset();
	$this.data( 'ticker', ticker  );
});

particlesJS("ParticulasInside", {
	particles: {
		number: {
			value: 100,
			density: {
				enable: true,
				value_area: 800
			}
		},
		color: {
			value: "#047023"
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: true,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 13,
			random: true,
			anim: {
				enable: false,
				speed: 10,
				size_min: 0.1,
				sync: false
			}
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: "#ffffff",
			opacity: 0.4,
			width: 1
		},
	}
});

particlesJS("ParticulasExter", {
	particles: {
		number: {
			value: 250,
			density: {
				enable: true,
				value_area: 800
			}
		},
		color: {
			value: "#ffffff"
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#000000"
			},
			polygon: {
				nb_sides: 3
			},
			image: {
				src: "img/github.svg",
				width: 100,
				height: 100
			}
		},
		opacity: {
			value: 0.5,
			random: true,
			anim: {
				enable: false,
				speed: 0.2,
				opacity_min: 0,
				sync: false
			}
		},
		size: {
			value: 15,
			random: true,
			anim: {
				enable: true,
				speed: 10,
				size_min: 0.1,
				sync: false
			}
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: "#ffffff",
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 0.5,
			direction: "none",
			random: true,
			straight: false,
			out_mode: "bounce",
			bounce: false,
			attract: {
				enable: true,
				rotateX: 3945.7382081613637,
				rotateY: 157.82952832645452
			}
		}
	}
});
/* Tela de loading */