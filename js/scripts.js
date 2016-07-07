// Initialize collapse button
$(".button-collapse").sideNav();

//Enable Push Pin
$(document).ready(function(){
    $('#toc .table-of-contents').pushpin({ top: $('#toc').offset().top });
});

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});