// Initialize collapse button
$(".button-collapse").sideNav();

// Slide and fade up for welcome
$(document).ready(function(){
	$("#welcome").fadeIn(1000);
});

//ScrollFire
var options = [
    {selector: '#experience', offset: 250, callback: function() {
      Materialize.showStaggeredList("#experience ul");
    } },
    {selector: '#education', offset: 250, callback: function() {
      Materialize.showStaggeredList("#education ul");
    } },
    {selector: '#coreCompetencies', offset: 250, callback: function() {
      Materialize.showStaggeredList("#coreCompetencies ul");
    } },
];
Materialize.scrollFire(options);
