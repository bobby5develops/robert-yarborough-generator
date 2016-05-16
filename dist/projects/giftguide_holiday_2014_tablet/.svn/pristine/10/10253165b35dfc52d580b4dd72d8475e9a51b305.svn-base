
var GgFinder = MacysFinder.extend({


    setup: function(){
    	this.defaultPage = this.getConfig().defaultPage;


        /* GLOBAL EVENT HANDLERS GO HERE */
        finder.autotracker = new AutoTracker();

        /* END GLOBAL EVENT HANDLERS */


        this.navView();   // all code for running the nav should be associeted with a navView



        this.startFinder();
    },







    navView : function(){




        // as per bb view, first we set $el
        var $el = $('#navContainer');
        // now set listeners for each button and apply click logic
        $el.find('.navitem').on('click', function(){
            // first get the desc attribute off the element which may exist or be null
            var desc = $(this).attr('desc');
            if (!desc) desc = '';
            //console.log('desc = ', desc);
            // check to see if we are clicking on something that does NOT have a dropdown
            if (   !$(this).hasClass('hasdropdown') ) {
                // if no dropdown then kill all dropdowns
                $el.find('.dropdownimage').removeClass('active');
            } else {
                // toggle the dropdowns active class and kill active on all siblings
                $el.find('.dropdownimage.'+desc).toggleClass('active').siblings().removeClass('active');
            }
        });

        //$('#navContainer').on()



    },

    setSlidingHeaderForTablet: function() {
		// flip to true if you want pools to be cached
		// table of contents
		// build the slider for the tablet
		var headerTemplate;
		var $container;

		// add up the width of all images
		var totalWidth;

		var $image;

		var $buttonContainer;
		// timrout to set url independent of animation
		var setUrlTimeout;

		var isSliderBuilt = false;
		// default current slide will be changed by processParams
		var currentIndex = 0;
		// store data objecrt for each slide here
		var currentArray = [];
		// total number of slides
		var totalSlides;
		// the image width, hopefully for each category they are the same .... looks like not
		var imageWidth;

		var $slider;

		var $buttons;

		function init( o ) {
			// if slider is not builkt in DOM, build it else just set the correct position
			if ( isSliderBuilt === false ) {
				buildSlider( o );
			} else {
				setCurrentSlide();
			}
		}

		function buildSlider( o ) {

			headerTemplate = "#shopHeaderTabletTemplate";
			$container = $(".marquee");

			currentArray = [];
			$container.empty();
			$container.addClass("tablet");
			// temporary button contianer to get it working
			$container.append("<div class='buttonContainer'></div><div class='slider'></div>");

			$slider = $container.find(".slider");
			$buttonContainer = $container.find(".buttonContainer");

			console.log(o, "THE OBJECT ******************");

			// bind swipe event to slider
			$slider.swipe( {
				swipeLeft:function(event, direction, distance, duration, fingerCount) {
					nextIndex();
				},
				swipeRight:function(event, direction, distance, duration, fingerCount) {
					prevIndex();
				},
				threshold: 30
			});

			// when transition eneds fire this event
			$slider.on( 'webkitTransitionEnd', function( event ) {
				setUrlTimeout = setTimeout( function(){
					var hash = currentArray[ currentIndex ].hash;
							//alert( hash );
						setUrl( hash );
					}, 700
				);
			});

			for ( var prop in o ) {
				if( o.hasOwnProperty( prop ) ){
					var clonedObject = jQuery.extend(true, {},  o[ prop ] );
					clonedObject.hash = prop;
					currentArray.push( clonedObject );
					console.log( $( headerTemplate ).tmpl( o[ prop ] ) );
					$( headerTemplate ).tmpl( o[ prop ] ).appendTo( $slider  );
				}
			}

			totalWidth = 0;
			var i = 0;
			totalSlides = currentArray.length;
			$images = $slider.find("img");

			console.log( $images.length, "IMAGES");
			$images.on("load", function() {
				//alert("loaded");
				imageWidth = $(this).width();
				totalWidth += imageWidth;
				i ++;
				if( i === $images.length ) {
					setMarquee();
				}
			});

			isSliderBuilt = true;

		}



		function setMarquee() {
			// make the width the entire width of all images
			$slider.width( totalWidth );
			// append temp buttons to get it working
			$images.each(function() {
				$buttonContainer.append("<div class='button'></div>");
			});

			$buttons = $buttonContainer.find(".button");

			$buttons.on("click", function( event ) {
				var index = $buttons.index( $(this) );
				setIndex( index );
			});

			setCurrentSlide();
		}

		function nextIndex() {

			var index = currentIndex;
			if ( index + 1 < totalSlides ) {
				index += 1;
				if ( setUrlTimeout ) clearTimeout( setUrlTimeout );

			}/* else {
				index = 0;
			}*/
			setIndex( index );
		}

		function prevIndex() {
			var index = currentIndex;
			if ( index - 1 >= 0 ) {
				index -= 1 ;
				if ( setUrlTimeout ) clearTimeout( setUrlTimeout );
			}/* else {
				index = totalSlides - 1;
			}*/
			setIndex( index );
		}

		function setIndex( index ) {
			currentIndex = index;
			var xNew = (index * imageWidth) * -1;
			$slider.css( "left", xNew );
		}

		function setCurrentSlide() {
			// check hash and get corresponding data for slide
			$slider = $container.find( ".slider" );

			var i = 0;
			while( i < currentArray.length ) {
				var o = currentArray[ i ];
				var hash = finder.currentPage.params.argc[ 1 ];
				if ( hash === o.hash) {
					currentIndex = i;
					break;
				}
				i++;
			}

			setIndex( currentIndex );
		}

		function reset() {
			isSliderBuilt = false;
			if ( $images ) $images.off();
			if ( $buttons ) $buttons.off();
			if ( $slider ) $slider.off();
		}

		function setUrl( hash ) {
			window.location = "#/" + finder.currentPage.navId + "/" + finder.currentPage.params.argc[ 0 ] + "/" + hash;
		}

		return {
			init: init,
			reset: reset
		};
    },
    
    pageChanged: function(page){
        this.highlightSelected(page);

        // close all drop downs on any page load
        $('#navContainer').find('.dropdownimage').removeClass('active');

    },
    
    highlightSelected: function(page){
        
    },
	
	getConfig: function() {
		return SiteConfig;
	}
    
});


var PoolHelper = Class.extend({
    
	parseEntry: function(entry) {
		
		/*
		if (entry.pfeed_specialsizes && !(entry.pfeed_specialsizes instanceof Array))
			entry.pfeed_specialsizes = entry.pfeed_specialsizes.split(",");
			
		if (entry.pfeed_color && !(entry.pfeed_color instanceof Array))
			entry.pfeed_color = entry.pfeed_color.split(",");
			
			
		// parse teh color size etc...
		entry.colorSize = {};
		if (entry.pfeed_colorsizeex) {
			
			var upcs = [];
			if (entry.pfeed_colorsizeexupc) {
				upcs = jQuery.parseJSON(entry.pfeed_colorsizeexupc);
			}
			
			var skus = [];
			if (entry.pfeed_colorsizeexskuid) {
				skus = jQuery.parseJSON(entry.pfeed_colorsizeexskuid);
			}
			
			var colorSizes = entry.pfeed_colorsizeex.replace(/\],\[/gi, "]|[").split("|");
			for (var i = 0; i < colorSizes.length; i++) {
				var item = colorSizes[i].replace("[", "").replace("]", "").split(",");
				entry.colorSize[item[0]+"_"+item[1]] = {
					color: item[0],
					size: item[1],
					id: upcs[i] ? upcs[i] : "",
					skuid: skus[i] ? skus[i] : ""
				}
			}
			
			if (entry.pfeed_upcs) {
				upcs = jQuery.parseJSON(entry.pfeed_upcs);
				for (var i = 0; i < upcs.length; i++) {
					var thisItem = upcs[i];
					if (entry.colorSize[thisItem.color + "_" + thisItem.size]) {
						jQuery.extend(entry.colorSize[thisItem.color + "_" + thisItem.size], thisItem);
					} else {
						entry.colorSize[thisItem.color + "_" + thisItem.size] = thisItem;
					}
					
				}
			}

		}
		*/	
	}
	
});

