

var HowtowearitPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {
		
		var params = {
			title: "howtowearit",
			url: "html/howtowearit.html",
			navId: "howtowearit",
			preLoad: [
                "images/howtowearit/fall_trend_bg.jpg"
			]
		};
		
		this._super(params);

	},
	
	/* Setup your event handlers */
	setup: function() {
		this._super();


		if (!finder.simpleAnime) {

        var pageBuild = new AnimationEngine();

			pageBuild.animate($("#hero", this.parentDiv), {x:300}, {x:0}, {
				easing:"easeOutQuint",
				duration:1500,
				delay:0,
				delayEach:250
			});

			pageBuild.animate($(".title", this.parentDiv), {opacity:0, x:-300, scale:1}, {opacity:1, x:15, scale:1}, {
				easing:"easeOutQuint",
				duration:1500,
				delay:0,
				delayEach:250
			});

			pageBuild.animate($(".linkClick", this.parentDiv), {y:500, opacity:0, scale:0}, {y:0, opacity:1, scale:1}, {
				easing:"easeOutQuint",
				duration:1500,
				delay:0,
				delayEach:250
			});


			pageBuild.animate($(".subcopy", this.parentDiv), {y:500, opacity:0, scale:0}, {y:0, opacity:1, scale:1}, {
				easing:"easeOutQuint",
				duration:1500,
				delay:1500,
				delayEach:250
			});
		}

        ////////  fix delay in the fade in out of over
        setInterval(function(){jQuery(".linkClick").css({"-webkit-transition": "none", "-moz-transition": "none", "-o-transition":"none", "-ms-transition":"none"});},3000);

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

