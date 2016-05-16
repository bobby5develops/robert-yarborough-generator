

var HomePage = GgPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {
		
		var params = {
				 	title: "Home Page",
					url: "html/home.html",
					navId: "home",
					preLoad: [
								
							  ]
				 }
		
		this._super(params);
		
	},









	/* this function will be this.render in Backbone */
	setup: function() {
		this._super();


        ////// get from skava date to see if the sweep is over
        try {
            getCurrentESTTime(dateSwitch);

        } catch (e) {
            console.error("getCurrentDateAndTime is not available, or not in Skava Environment " + e);
        }
        function dateSwitch(serverFateArg){
            var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
            var firstDate =  new Date(JSON.parse(serverFateArg).year+','+JSON.parse(serverFateArg).month+','+JSON.parse(serverFateArg).day );
            var secondDate = new Date(2014,09,27);

            var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
            console.log('firstDate', firstDate ,'  secondDate ', secondDate,'     ' ,diffDays);
            if(diffDays<1) {
                $('.headline-week1').hide();
                $('.headline-main').show();
            }else{
                ///// print days to the home page
                $('.headline').append('<div class="daysto">' + diffDays + '</div>')
            }
        };

	},




	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



        $chosen = $('.finderPage#home');


        //  ANIMATION

        // within $chosen, animate anything designated as left
        var leftStartDelay = 0;
        var leftArea = 0;
        $chosen.find('[anime="left"]').each(function(e){
            TweenMax.from($(this), .6, {css:{'opacity':0,'left':'-100', 'top':(leftArea)}, delay: leftStartDelay });
            leftStartDelay += .1;
            leftArea += 75;
        });

        // within $chosen, animate anything designated as top
        var topStartDelay = 0;
        $chosen.find('[anime="top"]').each(function(e){
            TweenMax.from($(this), .6, {css:{'opacity':0, 'top':-100}, delay: topStartDelay });
            topStartDelay += .1;
        });

        // within $chosen, animate anything designated as bottom
        var bottomStartDelay = 0.6;
        var bottomHeight = $('#pageContainer').height();
        $chosen.find('[anime="bottom"]').each(function(e){
            TweenMax.from($(this), .6, {css:{'opacity':0, 'top': bottomHeight+100}, delay: bottomStartDelay });
            bottomStartDelay += .1;
        });
		

		
			
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