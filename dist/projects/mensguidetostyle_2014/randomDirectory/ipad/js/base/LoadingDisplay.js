var LoadingDisplay = Class.extend({
  init: function() {

		this.div = jQuery("#bodyContainer>DIV.loading");
		this.counter = 0;
			
	}
}); 

LoadingDisplay.prototype.getDiv = function() {
	return jQuery("#bodyContainer>DIV.loading");
}

LoadingDisplay.prototype.start = function(desc) {
	this.counter++;
	this.div.stop().show();
	console.log("start: " + desc);
}

LoadingDisplay.prototype.end = function (desc) {
	this.counter--;

	if (this.counter <= 0)
	{

		this.counter = 0;
		this.div.fadeOut();
	}
	console.log("end: " + desc);
}


LoadingDisplay.prototype.reset = function() {
	this.counter = 0;
}