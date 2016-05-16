

var FitsizePage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitsize",
					url: "html/fitsize.html",
					navId: "fitsize",
					preLoad: [
                        'images/fitsize/size.jpg'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();

		this.specialNavHighlight = 'fitsuit';



        var hotSpots = finder.getConfig().hotspots.fitsize;
        var drawFunction = function (item) {
            return item.title;
        };
        new HotSpot("DATA", hotSpots, this.parentDiv, drawFunction);




	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

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

