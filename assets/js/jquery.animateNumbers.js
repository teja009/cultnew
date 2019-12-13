/***********
	Animates element's number to new number with commas
	Parameters:
		stop (number): number to stop on
        commas (boolean): turn commas on/off (default is true)
		duration (number): how long in ms (default is 1000)
		ease (string): type of easing (default is "swing", others are avaiable from jQuery's easing plugin
	Examples:
        $("#div").animateNumbers(1234, false, 500, "linear"); // half second linear without commas
		$("#div").animateNumbers(1234, true, 2000); // two second swing with commas
		$("#div").animateNumbers(4321); // one second swing with commas
	This fully expects an element containing an integer
	If the number is within copy then separate it with a span and target the span
	Inserts and accounts for commas during animation by default
***********/

!function(a){a.fn.animateNumbers=function(b,c,d,e){return this.each(function(){var f=a(this),g=parseInt(f.text().replace(/,/g,""));c=void 0===c||c,a({value:g}).animate({value:b},{duration:void 0==d?1e3:d,easing:void 0==e?"swing":e,step:function(){f.text(Math.floor(this.value)),c&&f.text(f.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))},complete:function(){parseInt(f.text())!==b&&(f.text(b),c&&f.text(f.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")))}})})}}(jQuery);