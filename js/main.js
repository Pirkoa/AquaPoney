$(document).ready(function(){

	$("img.logoAquaPoney").hide();
	$("img.logoPlaceToBoot").hide().delay(2000).fadeIn(1000);
	$("img.logoAquaPoney").fadeIn().delay(1000).animate({
			width: '+=50px'
		},100).delay(10).animate({
			width: '-=50px'
		},150);
	$("img.logoAquaPoney").css('position', 'fixed');
	$("img.logoPlaceToBoot").css('position', 'fixed');
	$("img.logoAquaPoney").animate({
		left: '20%'
	},1500);

	$("img.logoAquaPoney").mouseenter(function(){
		$(this).animate({
			width: '+=50px'
		},100)
	});

	$("img.logoAquaPoney").mouseleave(function(){
		$(this).animate({
			width: '-=50px'
		},100)
	});

	$("img.logoPlaceToBoot").mouseenter(function(){
		$(this).animate({
			width: '+=50px'
		},100)
	});

	$("img.logoPlaceToBoot").mouseleave(function(){
		$(this).animate({
			width: '-=50px'
		},100)
	});
});
