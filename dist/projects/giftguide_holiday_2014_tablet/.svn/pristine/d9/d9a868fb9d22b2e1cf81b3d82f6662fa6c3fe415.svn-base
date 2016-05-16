var LoadingDisplay = Class.extend({
	
	init: function() {
		this.div = jQuery("#bodyContainer>DIV.loading");
		this.loaders = [];
	},
	
	getDiv:function() {
		return jQuery("#bodyContainer>DIV.loading");
	},
	
	start:function(desc) {
		if($.inArray(desc,this.loaders)==-1){
			this.loaders.push(desc);
			this.getDiv().stop().show().fadeOut(0).fadeIn();
			//console.log("LoadingDisplay.start(" + desc + ")");
		}
	},
	
	end:function (desc) {
		var i = $.inArray(desc,this.loaders);
		if(i>-1){
			this.loaders.splice(i,1);
			//console.log("LoadingDisplay.end(" + desc + ")");
		}
		if(this.loaders.length==0){
			this.getDiv().hide();
		}
	},
	
	reset:function() {
		this.loaders = [];
		this.end();
	}

});