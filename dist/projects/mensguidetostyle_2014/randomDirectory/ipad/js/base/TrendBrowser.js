
var TrendBrowser = Class.extend({



    init: function(container, config){
    
		this.container = container;	
		this.config = config.config;	
		this.videoUrl = config.videoUrl;
    	
		this.container.addClass("TrendBrowser");
		
		var self = this;
		
		// create elements...
		this.bigImageContainer = jQuery("<div class='trendImageContainer'></div>").appendTo(this.container);
		this.thumbContainer = jQuery("<div class='trendThumbContainer'></div>").appendTo(this.container);
		this.copyContainer = jQuery("<div class='trendCopyContainer'></div>").attr("role", "skavaInteropQuickView").appendTo(this.container);
		
		this.videoContainer = jQuery("<div class='trendVideoContainer'></div>").appendTo(this.container);

		jQuery("<img src='" + config.videoImage + "' border='0'>").appendTo(this.videoContainer);
		jQuery("<img src='" + finder.getConfig().assetsDirectory + "images/playvideo.png' class='playVideoButton' border='0'>").appendTo(this.videoContainer);
		
		this.videoContainer.hover (function() {
			jQuery(this).addClass('hover');
		}, function() {
			jQuery(this).removeClass('hover');
		}).click(function() {
			finder.getCurrentPage().showVideo(self.videoUrl);
		})
		
		this.copyContainer.hover(function() {
			jQuery(this).addClass("hover");
		}, function() {
			jQuery(this).removeClass("hover");
		}).click(function() {
			// do tracking..
			finder.getCurrentPage().trackBuyNow();
		})
		
		
		// do the image preloading...
		// preload all the thumbs... and the first look image...
		var images = [];
		for (i in this.config)
		{
			images.push(this.config[i].thumbUrl);
		}
		for (i in this.config)
		{
			images.push(this.config[i].imageUrl);
			break;
		}
	
		this.preloader = new PreloadHandler(function() {
			self.fillThumbs();
		}, images);	
		this.preloader.start();
	
    },
	
	fillThumbs: function() {
		
		for (i in this.config) {
			var look = this.config[i];
			var img = new Image();
			jQuery(img).attr("look_id", i).css("opacity", "0").appendTo(this.thumbContainer);
			img.src = look.thumbUrl;
		}
		
		var pageBuild = new AnimationEngine();
		
		var before = {
			opacity: 0,
			x: 50
		}
		
		var after = {
			opacity: 1,
			x: 00
		}
		
		pageBuild.animate(jQuery("IMG", this.thumbContainer), before, after, {easing: 'easeOutQuint', duration: 1000});
		
		var self = this;
		jQuery("IMG", this.thumbContainer).click(function() {
			if (jQuery(this).hasClass("selected"))
				return;
			self.showLook(jQuery(this).attr("look_id"));
		})
		
		setTimeout(function() {
		jQuery(jQuery("IMG", self.thumbContainer)[0]).trigger("click");
		}, 2000);
		
	},
	
	showLook: function(look) {
		jQuery("IMG", this.thumbContainer).removeClass("selected");
		jQuery("IMG[look_id='" + look + "']", this.thumbContainer).addClass("selected");
		
		var thisLook = look;
		var self = this;
		
		// start preloading the image...
		var img = new Image();
		img.onload = function() {
			self.lookImageLoaded(look, this);
		}
		img.src = this.config[look].imageUrl;
	},
	
	lookImageLoaded: function (look_id, img) {
		
		this.manageImage(look_id, img);
		this.manageCopy(look_id);
		
	},
	
	manageCopy: function(look_id) {
		
		var config = this.config[look_id];
		
		var products = []
		var productIds = [];
		for (i in config.products) {
			
			productIds.push(config.products[i].productId);
			
			if (!config.products[i].display)
				continue;
			
			if (!config.products[i].description)
				config.products[i].description = [];
			
			config.products[i].formattedPrice = "$" + config.products[i].price.toFixed(2);
			config.products[i].formattedDescription = config.products[i].description.join("<BR>");
			
			products.push(config.products[i]);			
		}
		
		console.log(products, config);
		
		var productsHtml = jQuery("#trendBrowserTemplate").tmpl(products);
		
		var styleAlert = jQuery("<div class='product styleAlert'></div>");
		jQuery("<div class='alertTitle'>Style Alert:</div>").appendTo(styleAlert);
		jQuery("<div class='alert'>" + config.styleAlert + "</div>").appendTo(styleAlert);
		
		var button = jQuery("<div class='product buyButton'><img src='" + finder.getConfig().assetsDirectory + "images/trends/buyNowYellow.png'></div>");
		
		jQuery("DIV.product", productsHtml).css("opacity", "0");
		
		
		
		// get the existing items in this container..
		var existingHtml = jQuery("DIV.product", this.copyContainer);
		
		
		var pageBuild = new AnimationEngine();
		
		var scrollOutBefore = {
			opacity: 1,
			y: 0
		}
		
		var scrollOutAfter = {
			opacity: 0,
			y: -100
		}
		
		var scrollInBefore = {
			opacity: 0,
			y: 100
		}
		
		var scrollInAfter = {
			opacity: 1,
			y: 0
		}
		
		pageBuild.animate(existingHtml, scrollOutBefore, scrollOutAfter, {easing: "easeOutQuint", duration: 750});
		
		var self = this;
		setTimeout(function() {
			self.copyContainer.attr("productId", productIds.join(","));
			jQuery("DIV.product", self.copyContainer).remove();
			productsHtml.appendTo(self.copyContainer);
			
			styleAlert.appendTo(self.copyContainer);
			button.appendTo(self.copyContainer);
			pageBuild.animate(jQuery("DIV.product", self.copyContainer), scrollInBefore, scrollInAfter, {easing: "easeOutQuint", duration: 1500});
		}, 750);
		
		
	},
	
	manageImage: function(look_id, img) {
		var image = jQuery(img);
		image.attr("look_id", look_id);
		image.css ( {
			"-webkit-transform-origin": "0% 0%",
			"-webkit-transform": "rotate3d(0,1,0, 90deg)"
		})
		
		// get any existing images in this container..
		var existingImages = jQuery("IMG", this.bigImageContainer);
		
		this.bigImageContainer.append(image);
		
		var pageBuild = new AnimationEngine();
		
		// rotate the existing ones out...
		// and the new on in...
		
		var rotateOutBefore = {
			rotateY: 00
		}
		
		var rotateOutAfter = {
			rotateY: -90
		}
		
		var rotateInBefore = {
			rotateY: 90,
			opacity: 0
		}
		
		var rotateInAfter = {
			rotateY: 0,
			opacity: 1
		}
		
		existingImages.css("z-index", 100);
		image.css("z-index", 190);
		
		pageBuild.animate(existingImages, rotateOutBefore, rotateOutAfter, {easing: "easeOutQuint", duration: 2000});
		pageBuild.animate(image, rotateInBefore, rotateInAfter, {easing: "easeOutQuint", duration: 2000});
		
		var self = this;
		
		setTimeout(function() {
			// remove all images that are not the currently selected ones...
			// get selected image..
			var look_id = jQuery("IMG.selected", self.thumbContainer).attr("look_id");
			jQuery("IMG[look_id!='" + look_id + "']", self.bigImageContainer).remove(); 
		}, 2000);
		
		
	}


	
	
});
	