// Initialize collapse button
$(".button-collapse").sideNav();

//Enable Push Pin
if($('#toc').length > 0) {
	$(document).ready(function(){
	    $('#toc .table-of-contents').pushpin({ top: $('#toc').offset().top });
	});
}

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});