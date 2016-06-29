// Initialize collapse button
$(".button-collapse").sideNav();

// Slide and fade up for welcome
$(document).ready(function(){
	$("#welcome").delay(500).fadeIn(1000);
});

//ScrollFire
var options = [
    {selector: '#experience', offset: 500, callback: function() {
      Materialize.showStaggeredList("#experience ul");
    } },
    {selector: '#education', offset: 500, callback: function() {
      Materialize.showStaggeredList("#education ul");
    } },
    {selector: '#coreCompetencies', offset: 500, callback: function() {
      Materialize.showStaggeredList("#coreCompetencies ul");
    } },
];
Materialize.scrollFire(options);
