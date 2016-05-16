

var WearsuitPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
            title: "The Suit",
            url: "html/wearsuit.html",
            navId: "wearsuit",
            navHighlight:"wearsuitlp",
            preLoad: [
                "images/wearsuit/title.png",
                "images/wearsuit/1.png",
                "images/wearsuit/2.png",
                "images/wearsuit/3.jpg",
            ]
        };

        this.showFooterCTA = true; // flag for footer call to action for How To Section

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();
        var self = this;

        if (!finder.simpleAnime) {
            var pageBuild = new AnimationEngine();

            //TRANSITION IN TITLE
            pageBuild.animate($("#title", this.parentDiv), {opacity:0, y:-200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:1400,
                delayEach:250});

            //TRANSITION IN MODELS
            pageBuild.animate($(".panel.p1", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:650,
                delayEach:250});

            pageBuild.animate($(".panel.p2", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:550,
                delayEach:250});
        }

        /// add hot spots
        self.createHotSpotV2("howtoSuit", self.parentDiv);
        $(".blackHotspot .plus").delay(2500).fadeIn('slow');



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
        this.poolContainer.prepend('<div class="facetTitle">SUITS &amp; JACKETS</div>');

        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });

        ////// add to bag
        jQuery(".shopNow", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:$(this).attr('pageid')+".shop",catid:$(this).attr('catid')});
            var prodId = $(this).attr('productId');
            finder.skava.quickView({
                productId: prodId
            });
        });
        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "htw_suit_jacket");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid:'ca-so-gentlemans.wearit.suitandjacket.shop',
                catid:'ca-so-gentlemans-guide-wearit-suitandjacket'
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

