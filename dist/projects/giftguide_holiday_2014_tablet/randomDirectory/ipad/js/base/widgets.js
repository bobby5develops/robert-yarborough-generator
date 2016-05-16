
var Widgets = Class.extend({



    init: function(){
    
		  
    
    },
	
	
	initializeWidgets: function(parent) {
		
		var self = this;
		
		// find all spotlight callouts..
		jQuery("[role='spotlightCallout']", parent).each(function() {
			var item = jQuery(this);
			
			self.initializeSpotlightCallout(item);
			item.attr("originalWidth", item.width());

		}).append("<div style='clear:both'></div>").hover( function() {
			var item = jQuery(this);
			item.addClass("hover");
			
			if (Modernizr.csstransitions)
				return;
			
			var background = jQuery(".background IMG", item);
			background.stop().animate({width: (1*item.attr("originalWidth") + 10) + "px"});
			
			
		}, function() {
			var item = jQuery(this);
			
			item.removeClass("hover");
			
			if (Modernizr.csstransitions)
				return;
			
			var background = jQuery(".background IMG", item);
			background.stop().animate({width: (1*item.attr("originalWidth")) + "px"});
			
		});
		
		
		// initialize the carousel...
		jQuery("[role='carousel']", parent).each(function() {
			
			self.initiateCarousel(jQuery(this));
			
			
			
			
		}).hover(function() {
			var item = jQuery(this);
			item.addClass("hover");
		}, function() {
			var item = jQuery(this);
			item.removeClass("hover");
		})
		
		jQuery("DIV[href]").click(function() {
			var link = jQuery(this).attr("href");
			
			if (link.toLowerCase().substring(0,4) == "http")
				platformOpenNewWindow(link, "_blank", false);
			else 
				window.location = link;
		})
		
			
	},
	
	initializeSpotlightCallout: function(container) {
		
		var id = container.attr("id");
		
		var templateHTML = jQuery(".template#spotlightCallout").html();
		templateHTML = templateHTML.replace(/\$\{id\}/g, id);
		templateHTML = templateHTML.replace(/\$\{assetsDirectory\}\//g, finder.getConfig().assetsDirectory);
		var callout = jQuery(templateHTML).appendTo(container);
		
		var img = jQuery("<img src='" + finder.getConfig().assetsDirectory + "images/spotlights/" + id + "/background.jpg'>");
		
		img.bind("load", function() {
			var self = jQuery(this);
			
			self.parent().css({
				width: self.width() + "px",
				height: self.height() + "px"
			})
		})
		
		jQuery(img).appendTo(jQuery(".background", callout));
			
			
		
	},
	
	initiateCarousel: function(container) {
	
		// update the html...
		
		var carouselId = container.attr("id");
		var href = container.attr("link");
		
		container.wrapInner("<div class='rotatingAds'></div>");
		
		container.addClass("carouselWidget");
		
		
		
		var rotatingAds = jQuery(".rotatingAds", container);
		
		rotatingAds.wrap("<div class='rotatingWrapper'></div>");
		
		rotatingAds.css("height", (container.height() - 34) + "px");
		
		
		var myHeight = rotatingAds.height();
		var eachWidth = container.width();

		// there are divs inside here... grab them and work on them...
		var items = rotatingAds.children();
		
		rotatingAds.css("width", container.width() * (items.length + 1));
		
		// do some tricky.. take hte first item.. clone it.. and add it in at the end..
		jQuery(items[0]).clone().appendTo(rotatingAds);
		
		items = rotatingAds.children();
		
		items.each(function() {
			var item = jQuery(this);
			var id = item.attr("id");
			item.html("<img class='button' src='" + finder.getConfig().assetsDirectory + "images/spotlights/rotatingAds/" + id + "/buttonimage.png'>");
			item.css("background", "url('" + finder.getConfig().assetsDirectory + "images/spotlights/rotatingAds/" + id + "/background_image.jpg')");
			//item.css("height", myHeight + "px");
			item.css("width", eachWidth + "px");
		})
		
		jQuery("<div class='heading'></div>").insertBefore(rotatingAds.parent());
		var header = jQuery(".heading", container);
		
		jQuery("<img src='" + finder.getConfig().assetsDirectory + "images/spotlights/rotatingAds/" + carouselId + "_header.png'>").click(function(event) {
			event.preventDefault();
			event.stopPropagation();
			window.location = href;
		}).appendTo(header);
		
		jQuery("<div class='dotContainer'></div>").css("width", "50%").appendTo(header);
		var dotContainer = jQuery(".dotContainer", header);
		
		for (i = 0; i < items.length - 1; i++)
		{
			jQuery("<div class='dot'></div>").appendTo(dotContainer);
		}
		
		jQuery(dotContainer.children()[0]).addClass("on");

		rotatingAds.attr("selected", "0");
		rotatingAds.attr("paused", "");
		
		
		
		
		
		var intervalFunc = function() {
			
			// get selected..
			var selected = 1 * rotatingAds.attr("selected");
			var children = rotatingAds.children();
			
			selected = (selected + 1) % children.length;
			rotatingAds.attr("selected", selected);
			
			
			if (!finder.isTablet()) {
				rotatingAds.animate({
					"margin-left": (-1 * eachWidth * selected) + "px"
				}, 2000, "easeInOutQuint", function(){
					var me = jQuery(this);
					var meSelected = 1 * me.attr("selected");
					
					
					
					if (meSelected == 0) 
						me.css("margin-left", "0px");
					
				});
			} else {
				rotatingAds.css("-webkit-transition", "all 2000ms ease-in-out");
				rotatingAds.css({
					"-webkit-transform": "translate3d(" + (-1 * eachWidth * selected) + "px, 0, 0)"
				});
				var meSelected = 1 * rotatingAds.attr("selected");
				if (meSelected == 0) 
					rotatingAds.css("-webkit-transform", "translate3d(0px, 0px, 0px)");
			}
			
			if (selected == children.length - 1)
			{
				//last one..
				selected = 0;
			}
			
			rotatingAds.attr("selected", selected);
			
			setTimeout(function() {
				jQuery(".dot", dotContainer).removeClass("on")
				jQuery(".dot:nth-child(" + (selected + 1) + ")", dotContainer).addClass("on")
			}, 1000);
			
		}

		var interval = setInterval(intervalFunc, 5000);

		rotatingAds.hover(function() {
			clearInterval(interval);
		}, function() {
			if (rotatingAds.attr("paused") == "")
				interval = setInterval(intervalFunc, 5000);
		})
		
		jQuery(".dot", dotContainer).click(function() {
			var dot = jQuery(this);
			rotatingAds.attr("paused", "true");
			
			var dotNumber = dot.index();
			
			clearInterval(interval);
			
			rotatingAds.attr("selected", dotNumber - 1);
			intervalFunc.call();
			
			
		})


	}
	
	
	
	
});