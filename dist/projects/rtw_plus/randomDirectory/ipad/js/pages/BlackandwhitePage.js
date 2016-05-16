

var BlackandwhitePage = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {
		
		var params = {
				 	title: "blackandwhite",
					url: "html/blackandwhite.html",
					navId: "blackandwhite",
					preLoad: [
						'images/blackandwhite/bg.jpg',
						'images/blackandwhite/pool_bg.png',
						'images/blackandwhite/trendreport.png'
							  ]
				 }
		
		this._super(params);
		
	},
	
	/* Setup your event handlers */
	setup: function() {
		this._super();

	},
	
	/* Handle Deeplinking */
	processParams: function(){
		this._super();
	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();
		finder.initPlusDots();
	},
	
	/* Transition your page Out */
	transitionOut: function() {
		this._super();
		
	},
	
	/* Unload the page */
	unload: function() {
		
		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events
		
		this._super();
	},
	
	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}

	
})

