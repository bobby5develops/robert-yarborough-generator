

var WearshoesPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {
		
		var params = {
				 	title: "wearshoes",
					url: "html/wearshoes.html",
					navId: "wearshoes",
                    navHighlight: 'wearshoes',
					preLoad: [
                        "images/wearshoes/title.png",
                        "images/wearshoes/1.jpg",
                        "images/wearshoes/bg.jpg"
							  ]
				 }
		
		this._super(params);

	},
	
	/* Setup your event handlers */
	setup: function() {
        var self = this;
		this._super();

        var pageBuild = new AnimationEngine();

        pageBuild.animate($(".title", this.parentDiv), {opacity:0, x:-300, scale:1}, {opacity:1, x:15, scale:1}, {
            easing:"easeOutQuint",
            duration:1500,
            delay:0,
            delayEach:250});
        pageBuild.animate($(".linkClick", this.parentDiv), {y:500, opacity:0, scale:0}, {y:0, opacity:1, scale:1}, {
            easing:"easeOutQuint",
            duration:1500,
            delay:0,
            delayEach:250});
        ////////  fix delay in the fade in out of over
        setInterval(function(){jQuery(".linkClick", this.parentDiv).css({"-webkit-transition": "none", "-moz-transition": "none", "-o-transition":"none", "-ms-transition":"none"});},3000);

       

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

        //this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.shoes.shopby, "tabsOnTop", "SHOES"));
        // KEITH
        // new pools calls in place
        this.poolContainer.prepend('<div class="facetTitle">SHOES<div class="facetTabsContainer"></div></div>');
        this.$facetTabsContainer = $(".facetTabsContainer");

        var data = finder.getConfig().pool.shoes.pools;

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
            var prodId = $(this).attr('productId');
            finder.skava.quickView({
                productId: prodId
            });
        });
        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "htw_shoe_all");
            self.$filters.removeClass('active');
            self.$filters.eq(0).addClass("active");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid:'ca-so-gentlemans.wearit.shoes.shop',
                catid:'ca-so-gentlemans-guide-wearit-shoes'
            });
        });
        jQuery("#close", this.parentDiv).first().click();



/*


        HOVER FUNCTIONALITY FOR MAIN HERO IMAGE TEMPORARILY REMOVED FOR THIS UPDATE


        $("#menuLinks DIV").hover(function() {
            if(this.id!=""){
                $("#hero .heroimg").hide();
                var who = "#hero #i"+this.id
                $(who).fadeIn('fast');
            }},
            function() {
                $("#hero #it0").fadeIn('fast');


            });
*/
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

