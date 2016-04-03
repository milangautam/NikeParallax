// JavaScript Document

$(window).scroll(function (){
	var wScroll = $(this).scrollTop();
	console.log(wScroll)
	
	$('.logo').css({
		'transform':'translate(0px, '+ wScroll /2 +'%)'
		})
	
	$('.shoes').css({
		'transform':'translate(0px, -'+ wScroll /5 +'%)'
		})
	$('.shoesblurred').css({
		'transform':'translate(0px, -'+ wScroll /40 +'%)'
		})


});