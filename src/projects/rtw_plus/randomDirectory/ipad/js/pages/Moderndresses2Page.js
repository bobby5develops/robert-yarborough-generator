var Moderndresses2Page = RtwPage.extend({
	/* Initialize any variables that will be needed */
	init: function(params) {
		var params = {
			title: "moderndresses",
			url: "html/moderndresses2.html",
			navId: "moderndresses2",
			preLoad: [
			'images/moderndresses2/bg.jpg',
			'images/moderndresses2/pool_bg.png',
			'images/moderndresses2/trendreport.png'
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