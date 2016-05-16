var Slider = function(wrapper) {
		this.wrapper = jQuery(wrapper);
		this.wrapperWidth = this.wrapper.width();
		this.wrapperHeight = this.wrapper.height();
		
		var self = this;
		
		//setup the slides..
		this.slides = jQuery(".mcom_slide", this.wrapper).each(function(i) {
			jQuery(this).css({
					width: self.wrapperWidth+"px", 
					height: self.wrapperHeight+"px", 
					//'-webkit-transform': "translate3d(0px, 0px, 0px)",
					'position': 'absolute',
					top: "0px",
					left: i * self.wrapperWidth + "px"
			}).attr("slideNum", i);
		});	
		
		this.slideContainer = jQuery(".mcom_slideContainer", this.wrapper).css ({
			position: "absolute",
			width: self.slides.length * self.wrapperWidth,
			top: "0px",
			left: "0px",
			//'-webkit-transform': "translate3d(0px, 0px, 0px)",
			'-webkit-transition-property': '-webkit-transform',
			'-webkit-transition-duration': '.5s',
			'-webkit-transition-timing-function': 'ease-in'
		});
		
		this.currentSlide=0;
		this.maxSlides = this.slides.length;
		this.speed=500;
		
		this.swipeStatus = function(event, phase, direction, distance)
			{
				//If we are moving before swipe, and we are going Lor R in X mode, or U or D in Y mode then drag.
				if( phase=="move" && (direction=="left" || direction=="right") )
				{
					var duration=0;
					
					if (direction == "left")
						self.scrollSlides((self.wrapperWidth * self.currentSlide) + distance, duration);
					
					else if (direction == "right")
						self.scrollSlides((self.wrapperWidth * self.currentSlide) - distance, duration);
					
				}
				
				else if ( phase == "cancel")
				{
					self.scrollSlides(self.wrapperWidth * self.currentSlide, self.speed);
				}
				
				else if ( phase =="end" )
				{
					if (direction == "right")
						self.previousSlide()
					else if (direction == "left")			
						self.nextSlide();
				}
			}
		
		this.previousSlide = function()
		{
			this.currentSlide = Math.max(this.currentSlide-1, 0);
			self.scrollSlides( this.wrapperWidth * this.currentSlide, self.speed);
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}
	
		this.nextSlide = function()
		{
			this.currentSlide = Math.min(this.currentSlide+1, this.maxSlides-1);
			self.scrollSlides( this.wrapperWidth * this.currentSlide, self.speed);
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}
		
		this.showSlide = function(num) {
			if (isNaN(num))
			{
				// try to find this slide..
				var items = jQuery(num, this.slideContainer);
				if (items.length == 0)
					return;
				num = items.attr("slideNum");				
			} 
			
			
			var slidesApart = Math.abs(num - this.currentSlide);
			this.currentSlide = num;
			
			self.scrollSlides( self.wrapperWidth * this.currentSlide, this.speed + (Math.max(slidesApart-2, 0) * 300));
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}
			
		/**
		* Manuallt update the position of the imgs on drag
		*/
		this.scrollSlides = function(distance, duration)
		{
			this.slideContainer.css("-webkit-transition-duration", (duration/1000).toFixed(1) + "s");
			
			//inverse the number we set in the css
			var value = (distance<0 ? "" : "-") + Math.abs(distance).toString();
			
			if (finder.isTablet()) {
				this.slideContainer.css("-webkit-transform", "translate3d(" + value + "px,0px,0px)");
			} else {
				this.slideContainer.animate({
					"left": value + "px"
				}, 1000, "easeOutQuint");
			}
		}
		
		var swipeOptions = {
			triggerOnTouchEnd : true,	
			swipeStatus : self.swipeStatus,
			threshold:200,
			allowPageScroll:"auto"
		}
		
		//if (Modernizr.touch)
			//this.slideContainer.swipe(swipeOptions);
	}