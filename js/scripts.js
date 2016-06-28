// Initialize collapse button
$(".button-collapse").sideNav();

// Slide and fade up for welcome
$(document).ready(function(){
	$("#welcome").delay(500).fadeIn(1000);
});

//ScrollFire
var options = [
    {selector: '#education', offset: 0, callback: function() {
      Materialize.showStaggeredList("#staggered-test");
    } },
];
Materialize.scrollFire(options);
