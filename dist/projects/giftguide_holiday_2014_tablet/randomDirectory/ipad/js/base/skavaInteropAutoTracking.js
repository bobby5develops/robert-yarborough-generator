
var SkavaInteropAutoTracking = Class.extend({
	
	init: function() {
		
		var self = this;
		jQuery("#finderContainer").bind("arcPageUrlChanged", function(event) {
			
			var key = event.page.navId + "/" + event.params.argc.join("/");
			self.handleTracking(key);
			
		});
		
	},
	
	handleTracking: function(key) {
		
		// try to lookup the key in our tracking object...
		
		if (finder.getConfig().tracking[key]) {
			// key exists... track it..
			finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().tracking[key]);
		}
		
	}
	
	
	
});
	