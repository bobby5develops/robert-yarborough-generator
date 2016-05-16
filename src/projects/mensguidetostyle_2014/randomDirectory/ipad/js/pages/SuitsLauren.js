

var SuitsLauren = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {
		
		var params = {
				 	title: "suitsLauren",
					url: "html/suitsLauren.html",
					navId: "suitsLauren",
					preLoad: [
								
							  ]
				 }
        this.showFooterCTA = true;
		this._super(params);
		
	},
	
	/* Setup your event handlers */
	setup: function() {
		this._super();
        var self = this;

        /// add hot spots
        self.createHotSpotV2("suitsLauren", self.parentDiv);
        $(".blackHotspot .plus").delay(2000).fadeIn('slow');


        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });

        /*
         console.log('====> FILTERS ',finder.getConfig().pool.suite.shopby);
         this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.suite.shopby, "tabsOnTop", "SUITS & JACKETS"));
         */
        this.poolContainer.prepend('<div class="facetTitle">SUITS &amp; SUIT SEPARATES</div>');

        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });


        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "htw_suit_jacket");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid :'ca-so-gentlemans.wearit.slide1.shopsuitssuitseparates',
                catid:'ca-so-gentlemans-guide-wearit-slide1'
            });
        });
        jQuery("#close", this.parentDiv).first().click();
		
	},
	
	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();
		
		
			
	},

	/* Transition your page in */
	transitionIn: function() {
        // query the dom
        var mainitem = $("#BW");
        mainitem.fadeIn("3000");
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
