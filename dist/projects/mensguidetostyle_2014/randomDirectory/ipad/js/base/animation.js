var cssTimingFunctions = {

	easeInQuad: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
	easeOutQuad: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
	easeInOutQuad: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
	easeInCubic: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
	easeOutCubic: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
	easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
	easeInQuart: "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
	easeOutQuart: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
	easeInOutQuart: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
	easeInQuint: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
	easeOutQuint: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
	easeInOutQuint: "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
	easeInSine: "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
	easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
	easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
	easeInExpo: "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
	easeOutExpo: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
	easeInOutExpo: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
	easeInCirc: "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
	easeOutCirc: "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
	easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)"
	 
}


var AnimationEngine = Class.extend ( {
	
	
	init: function() {
		
	},
	
	removeAnimations: function(elem) {
		elem.css({
			"-webkit-transition": "none",
			"-moz-transition": "none",
			"-o-transition": "none",
			"-ms-transition": "none"
		});
		
		elem.css({
			"-webkit-transition-duration": "0s",
			"-webkit-transition-delay": "0s",
			"-moz-transition-duration": "0s",
			"-moz-transition-delay": "0s",
			"-o-transition-duration": "0s",
			"-o-transition-delay": "0s",
			"-ms-transition-duration": "0s",
			"-ms-transition-delay": "0s"
		});
	},
	
	animate: function(item, from, to, params) {
		
		var self = this;
		
		item = jQuery(item);
		
		var defaultParams = {
			easing: "ease-in",
			delay: 0,
			delayEach: 100,
			duration: 500,
			forceJQuery: false
		};
		
		params = jQuery.extend({}, defaultParams, params);
		
		var useJQuery = true;
		if (Modernizr.csstransitions && !params.forceJQuery)
		{
			useJQuery = false;
		}
		
		if (!useJQuery) {
			switch (params.easing) {
				case "ease-in":
				case "easein":
				case "ease-out":
				case "easeout":
				case "linear":
				case "ease-in-out":
				case "easeinout":
					// do nothing..
					break;
					
				default:
					if (params.easing.indexOf("cubic-bezier") == -1) {
						if (!cssTimingFunctions[params.easing]) 
							params.forceJQuery = true;
						else 
							params.easing = cssTimingFunctions[params.easing];
					}
			}
		}
		
		// idea behind animations is to clone the object..
		// position it above the original object...
		// hide the original...
		// then animate the clone..
		// after animation.. hide the clone.. and make the orignial visible..
		// this should be the jQuery method.  For CSS transitions...
		// no cloning.. just transform the original..
		
		
		
		var normalizedExpressions = this.prepare(item, from, to, useJQuery);
		
		if (useJQuery)
		{
			// wrap all elements into a div...
			this.addWrappers(item);
			(function() {
				item.each(function(i) {
					console.log("jQuery");
					jQuery(this).stop()
								.css(normalizedExpressions.from)
								.delay(params.delay + (params.delayEach * i))
								.animate(normalizedExpressions.to, params.duration, params.easing);
					
				});
			})();
		} else {
			(function() {
				
				item.each(function(i) {
					self.cssTransform(	this, 
										normalizedExpressions.from, 
										normalizedExpressions.to, 
										params.duration, 
										params.delay + (params.delayEach * i), 
										params.easing
									);
				});
				
			})();
		}
		
		
		
	},
	
	cssTransform: function(elem, before, after, timing, delay, easing) {
		
		var elem = jQuery(elem);
		
		if (!easing)
			easing = "ease-in-out";
			
		if (!timing)
			timing = ".5s"
			
		if (!delay)
			delay = "0s"
			
		// reset all animation attributes..
		elem.css({
			"-webkit-transition-duration": "0s",
			"-webkit-transition-delay": "0s",
			"-moz-transition-duration": "0s",
			"-moz-transition-delay": "0s",
			"-o-transition-duration": "0s",
			"-o-transition-delay": "0s",
			"-ms-transition-duration": "0s",
			"-ms-transition-delay": "0s"
		});
		
		// apply before items...
		elem.css(before);
		
		setTimeout(function() {
			elem.css({
				"-webkit-transition-duration": timing+"ms",
				"-webkit-transition-delay": delay+"ms",
				"-webkit-transition-timing-function": easing,
				
				"-moz-transition-duration": timing+"ms",
				"-moz-transition-delay": delay+"ms",
				"-moz-transition-timing-function": easing,
				
				"-o-transition-duration": timing+"ms",
				"-o-transition-delay": delay+"ms",
				"-o-transition-timing-function": easing,
				
				"-ms-transition-duration": timing+"ms",
				"-ms-transition-delay": delay+"ms",
				"-ms-transition-timing-function": easing
			});
			elem.css(after);
		}, 10);
		
	},
	
	prepareItems: function(items) {
		this.addWrappers(items)	
	},
	
	addWrappers: function(item) {
		
		var data = [];

		item.each(function() {
				var thisItem = jQuery(this);
				
				if (thisItem.hasClass("hasWrapper"))
					return;

				var size = thisItem.size();
				var position = thisItem.position();
				
				data.push({'size': size, 'position': position});
			});
			
		item.each(function() {
			var thisItem = jQuery(this);
			if (thisItem.hasClass("hasWrapper"))
				return;
				
			var dataPiece = data.shift();
			
			
			thisItem.css({
				position: 'relative',
				top: '0px',
				left: '0px',
				bottom: '0px',
				right: '0px'				
			})
			.wrap("<div class='animationWrapper' style='position: absolute; top:" + dataPiece.position.top + "px; left: " + dataPiece.position.left + "px;'>")
			.addClass("hasWrapper");
		})
	},
	
	prepare: function (item, from, to, useJQuery) {
		
		var defaultFrom = {
			x: 0,
			y: 0,
			z: 0,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
			scale: 1
		}
		
		from = jQuery.extend({}, defaultFrom, from);
		to = jQuery.extend({}, from, to);
		
		// what type of animation are we going to do...
		if (!useJQuery)
		{
			// this will be a css transition..
			var fromTranslate = "";
			var toTranslate = "";
			var fromRotate = "";
			var toRotate = "";
			
			
			// do we have 3d transforms?
			if (Modernizr.csstransforms3d)
			{
				// translates
				fromTranslate += "translate3d(" + from.x + "px, " + from.y + "px, " + from.z + "px)";
				toTranslate += "translate3d(" + to.x + "px, " + to.y + "px, " + to.z + "px)";
				fromTranslate += " rotateX(" + from.rotateX + "deg) rotateY(" + from.rotateY + "deg) rotate(" + from.rotateZ + "deg)";
				toTranslate += " rotateX(" + to.rotateX + "deg) rotateY(" + to.rotateY + "deg) rotate(" + to.rotateZ + "deg)";
			
			} else {
				fromTranslate += "translateX(" + from.x + "px) translateY(" + from.y + "px)";
				toTranslate += "translateX(" + to.x + "px) translateY(" + to.y + "px)";
				fromTranslate += " rotate(" + from.rotateZ + "deg)";
				toTranslate += " rotate(" + to.rotateZ + "deg)";
			}	
			
			// add in scales...
			fromTranslate += " scale(" + from.scale + ")";
			toTranslate += " scale(" + to.scale + ")";
			
			
			from['-webkit-transform'] = fromTranslate;
			from['-moz-transform'] = fromTranslate;
			from['-o-transform'] = fromTranslate;
			from['-ms-transform'] = fromTranslate;
			
			to['-webkit-transform'] = toTranslate;
			to['-moz-transform'] = toTranslate;
			to['-o-transform'] = toTranslate;
			to['-ms-transform'] = toTranslate;
						
		} else {
			// this will be a jQuery transition...
			
			from['left'] = from.x + "px";
			from['top'] = from.y + "px";
			
			to['left'] = to.x + "px";
			to['top'] = to.y + "px";
			
		}
		
		from = this.removeUnwantedExpressions(from);
		to = this.removeUnwantedExpressions(to);
		
		return {"from": from, "to": to};		
	},
	
	removeUnwantedExpressions: function (expression) {
		var returner = {};
		for (i in expression)
		{
			switch (i.toLowerCase())
			{
				case "x":
				case "y":
				case "z":
				case "rotatex":
				case "rotatey":
				case "rotatez":
				case "scale":
					// do nothing..
					break;
					
				default:
					returner[i] = expression[i];
					break;
			}
		}
		return returner;
	}
	
	
	
	
	
	
	
	
});

var Animation = Class.extend({
	init: function() {
		this.queue = "";
		
		// create a div to hold our clones...
		if (jQuery("#cloneHolder").length == 0) {
			jQuery("<div id='cloneHolder'></div>").css({width:"1px", height: "1px", display: 'none'}).appendTo(document.body);
		}
	},
	
	getClone: function (elem) {
		var clone = jQuery("#" + elem.attr("id"), "#cloneHolder");
		if (clone.length == 0) {
			clone = elem.clone();
		} else {
			clone.remove();
		}
		return clone;
	},
	
	animateIn: function (items, initialState, timing, delay, forceJQuery)
	{
		if (!timing)
			timing = 500;
			
		if (!delay)
			delay = 100;
			
		if (!forceJQuery)
			forceJQuery = false;
		
		var self = this;
		jQuery(items).each (function(i) {
			elem = this;
			var elem = jQuery(elem);
			elem.attr("oldVisibility", elem.css("visibility"));
			var position = elem.position();
			
			// clone the original object... and then hide it..
			var clone = self.getClone(elem);
			elem.css({visibility: "hidden"});
			clone.css({visibility: 'visible'});
			
			elem.addClass("being_animated");
			
			// prepare the clone for animation...
			var defaults = {}
			for (var j in initialState)
			{
				switch (j) {
					case "top": 
						defaults['top'] = position.top;
						if (!initialState['left'])
							defaults['left'] = position.left;
						break;
						
					case "left":
						defaults['left'] = position.left;
						if (!initialState['top'])
							defaults['top'] = position.top;
						break;
						
					default:
						defaults[j] = elem.css(j);
						break;
				}	
			}
			defaults.position = "absolute";
			defaults.opacity = elem.css("opacity");
			
			var callback = function(){
				elem.css({
					visibility: "inherit"
				});
				elem.removeClass("being_animated");
				jQuery(this).remove();
				if (!Modernizr.csstransitions)
					jQuery(this).appendTo("#cloneHolder");
			}
			
			if (Modernizr.csstransitions && !forceJQuery)
			{
				self.animateWithCss(elem, clone, initialState, defaults, timing * 1.5, (delay * (i + 1)) * 1.5, callback);
				self.addNavBlock((timing * 1.5) + ((delay * (i + 1)) * 1.5));
			} else {
				self.animateWithJQuery(elem, clone, initialState, defaults, 1000, delay, callback);
				self.addNavBlock(1000 + delay);
			}
		});

	},
	
	addNavBlock: function(delay) {
		finder.addNavBlock(delay)
	},
	
	animateOut: function(items, finalState, timing, delay, forceJQuery) {
		if (!timing)
			timing = 500;
			
		if (!delay)
			delay = 100;
			
		if (!forceJQuery)
			forceJQuery = false;
		
		var self = this;
		jQuery(items).each (function(i) {

			var elem = jQuery(this);
			var position = elem.position();
			
			// clone the original object... and then hide it..
			var clone = self.getClone(elem);
			elem.css({visibility: "hidden"});
			
			elem.addClass("being_animated");
			
			// prepare the clone for animation...
			var startState = {};
			for (var i in finalState)
			{
				switch (i) {
					case "top": 
						startState['top'] = position.top;
						if (!finalState['left'])
							startState['left'] = position.left;
						break;
						
					case "left":
						startState['left'] = position.left;
						if (!finalState['top'])
							startState['top'] = position.top;
						break;
						
					default:
						startState[i] = elem.css(i);
						break;
				}	
			}
			startState.position = "absolute";
			startState.opacity = elem.css("opacity");
			
			var callback = function() {
				jQuery(this).remove();
				elem.removeClass("being_animated");
			}	
			
			if (Modernizr.csstransitions && !forceJQuery)
			{
				self.animateWithCss(elem, clone, startState, finalState, timing, delay * (i + 1), callback);
				self.addNavBlock(timing + (delay * (i + 1)));
			} else {
				self.animateWithJQuery(elem, clone, startState, finalState, timing, delay, callback);
				self.addNavBlock(1000 + delay);
			}
		});
	},
	
	cleanInitialState: function(initialState, elem, pos)
	{
		// check of += and -= type things..
		var initial = jQuery.extend({}, initialState);
		if (initial.top)
			initial.top = this.processIncrementalCssItem(initial.top, pos.top);
			
		if (initial.left)
			initial.left = this.processIncrementalCssItem(initial.left, pos.left);
		return initial;
	},
	
	processIncrementalCssItem: function(change, original)
	{
		change = "" + change;
		change.replace("px", "");

		if (change.substring(1,2) == "=")
		{

			var operator = change.substring(0, 1);
			change = change.substring(2);

			switch (operator)
			{
				case "+":
					change = (1 * change) + original;
					break;
					
				case "-":
					change = original - (1 * change);
					break;
			}
		}

		return change;
	},
	
	animateWithCss: function(elem, clone, initialState, defaults, timing, delay, callback)
	{
		var self = this;
		var position = jQuery(elem).position();
		defaults = self.cleanInitialState(defaults, elem, position);
		var initials = self.cleanInitialState(initialState, elem, position);
		initialState = jQuery.extend({}, defaults, initials);
		
		// use translate instead of top and left..
		if (!initialState.top && !initialState.left) {
		
		}
		else {			


			if (isNaN(defaults.top))
				defaults.top = initialState.top;
				
			if (isNaN(defaults.left))
				defaults.left = initialState.left;
				
				
			var topDiff = defaults.top - initialState.top;
			var leftDiff = defaults.left - initialState.left;
			
			initialState.top += "px";
			initialState.left += "px";
			
			defaults.top = initialState.top;
			defaults.left = initialState.left;
			defaults["-webkit-transform"] = "translate3d(" + leftDiff + "px, " + topDiff + "px, 0px)";
			
		}
		clone.css(initialState);
		clone.css ({
			"-webkit-transition": "all " + timing + "ms ease-in-out"
		});
		
		clone.appendTo(elem.parent());
			
		clone[0].addEventListener("webkitTransitionEnd", callback, true);
		
		setTimeout(function() {clone.css(defaults);}, delay);

		
	},
	
	animateWithJQuery: function (elem, clone, initialState, defaults, timing, delay, callback)
	{
		var position = jQuery(elem).position();
		var initials = this.cleanInitialState(initialState, elem, position);
		initialState = jQuery.extend({}, defaults, initials);
		initialState.top += "px";
		initialState.left += "px";
		
		defaults.top += "px";
		defaults.left += "px";		

		
		var uniques = this.parseUniques(initialState, defaults);

		clone.appendTo(elem.parent());
		clone.css(uniques.initialState)

	
		
		setTimeout(function(){
			clone.animate(uniques.defaults, timing, "swing", callback);
		}, delay);
		
		
	},
	
	parseUniques: function (initial, def) {
		var i = {};
		var d = {};
		for (j in def)
		{
			try {
				if (initial[j] != def[j] && initial[j] + "px" != def[j] && initial[j] != def[j] + "px")
				{
					i[j] = initial[j];
					d[j] = def[j];
				}
			} catch(e) { }
		}
		return {initialState: i, defaults: d};
	} 
	
});


