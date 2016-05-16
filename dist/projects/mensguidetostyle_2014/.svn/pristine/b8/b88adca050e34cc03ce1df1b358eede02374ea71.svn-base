/*

This ended up not being a class... but just a way to instantiate the tooltips..

There are two ways... using HTML and using a JSON object.

You decide when to use what.  If each tooltip is very custom as far as whats inside...
then probably HTML is best.  If they follow a template.. you can use the DATA method
with a custom draw function.  Up to you.

Note that X and Y below.  These should correspond to the center point of your plus icon.
openDirection can be: northEast, northWest, southEast, southWest

HTML Method.

	HTML:
	<div class="hotspot" x="100" y="200" openDirection="northEast">
		hotspot 1 asdf
	</div>


	<div class="hotspot" x="500" y="300" openDirection="northWest">
		hotspot 2 asdf
	</div>
	
	JS:
	new HotSpot(".hotspot");
	
DATA Method:
	
	JS:
	var hotspots = [
		{
			x: 450,
			y: 123,m14
			openDirection:"northEast",
			title: "first title",
			content: "first hotspot"
		},
		{
			x: 850,
			y: 123,
			title: "second title",
			openDirection:"southWest",
			content: "second hotspot"
		}
	]
	
	var drawFunction = function(item) {
		return "<B>" + item.title + "</B> + "<BR>" + item.content;
	}
	
	new HotSpot("DATA", hotspots, jQuery("#container", this.parentDiv, drawFunction);


CSS is your friend. Style the tool tips.. and the "plus".  Put a background image on the ".plus" class for your image.
put a background.. border.. font styles on the ".tooltip" class.

The ".plus" is 30px by 30px.. but your image can be any size.  Just make it a PNG.  It will be centered in there.  30px by 30px
so that the hit area is big enough for tablet.

*/








var HotSpot = Class.extend({

	init: function(type, items, container, drawFunction, colorSpot) {


		if (colorSpot == undefined) {
            colorSpot = '';
		}
		if (type == "DOM") {
			this.createFromDOM(items);
		}
		
		if (type == "DATA") {
			this.createFromData(items, container, drawFunction, colorSpot);
		}
		
	},
	
	createFromData: function(items, container, drawFunction, colorSpot) {

		if (!drawFunction) {
			drawFunction = this.drawItem;
		}
		
		for (i = 0; i < items.length; i++) {
			var item = items[i];
            var hotSpotClass= 'hotspot '+colorSpot
			var hotspot = jQuery("<div class='"+hotSpotClass+"'><div class='plus'></div><div class='tooltip' style='display: none;'>" + drawFunction(item) + "</div></div>").appendTo(container);
			hotspot.css({
				top: item.y + "px",
				left: item.x + "px"
			});
			hotspot.addClass(item.openDirection);			
			
			this.addEvents(hotspot);
		}
		
	},
	
	createFromDOM: function(items) {
		var self = this;
		
		this.items = jQuery(items);
		
		// lets turn them into hotspots...
		this.items.each(function() {
			
			var item = jQuery(this);
			
			item.addClass("hotspot");
			
			// wrap the content into a div that will become the tip..
			item.html("<div class='tooltip'>" + item.html() + "</div>");
			var toolTip = jQuery(".tooltip", item).hide();
			
			// put the hotspot icon into the mix..
			var icon = jQuery("<div class='plus'></div>");
			icon.insertBefore(toolTip);
			
			item.css({
				top: (item.attr("y") - 15) + "px",
				left: (item.attr("x") - 15) + "px"
			})
			
			item.addClass(item.attr("openDirection"));
			
			
			self.addEvents(item);
			
		});
	},
	
	drawItem: function(item) {
		console.log(item);
		return item.content;
	},
	
	addEvents: function(item) {
		
		var self = this;
		
		if (!finder.isTablet()) {
			item.hover(function(){
				self.open(this);
                ///tracking open panel if there is tracking in the config and published to html in hopNow
                var catid = $(this).find(".shopNow").attr('catid');
                var pageid = $(this).find(".shopNow").attr('pageid');
               if(pageid!=undefined){
                    finder.skava.handleTracking(finder.getCurrentPage(),{pageid:pageid,catid:catid});
                }

			}, function(){
			
				self.close(this);
				
			});
		}
		else {
			item.click(function(){
				var me = jQuery(this);
				
				if (jQuery(".tooltip", me).is(":visible")) {
					self.close(this);
				}
				else {
					self.open(this);
				}
				
			})
		}
		
		
	},
	
	open: function(item) {
		
		item = jQuery(item);

		item.siblings().children(".tooltip:visible").slideUp('fast');
		jQuery(".tooltip", item).stop(true, true).slideDown('fast');

	},
	
	close: function(item) {
		
		jQuery(".tooltip", item).stop(true, true).slideUp('fast');

	}
	
	

});