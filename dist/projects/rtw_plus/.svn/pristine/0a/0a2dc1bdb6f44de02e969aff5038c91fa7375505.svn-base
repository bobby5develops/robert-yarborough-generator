

var RtwBasePage = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {
		
		var params = {
				 	title: "brights",
					url: "html/brights.html",
					navId: "brights",
					preLoad:[]
				 }
		this._super(params);
		
	},
	
	/* Setup your event handlers */
	setup: function() {
		this._super();
		
		this.poolContainer = jQuery("#swimPool_poolContainer", this.parentDiv);
		this.productPool = new ProductPool({
			container : this.poolContainer,
			scrollable : true,
			itemsPerPage : !this.itemsPerPage ? 12 : 8
		});
	},
	
	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();
		
		// DEMO ONLY !!!!
		var dataKey = this.navId;
		var self = this;
		
		$('#facetsContainer',this.parentDiv).empty();
		
		if(finder.getConfig().pageData.hasOwnProperty(dataKey))
		{
			var data = finder.getConfig().pageData[dataKey];
			this.productPool.reset();
			
			//console.log("HAS",data.hasOwnProperty("shopby"));
				
			if(data.hasOwnProperty("shopby"))
			{
				var facet2 = new GenericCheckboxFacet(data.shopby, "all", "shop by");
				this.productPool.addFacet(facet2);
				facet2.displayHandler.field.bind("click",function(){self.trackFacet(facet2)});
			} else {
				//console.log('NO FACETS');
			}
			// load pool
			this.productPool.loadPool(data.pool);
			
		}
		else
		{
			console.error("can't find "+dataKey);
		}
			
	},
	
	trackFacet:function(facet)
	{
		$(facet.getSelected()).each(function(i,e){
			finder.skava.handleTracking(null, e.tracking);
		});
	},

	/* Transition your page in */
	transitionIn: function() {
		
		console.log('this.womenList',this.womenList);
		var brightsWomenList = $(this.womenList+' ul li'); 
		var hotInside = $('.hotInside');
		var hotSpot = $('div.hotspot'); 
		
		brightsWomenList.css({opacity : 0});
		
		$('div#navContainer ul li').css({backgroundColor : '#000000'}); 
		$('#brights').css({backgroundColor : '#006699'});
		
		brightsWomenList.each(function(i){
			$(this).delay(50*i + 400).animate({opacity : 1}, 1700); 
		}); 
		
		$('#rightArrow, #leftArrow').css({opacity : .4});
		$('#rightArrow, #leftArrow').mouseover(function(){
			$(this).stop().animate({opacity : 1});
		}); 
		
		$('#rightArrow, #leftArrow').mouseout(function(){
			$(this).stop().animate({opacity : .4});
		}); 
		
		hotSpot.mouseover(function(){
			var thisHeight = 0; 
			
			$(this).children('.hotInside').children('ul').children('li').each(function(){
				thisHeight = parseInt($(this).height() + thisHeight); 
			}); 
			$(this).children('.hotInside').stop().show().animate({width : 150, height : thisHeight + 35, marginLeft : -140}, 200, function(){
			
			}); 
		});
		
		hotSpot.mouseout(function(){
		var thisHeight;
			$(this).children('.hotInside').children('ul').children('li').each(function(){
				thisHeight = parseInt($(this).height() + thisHeight); 
			}); 
			$(this).children('.hotInside').stop().animate({width : 0, height : 0, marginLeft : 0}, 200, function(){	
				$(this).css({height : thisHeight});
			}); 
		}); 
		
		this._super();
		
	},
	
	/* Transition your page Out */
	transitionOut: function() {
		this._super();
		
	},
	
	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}

	
})

