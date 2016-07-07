// Initialize collapse button
$(".button-collapse").sideNav();

// Slide and fade up for welcome
$(document).ready(function(){
	$("body").fadeIn(1500);
});

//Enable Push Pin
$(document).ready(function(){
    $('#toc .table-of-contents').pushpin({ top: $('#toc').offset().top });
});

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});