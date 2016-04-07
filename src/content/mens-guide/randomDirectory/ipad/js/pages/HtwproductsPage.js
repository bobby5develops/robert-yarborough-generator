

var HtwproductsPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {
		
		var params = {
				 	title: "htwproducts",
					url: "html/htwproducts.html",
					navId: "htwproducts",
					preLoad: [
								
							  ]
				 }
		
		this._super(params);
		
	},
	
	/* Setup your event handlers */
	setup: function() {
		this._super();



    },
	
	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



        self = this;

        ///remove existing hotspots
        $('.hotspot').remove();

        /// add hot spots
        self.createHotSpotV2(this.params.argc[0]+'prod', self.parentDiv);
        $(".blackHotspot .plus").delay(2000).fadeIn('slow');


        var self = this;

        ////////  setup pool
        this.poolContainer = jQuery("#footerContainer #products");
        this.productPool = new ProductPool({
            container:this.poolContainer,
            template:"productListing"
        });


        finder.currentPage.productPool.reset()

        /// get pool path from config
        var dataPool = finder.getConfig().pool[this.params.argc[0]].pool;
        /// load pool
        self.productPool.loadPool(poolRootVotes + dataPool);
        ////// resize page after loading pool complete.
        $("#products").bind("poolLoaded",function(){finder.resizePage();});





        // SHOW AND HIDE THE CORRECT BUCKET

        // determine the $chosen anime bucket based on the hashtag and url
        var chosen = this.params.argc[0];
        // the topgifts landing uses the next arg so concat.  example 'topgifts' becomes 'topgifts-him'
        if (this.params.argc[1]) chosen+= '-'+this.params.argc[1];
        var $chosen = $('#animewrapper').find('.animebucket.' + chosen);
        // show the $chosen and hide the others
        $chosen.show().siblings().hide();






        //  ANIMATION

        // within $chosen, animate anything designated as left
        var leftStartDelay = 0;
        var leftArea = 0;
        $chosen.find('[anime="left"]').each(function(e){
            TweenMax.from($(this), .6, {css:{'opacity':0,'left':'-100', 'top':(leftArea)}, delay: leftStartDelay });
            leftStartDelay += .1;
            leftArea += 75;
        });

        // within $chosen, animate anything designated as right
        var leftStartDelay = 0;
        var leftArea = 0;
        $chosen.find('[anime="right"]').each(function(e){
            TweenMax.from($(this), .6, {css:{'opacity':0,'left':'900', 'top':(leftArea)}, delay: leftStartDelay });
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

        /* Product title animation  */
        var mainitem = $(".ptitle", this.parentDiv);
        var currentAnim = TweenMax.fromTo(mainitem, .75, {css:{opacity:0}, ease:Power3.easeOut}, {css:{opacity:1}});
        currentAnim.delay(.7);

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

