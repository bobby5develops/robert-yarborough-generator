

var Lookofleather2Page = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {
		
		var params = {
				 	title: "lookofleather",
					url: "html/lookofleather2.html",
					navId: "lookofleather2",
					preLoad: [
						'images/lookofleather2/bg.jpg',
						'images/lookofleather2/pool_bg.png',
						'images/lookofleather2/trendreport.png'
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

