var Carousel = function(div, itemClass) {
	
	this.itemClass = "." + itemClass;
	this.content = jQuery(div);
	this.wrapper = jQuery(div.parent());
	this.wrapperWidth = this.wrapper.width();
	this.contentWidth = this.content.width();
	
	this.contentWrapper = jQuery("<div></div>").css({width: this.contentWidth + "px", height: this.wrapper.height() + "px", position: "absolute", top: "0px", "left": "30px"});
	
	this.content.css("-webkit-transition",  "all 400ms ease-in");
	
	this.leftArrow = jQuery("<div class='carouselLeftArrow' style='position: absolute; top: 0px; left: 0px; width: 20px; height: " + this.wrapper.height() + "px'></div>");
	this.rightArrow = jQuery("<div class='carouselRightArrow' style='position: absolute; top: 0px; right: 0px; width: 20px; height: " + this.wrapper.height() + "px'></div>");
	
	this.contentWrapper.appendTo(this.wrapper);
	this.leftArrow.appendTo(this.wrapper);
	this.rightArrow.appendTo(this.wrapper);
	
	this.content.remove();
	this.contentWrapper.html(this.content);
	
	this.content.css({
		position: "absolute",
		top: "0px",
		left: "0px"
	});
	this.wrapper.css({overflow: "hidden"});
	
	this.currentPanel = 0;
	this.numPanels = jQuery(this.itemClass, this.content).length;
	
	var self = this;
	
	this.checkIfMaxPanelReached = function() {
		return self.currentX + self.wrapperWidth - 40 >= this.contentWidth;
	}
	
	this.leftArrow.click(function() {
		self.currentPanel = Math.max(0, --self.currentPanel);
		self.showPanel(self.currentPanel);
	});
	
	this.rightArrow.click(function() {
		self.currentPanel = Math.min(self.numPanels - 1, ++self.currentPanel);
		self.showPanel(self.currentPanel);
	});
	
	this.showPanel = function(panel) {

		var pos = jQuery(this.content.children()[panel]).position();
		
		if (Modernizr.csstransitions) {
			self.content.css("-webkit-transform", "translate3d(-" + (pos.left + 1) + "px, 0px, 0px)");
		}
		else {
			self.content.animate({
				"left": "-" + (pos.left + 1) + "px"
			});
		}
	}
}
