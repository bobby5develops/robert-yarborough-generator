

var Accessories1Page = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {
		
		var params = {
				 	title: "accessories",
					url: "html/accessories1.html",
					navId: "accessories1",
					preLoad: [
						'images/accessories1/bg.jpg',
						'images/accessories1/pool_bg.png'
					]
				 }
		
		this._super(params);
		
	},
	
	/* Setup your event handlers */
	setup: function() {
		this._super();
		$('ul.facetTabsContainer li input').each(function(){
			$(this).prop('checked', false);
		});
		$('ul.facetTabsContainer li[pfeed=pumps] input').each(function(){
			$(this).prop('checked', true);
			$(this).parent().addClass('toggled');
		});
		finder.skava.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-fallfashionrtw.accessories", catid:"ca-so-fallfashionrtw-accessories"});
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

