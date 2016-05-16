

var WearpantsPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
            title: "THE PANTS",
            url: "html/wearpants.html",
            navId: "wearpants",
            navHighlight:"wearpants",
            preLoad: [
                "images/wearpants/title.png",
                "images/wearpants/1.png",
                "images/wearpants/2.png",
                "images/wearpants/3.png",
                "images/wearpants/4.png",
                "images/wearpants/5.jpg"
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

            pageBuild.animate($("#title", this.parentDiv), {opacity:0, x:1300}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:0,
                delayEach:250});

            //TRANSITION IN MODELS
            pageBuild.animate($(".panel.p1", this.parentDiv), {opacity:0, y:200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:650,
                delayEach:250});

            pageBuild.animate($(".panel.p2", this.parentDiv), {opacity:0, y:200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:550,
                delayEach:250});

            pageBuild.animate($(".panel.p3", this.parentDiv), {opacity:0, y:200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:450,
                delayEach:250});

            pageBuild.animate($(".panel.p4", this.parentDiv), {opacity:0, y:200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:550,
                delayEach:250});
        }


        /// add hot spots
        self.createHotSpotV2("howtoJeansPants", self.parentDiv);
        $(".blackHotspot .plus").delay(2500).fadeIn('slow');




        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });


        //this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.pants.shopby, "tabsOnTop", "SHORTS & PANTS"));

        /**  need to add in correct filter **/
        ///// tracking the filters in the pool
        $(".facetTabsContainer [pfeed='all']").click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'ca-so-gentlemans.wearit.pants.shop',catid:'ca-so-gentlemans-guide-wearit-pants'});
        });
        $(".facetTabsContainer [pfeed='modern']").click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'ca-so-gentlemans.wearit.pants.modern.shop',catid:'ca-so-gentlemans-guide-wearit-pants'});
        });
        $(".facetTabsContainer [pfeed='classic']").click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'ca-so-gentlemans.wearit.pants.classic.shop',catid:'ca-so-gentlemans-guide-wearit-pants'});
        });
        $(".facetTabsContainer [pfeed='contemporary']").click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'ca-so-gentlemans.wearit.pants.contemporary.shop',catid:'ca-so-gentlemans-guide-wearit-pants'});
        });

        // KEITH
        // new pools calls in place
        this.poolContainer.prepend('<div class="facetTitle">JEANS & PANTS<div class="facetTabsContainer"></div></div>');
        this.$facetTabsContainer = $(".facetTabsContainer");

        var data = finder.getConfig().pool.pants.pools;

        $("#poolFilters").tmpl(data).appendTo( this.$facetTabsContainer );

        this.$filters = this.$facetTabsContainer.find(".filter");
       

        this.$filters.bind("click", function(event) {
            var $this = $(event.currentTarget);
            var pool = $this.attr("data-pool");

            self.$filters.removeClass('active');
            $this.addClass('active');

            self.loadPool(poolRootVotes + pool);
        });
        // end new pool calls


        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });

        ////// add to bag
        jQuery(".shopNow", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:$(this).attr('pageid')+".shop",catid:$(this).attr('catid')});
            var prodId = $(this).attr('productId')
            finder.skava.quickView({
                productId: prodId
            })
        });
        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid:'ca-so-gentlemans.wearit.jeanspants.shop',
                catid:'ca-so-gentlemans-guide-wearit-jeanspants'
            });
            // load pool
            self.productPool.loadPool(poolRootVotes + "htw_jeanpant_all");
            self.$filters.removeClass('active');
            self.$filters.eq(0).addClass("active");
            $("#poolBackground").show();
            //$("#facetsContainer [pfeed='all']").click();
        });
        jQuery("#close", this.parentDiv).first().click();

	},

    loadPool: function( url ) {
        this.productPool.loadPool( url );
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

