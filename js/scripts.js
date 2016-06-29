// Initialize collapse button
$(".button-collapse").sideNav();

// Slide and fade up for welcome
$(document).ready(function(){
	$("#welcome").fadeIn(1000);
});

//ScrollFire
var options = [
    {selector: '#education', offset: 200, callback: function() {
      Materialize.showStaggeredList("#education ul");
    } },
];
Materialize.scrollFire(options);
