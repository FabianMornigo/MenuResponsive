$(document).ready(main);

var contador = 1;

function main (){
	$('.menu_blas').click(

		function(){

			//$('nav').toggle();

			if (contador == 1) {
				$('nav').animate({
					left:'0'
			});

				contador = 0;
			
			}else {
				contador = 1;
				$('nav').animate({
					left:'-100%'
			});
		}

	});
};

//comienzo boton arrow

$(document).ready(function(){

	$('.arrow-arriba').click(function(){

		$('body,html').animate({
			scrollTop: '0px'
		}, 1000); //---> tiempo de subida
	});


	$(window).scroll(function(){

		if ($(this).scrollTop() > 0 ) {
			$('.arrow-arriba').slideDown(300);
		} else { 		
			$('.arrow-arriba').slideUp(300);


		}
	});

});