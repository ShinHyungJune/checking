$(document).ready(function(){
	$(function(){
		AOS.init();
	});

	$(".btn--menu").click(function(){
		$("#header").toggleClass("active");
	});

	$('.tabs--tab').click(function(){
		let parent = $(this).parents(".wrap--tabs");
		let index = $(this).index();

		parent.find(".tabs--tab").removeClass("active");

		$(this).addClass("active");

		parent.find(".tabs--content").removeClass("active");
		parent.find(".tabs--content").eq(index).addClass("active");
	});
});