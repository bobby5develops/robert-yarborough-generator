	
	var Scroller = function(elem) {
		
		elem = jQuery(elem);
	
		if (finder.isTablet()) {
            return new TouchScroll(elem[0], {
                elastic: true
            });
        } else {
			
			elem.jScrollPane({autoReinitialise: true, autoReinitialiseDelay: 1000});
			return elem.data('jsp');
		}
	
		
		this.scrollbarWidth = 13;
		this.dragGive = 100;
		this.scrollbarPadding = 10;

		elem = jQuery(elem);
		elem.append("<div style='clear:both; padding-top: 20px;'></div>");
		
		var newWidth = elem.width() - this.scrollbarWidth - 10;
		
		elem.wrapInner("<div class='innerWrapper'></div>");
		
		
		elem = jQuery(".innerWrapper", elem)
		
		
		
		// take the content and put it inside of a container...
		this.contentContainer = elem.parent();
		this.contentContainer.css("overflow", "hidden");
		this.content = elem;
		
		this.content.addClass("scrollingContent");
		this.content.attr("alt", 0);
		

		// make the content div narrower for the scrollbar...
		this.content.css("width", this.contentContainer.width()-this.scrollbarWidth - this.scrollbarPadding + "px");

		this.content.css("-webkit-transform", "translate3d(0px, 0px, 0px)");
		
		// create a container to hold the scrollbar...
		this.scrollbar = jQuery("<div class='scrollerScrollbar' style='position: absolute; top: 0px; right: 0px;'></div>");		
		this.scrollbarContainer = jQuery("<div class='scrollerBarContainer'></div>");
		this.scrollbarContainer.append(this.scrollbar);
		this.scrollbarContainer.css({position: "absolute", width: this.scrollbarWidth + "px", height: this.contentContainer.height()+"px", top: "0px", right: "0px"});
		this.contentContainer.append(this.scrollbarContainer);
		
		// create faders...
		this.topFade = jQuery("<div class='scrollerTopFade' style='width: "+this.content.width()+"px;'></div>");
		this.bottomFade = jQuery("<div class='scrollerBottomFade' style='width: "+this.content.width()+"px;'></div>");
		this.contentContainer.append(this.topFade);
		this.contentContainer.append(this.bottomFade);
		
		this.containerHeight = this.contentContainer.height();
		this.scrollbarHeight = this.scrollbar.height();
		this.contentHeight = this.content.height();
		var self = this;
		
		this.updateHeights = function() {

			this.contentHeight = this.content.height();
			
			
			if (this.contentHeight < this.containerHeight)
			{
				this.scrollbarContainer.hide();
			} else {
				this.scrollbarContainer.show();
			}
		}
		

		
		
		this.positionChanged = function() {
			var percent = self.scrollbar.css("top").replace("px", "") / (self.containerHeight - self.scrollbarHeight);
			var offset = Math.floor((this.contentHeight - this.containerHeight) * percent);
			//this.content.css("margin-top", "-"+offset+"px");
			self.moveContent("-" + offset);
			this.checkFade();
		}
		
		this.checkFade = function() {
			offset = Math.abs(this.content.attr("alt"));
			var ch = this.contentHeight - this.containerHeight;
			
			
			if (offset <= 0)
				this.topFade.hide();
			else 
				this.topFade.show();
				
			if (offset >= ch)
				this.bottomFade.hide();
			else 
				this.bottomFade.show();
		}
		
		this.checkDragPosition = function() {
			var offset = this.content.attr("alt");
			var scrollHeight = this.contentHeight - this.containerHeight;
			
			if (offset > 0)
			{
				this.content.addClass("scrollerTransition");
				//this.content.css("margin-top", "0px");
				this.moveContent(0);
			}
			
			if (Math.abs(offset) > scrollHeight)
			{
				this.content.addClass("scrollerTransition");
				this.moveContent("-" + scrollHeight);
				//this.content.css("margin-top", "-" + scrollHeight + "px");
			}

		},
		
		this.scrollTo = function(top, left) {
			this.moveContent(top);
		}
		
		this.moveContent = function(newtop) {
			this.content.attr("alt", newtop);
			console.log(newtop);
			if (Modernizr.csstransitions) {
				this.content.css({
						"-webkit-transform": "translate3d(0px, " + newtop + "px, 0px)",
						"-moz-transform": "translateY(" + newtop + "px)",
						"-o-transform": "translateY(" + newtop + "px)",
						"-ms-transform": "translateY(" + newtop + "px)"						
						});
			} else {		
				this.content.css("margin-top", newtop + "px");				
			}
		}
		
		this.content.bind("contentChanged", function() {

			self.updateHeights();
			self.scrollbar.css("top", "0px");
			self.positionChanged();
		});
		
		this.normalizeNewtop = function(newtop) {
			var give = this.dragGive;
			
			var dragMin = (this.contentHeight - this.containerHeight) * -1 - give;
			
			var dragMax = give;
			
			if (newtop < dragMin)
				newtop = dragMin;
				
			if (newtop > dragMax)
				newtop = dragMax;
				
			return newtop;
			
		}
		
		this.contentContainer.mousewheel(function(event, delta) {
			
			event.preventDefault(); 
			
			self.updateHeights();
			
			var minMove=20;
			var totalMove = minMove*delta;
			var newtop = self.content.attr("alt") * 1 + totalMove;
			
			newtop = self.normalizeNewtop(newtop)
			
			self.content.addClass("scrollerTransition");
			self.moveContent(newtop);
			self.positionScrollbar();
			
			if (Modernizr.csstransitions) {
				clearTimeout(self.checkTimeout);
				self.checkTimeout = setTimeout(function(){
					self.checkDragPosition();
				}, 100);
			} else {
				self.checkDragPosition();
			}
			
			
		});
		
		this.checkFlick = function(pixels, time) {
			console.log(pixels + " " + time);
			return false;
		}
		
		this.content.bind("touchstart", function(event) {

			event.preventDefault();
			
			self.updateHeights();
			
			self.contentTouchY = event.originalEvent.touches[0].pageY;
			self.contentTouchMarginY = self.content.attr("alt");
			self.movementNoticed = false;
			
			
			if (isNaN(self.contentTouchMarginY))
			{
				self.content.attr("alt", "0");
				self.contentTouchMarginY = 0
			}
		
			
			jQuery(document).bind("touchend", function () {
				jQuery(document).unbind("touchmove");
				jQuery(document).unbind("touchend");
				
				
				/*
				console.log(event.originalEvent.touches[0].pageY + " - " + self.moveTouchY);
				
				var flick = self.checkFlick(event.originalEvent.touches[0].pageY - self.moveTouchY, event.timestamp - self.moveTouchTime);
				
				if (!flick) {
					try {
						self.checkDragPosition();
					} 
					catch (e) {
					
					}
				}
				*/
				
				// see if this is a click...
				if (!self.movementNoticed) {
					// issue a click event..
					console.log("click");
					var clickEvent = document.createEvent("MouseEvent");
					clickEvent.initMouseEvent(
						"click", //type
						true, //canBubble
						true, //cancelable
						event.originalEvent.view,
						1, //detail (number of clicks for mouse events)
						event.originalEvent.screenX,
						event.originalEvent.screenY,
						event.originalEvent.clientX,
						event.originalEvent.clientY,
						event.originalEvent.ctrlKey,
						event.originalEvent.altKey,
						event.originalEvent.shiftKey,
						event.originalEvent.metaKey,
						event.originalEvent.button,
						null// relatedTarget
					);
					event.target.dispatchEvent(clickEvent);
				}
				
				self.checkDragPosition();
			});
			
			jQuery(document).bind('touchmove', function(event) {
				event.preventDefault();
				
				self.moveTouchY = event.originalEvent.touches[0].pageY;
				self.moveTouchTime = event.timestamp;
				
				// check for movement...
				if (Math.abs (self.contentTouchY - event.originalEvent.touches[0].pageY) > 5) {
					self.movementNoticed = true;
				}
				
				var newtop = self.contentTouchMarginY - (self.contentTouchY - event.originalEvent.touches[0].pageY);
				newtop = Math.min(0 + self.dragGive, newtop);
				
				newtop = Math.max(newtop, (self.contentHeight - self.containerHeight + self.dragGive) * -1);
					
				self.moveContent(newtop);	
				//self.content.css("margin-top", newtop + "px");				
				
				self.checkFade();
				
				
				self.positionScrollbar();
				
				
				
			});
			
		});
		
		this.positionScrollbar = function() {
			// position scrollbar...
			var percent = (self.content.attr("alt") * -1) / (self.contentHeight - self.containerHeight);
			var offset = Math.floor((self.containerHeight - self.scrollbarHeight) * percent);
			
			offset = Math.max(offset, 0);
			offset = Math.min(offset, self.containerHeight - self.scrollbarHeight);
			
			self.scrollbar.css("top", offset + "px");
		}
		
		
		this.scrollbar.bind("mousedown touchstart", function(event) {
			event.preventDefault();
			
			self.updateHeights();

			try {
				event.originalEvent.touches[0].pageY;
				event.pageY = event.originalEvent.touches[0].pageY;
			} catch(e) { };
			self.dragStartY = event.pageY;
			self.scrollbarTop = self.scrollbar.css("top").replace("px", "") * 1;
		
			// bind mouseup and mousemove events...
			var elem = jQuery(this);
			jQuery(document).bind("mouseup touchend", function() {
				jQuery(document).unbind("mousemove");
				jQuery(document).unbind("touchmove");
				jQuery(document).unbind("touchend");
				jQuery(document).unbind("mouseup");
			});
			
			jQuery(document).bind("mousemove touchmove", function(event) {
				event.preventDefault();
				try {
					event.originalEvent.touches[0].pageY;
					event.pageY = event.originalEvent.touches[0].pageY;
				} catch(e) { };
				try {
					var newtop = self.scrollbarTop + (event.pageY - self.dragStartY);
					newtop = Math.max(newtop, 0);
					newtop = Math.min(newtop, self.containerHeight - self.scrollbarHeight);
					self.scrollbar.css("top", newtop + "px");
					self.positionChanged();
				} catch(e) {  }
			});
			
		});
		
		try {
			this.content[0].addEventListener("webkitTransitionEnd", function() {
				jQuery(this).removeClass("scrollerTransition");
				self.checkFade();
			}, true);
		} catch(e) {
			// do nothing..
		}
		try {
			this.content[0].addEventListener("transitionend", function() {
				jQuery(this).removeClass("scrollerTransition");
				self.checkFade();
			}, true);
		} catch(e) {
			// do nothing..
		}
		try {
			this.content[0].addEventListener("OTransitionEnd", function() {
				jQuery(this).removeClass("scrollerTransition");
				self.checkFade();
			}, true);
		} catch(e) {
			// do nothing..
		}

		this.updateHeights();
		
	}