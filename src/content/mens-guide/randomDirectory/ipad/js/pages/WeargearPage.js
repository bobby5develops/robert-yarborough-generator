

var WeargearPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
            title: "weargearPage",
            url: "html/weargear.html",
            navId: "weargear",
            navHighlight:"weargear",
            preLoad: [
                "images/weargear/1.png",
                "images/weargear/2.png",
                "images/weargear/3.png",
                "images/weargear/4.jpg",
                "images/weargear/title.png"
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
                delay:550,
                delayEach:250});

            pageBuild.animate($(".panel.p2", this.parentDiv), {opacity:0, y:200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:650,
                delayEach:250});

        }



        /// add hot spots
        self.createHotSpotV2("howtoGear", self.parentDiv);
        $(".blackHotspot .plus").delay(2500).fadeIn('slow');





        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });

        //this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.gear.shopby, "tabsOnTop", "GEAR"));

/*
        ///// tracking the filters in the pool
        $(".facetTabsContainer [pfeed='all']").click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'ca-so-gentlemans.wearit.suits.shop',catid:'ca-so-gentlemans-guide-wearit-suits'});
        });
        $(".facetTabsContainer [pfeed='modern']").click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'ca-so-gentlemans.wearit.suits.modern.shop',catid:'ca-so-gentlemans-guide-wearit-suits'});
        });
        $(".facetTabsContainer [pfeed='classic']").click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'ca-so-gentlemans.wearit.suits.classic.shop',catid:'ca-so-gentlemans-guide-wearit-suits'});
        });
        $(".facetTabsContainer [pfeed='contemporary']").click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'ca-so-gentlemans.wearit.suits.contemporary.shop',catid:'ca-so-gentlemans-guide-wearit-suits'});
        });
        */

        // KEITH
        // new pools calls in place
        this.poolContainer.prepend('<div class="facetTitle">GEAR<div class="facetTabsContainer"></div></div>');
        this.$facetTabsContainer = $(".facetTabsContainer");

        var data = finder.getConfig().pool.gear.pools;

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
                pageid:'ca-so-gentlemans.wearit.gear.shop',
                catid:'ca-so-gentlemans-guide-wearit-gear'
            });
            self.productPool.loadPool(poolRootVotes + "htw_gear");
            self.$filters.removeClass('active');
            self.$filters.eq(0).addClass("active");
            $("#poolBackground").show();
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

