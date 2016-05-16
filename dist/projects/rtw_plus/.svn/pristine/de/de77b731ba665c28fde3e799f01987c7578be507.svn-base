
var ProductPool = Class.extend({

	init: function(params) {
		
		this.poolScrollable = true;
		this.itemsPerPage = 20;
		this.loaded = false;
		this.showMoreOnHover = false;
		
		if (params) {
			this.poolScrollable = params.scrollable;
				
			if (params.itemsPerPage)
				this.itemsPerPage = params.itemsPerPage;
				
			if (params.container)
				this.setupPool(params.container);
				
			if (params.template)
				this.template = params.template;
			else 
				this.template = "productListing";
				
			if (params.showMoreOnHover)
				this.showMoreOnHover = params.showMoreOnHover;
		}
		
		this.facets = {};
		this.poolWorker = new PoolBoy(this);
		this.setLiveEvents();
		
	},
	
	setLiveEvents: function() {
		if (this.poolContainer.is("[liveEventsSet]"))
			return;
			
		var self = this;	
			
		this.poolContainer.attr("liveEventsSet", "yes");
		
		if (!finder.isTablet() && this.showMoreOnHover) {
			jQuery(".productListing").live({
				mouseover: function(event){
					jQuery(this).addClass("hover");
					self.productListingOver(event);
				},
				mouseout: function(event){
					jQuery(this).removeClass("hover");
					self.productListingOut(event);
				}
			})
		}
		
		jQuery(".productListing .quickview A").live ({
            mousedown: function(){
                jQuery(this).addClass("clicked");
            },
			mouseup: function(){
                jQuery(this).removeClass("clicked");
            }
        })
		
		jQuery(".touch .productListing .bonusOffers").live({
			click: function(event) {
				event.preventDefault();
				event.stopPropagation();
				jQuery(this).toggleClass("active");
			}
		})
		
		jQuery(".productListing .quickview").live ({
            
            mouseout: function(){
                jQuery(this).removeClass("hover");
            },
			mouseover: function(){
                jQuery(this).addClass("hover");
            }
        })
		
		var swatchEvent = "hover";
		if (finder.isTablet()) {
			swatchEvent = "click";
		}
		jQuery(".productListing .swatch").live(swatchEvent, function() {
			var item = jQuery(this);
			if (item.attr("productImage") == "")
				return;
			
			jQuery(".productImage", item.parents(".productListing")).attr("src", item.attr("productImage"));
		}, function() {
		
			
		});
		
		
		
		
		
	},
	
	setResultsDisplay: function() {
		
	},
	
	getResultsDisplay: function() {
		
	},
	
	addFacet: function(facet) {
		
		facet.setParent(this);
		this.facets[facet.name] = facet;

		
		var container = jQuery("<DIV></DIV>").attr("forFacet", facet.name).addClass("facet").addClass(facet.name).append(facet.display());
		this.facetsContainer.append(container);
	},
	
	getFacet: function(name) {
		return this.facets[name];
	},

	setupPool: function(container) {
		
		
		var self = this;
		this.poolContainer = jQuery(container);
		
		this.poolHeader = jQuery("<div id='poolHeader'></div>").appendTo(this.poolContainer);
		
		this.facetsContainer = jQuery("<div id='facetsContainer'></div>").appendTo(this.poolContainer);
	//	jQuery("<div id='poolPaginationTop' class='poolPagination'></div>").appendTo(this.poolHeader);
		
		this.poolResults = jQuery("<div id='poolResults'></div>").appendTo(this.poolContainer);
		
		this.poolFooter = jQuery("<div id='poolFooter'></div>").appendTo(this.poolContainer);
		jQuery("<div id='poolPaginationBottom' class='poolPagination'></div>").appendTo(this.poolFooter);
		
		this.poolPagination = jQuery(".poolPagination", this.poolContainer);
		
		jQuery("<div class='itemsFound'></div>").appendTo(this.poolPagination);
		jQuery("<div class='pageNumbers'></div>").appendTo(this.poolPagination);
		
		this.itemsFound = jQuery(".itemsFound", this.poolContainer);
		this.pageNumbers = jQuery(".pageNumbers", this.poolContainer);
		
		this.poolPagination.append("<div style='clear:both;'></div>");
		
		
		
		this.noResults = jQuery("<div id='noResults'></div>");
		this.noResults.html("We're sorry, at this time we do not have any items in our collection that match your preferences. We often add new styles to our site, so check back soon; or, make new preference selections now.");
		
		
		
		this.poolContainer.bind("poolDataLoaded", function() {
			self.poolDataLoaded();
		});
		
		this.poolContainer.bind("filterFacetChanged", function() {
			self.runFilters();
		});
		
		this.poolContainer.bind("sortFacetChanged", function() {
			self.sortChanged();
		});
		
		this.poolContainer.bind("resetFacets", function() {
			self.resetFacets();
		});
		
		this.pageNumbers.delegate("A[pageNum]", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			self.showPage(jQuery(this).attr("pageNum"));
			jQuery("#finderContainer").trigger("poolPaged");
		})
		
		this.pageNumbers.delegate("A.prevPage", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			var currentPage = jQuery("A[pageNum].selected", self.pageNumbers).attr("pageNum") * 1;
			self.showPage(currentPage - 1);
			jQuery("#finderContainer").trigger("poolPaged");
		})
		
		this.pageNumbers.delegate("A.nextPage", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			var currentPage = jQuery("A[pageNum].selected", self.pageNumbers).attr("pageNum") * 1;
			self.showPage(currentPage + 1);
			jQuery("#finderContainer").trigger("poolPaged");
		})
	},
	
	reset: function() {
		this.poolContainer.html("");
		this.facets = {};
		this.scroller = false;
		this.setupPool(this.poolContainer);
	},
	
	poolDataLoaded: function() {
		// get all the items...
		var items = this.poolWorker.db().get();
		
		// let the facets reorder themselves using this data...
		for (i in this.facets) {
			this.facets[i].handlePoolData(items);
		}
	},
	
	setupCategoryFilter: function(filters) {
		this.staticFilter = filters;
	},

	loadPool: function(pool, filter) {
		
		console.log('IN LOAD POOL')
		
		if (filter) {
			this.staticFilter = filter;
		} else {
			this.staticFilter = {} 
		}
		// load the right pool...
		finder.loadingDisplay.start("pool load");
		finder.loadingDisplay.end("pool load");
		var self = this;
		setTimeout(function() {
			
			console.log('IN TIMEOUT')
			
			self.poolWorker.loadPool(pool, jQuery.proxy(self.poolLoaded, self));
		}, 10);
		
	},
	
	poolLoaded: function() {
		
		this.runFilters();	
		
		this.loaded = true;
		finder.loadingDisplay.end("pool load");
		finder.resizePage();
		//jQuery("#finderContainer").trigger("poolLoaded");	
		//jQuery(finder.getCurrentPage().parentDiv).trigger("poolLoaded");
		this.poolContainer.trigger("poolLoaded");
		
	},
	
	setPoolScrollable: function(bool) {
		this.poolScrollable = bool;
	},
	
	setItemsPerPage: function(num) {
		this.itemsPerPage = num;
	},
	
	filter: function(categoryFilter) {
		this.categoryFilter = categoryFilter;
		this.runFilters();
	},
	
	itemsFiltered: function(myfilter) {

		if (!myfilter)
			myfilter = [];
			
		try {
			myfilter = jQuery.merge(myfilter, [this.staticFilter]);
		} catch(e) { }
		
		console.log("filter", myfilter);
		console.log("filter", this.staticFilter);
		
		if (myfilter.length == 0)
			myfilter = {};

		var contentPane = this.poolResults;
		if (this.poolScrollable && this.scroller && !finder.isTablet()) {
			contentPane = jQuery(this.scroller.getContentPane());
		}

		contentPane.html("");
		//var items = this.poolWorker.showFilteredResults(contentPane, "#productListing", myfilter);
		
		this.items = this.poolWorker.getFilteredResults(myfilter);
		
		
		var items = this.items;
		
		console.log("items length", items.count());
		
		items.length = items.count();
		
		
		// build pagination results...
		
		var pluralItems = (items.length == 1) ? "item" : "items";
		this.itemsFound.html(items.length + " " + pluralItems + " found");
		
		var numPages = Math.ceil(items.length / this.itemsPerPage);
		
		this.pageNumbers.attr("numPages", numPages);
		
		if (numPages > 1) {
			this.updatePagination(0);
			this.pageNumbers.show();
		} else {
			this.pageNumbers.hide();
		}

		if (items.count() == 0) {
			contentPane.append(this.noResults);
			return;
		}


		this.showPage(0);

		
		
		
	},
	
	updatePagination: function(current) {

		var numPages = (this.pageNumbers.attr("numPages") * 1);

		current = current * 1  + 1;
		
		if (isNaN(current) || current > numPages)
			current = numPages;
	
		var numPagesToShow = 2;
		
		//this.pageNumbers.html("<a href='javascript:void(0)' class='prevPage'><img src='" + assetsDirectory + "images/leftarrow.gif' border='0'> Prev</a>");
		this.pageNumbers.html("<a href='javascript:void(0)' class='prevPage'><img src='" + assetsDirectory + "images/leftarrow.gif' border='0'> </a>");
		
		var startPage = 1;
		var endPage = numPages;
		
		if (numPages <= numPagesToShow) {
			endPage = numPages;
		} else {
			startPage = current - Math.floor(numPagesToShow / 2);
			if (startPage < 1)
				startPage = 1;
				
			endPage = startPage + numPagesToShow;
			if (endPage > numPages) {
				endPage = numPages;
				startPage = endPage - numPagesToShow;
			}
				
		}
		
		for (i = startPage; i <= endPage; i++) {
			this.pageNumbers.append("<a href='javascript:void(0);' pageNum='" + (i - 1) + "'>" + (i) + "</a> ");
		}
		//this.pageNumbers.append("<a href='javascript:void(0)' class='nextPage'>Next <img src='" + assetsDirectory + "images/rightarrow.gif' border='0'></a>");
		this.pageNumbers.append("<a href='javascript:void(0)' class='nextPage'> <img src='" + assetsDirectory + "images/rightarrow.gif' border='0'></a>");
	},
	
	showPage: function(pageNum) {

		pageNum = pageNum * 1;
		
		var numPages = this.pageNumbers.attr("numPages") * 1;
		this.updatePagination(pageNum);
		
		if (pageNum <= 0) 
			jQuery("A.prevPage", this.pageNumbers).css("visibility", "hidden");
		else 
			jQuery("A.prevPage", this.pageNumbers).css("visibility", "visible");
			
		if (pageNum >= numPages - 1) 
			jQuery("A.nextPage", this.pageNumbers).css("visibility", "hidden");
		else 
			jQuery("A.nextPage", this.pageNumbers).css("visibility", "visible");
		
		this.pageNumbers.attr("currentPage", pageNum);
		
		
		jQuery("A", this.pageNumbers).removeClass("selected");
		jQuery("A[pageNum=" + pageNum+ "]", this.pageNumbers).addClass("selected");
		
		
		var contentPane = this.poolResults;
		if (this.poolScrollable && this.scroller && !finder.isTablet()) {
			contentPane = jQuery(this.scroller.getContentPane());
		}
		//jQuery(".productListing:visible", this.poolResults).hide();
		//jQuery(".productListing", this.poolResults).slice(pageNum * this.itemsPerPage, pageNum * this.itemsPerPage + this.itemsPerPage).fadeIn();
		
		contentPane.html("");
		jQuery("#" + this.template).tmpl(this.items.get().slice(pageNum * this.itemsPerPage, pageNum * this.itemsPerPage + this.itemsPerPage)).appendTo(contentPane);
//		jQuery(contentPane).append("<div style='clear: both; margin-bottom: 100px;'></div>");
		
		jQuery("#finderContainer").trigger("dataChanged");	
			
			
				
		if (this.poolScrollable) {
			try {
				this.scroller.reinitialise();
				this.scroller.scrollTo(0,0);
			} catch(e) {
				this.scroller = new Scroller(contentPane);
			}
			
				this.scrollerInited = true;
				
			
		}
		
			
		jQuery("#finderContainer").trigger("dataChanged");
		jQuery("#finderContainer").trigger("poolPageChanged");
	},
	
	
	runFilters: function() {

		var filter = [];

		for (i in this.facets) {
			
				//filter = jQuery.merge(filter, this.facets[i].getSelectedFilter());
			if (this.facets[i].getType() == "FILTER") {
				filter.push(this.facets[i].getSelectedFilter());
			}
		}
				
		
		
		this.itemsFiltered(filter);
	},
	
	sortChanged: function() {
		var filter = [];

		for (i in this.facets) {
			if (this.facets[i].getType() == "SORT") {
				filter = this.facets[i].getSelectedFilter();
			} else {
				
			}
		}
		
		if (!filter[0]) {
			filter = "pool_insert_id asc";
		}
		
		
		
		this.poolWorker.sort(filter[0]);
		this.runFilters();
			
	},
	
	resetFacets: function() {

		for (i in this.facets) {
			this.facets[i].reset();
		}
		
		this.sortChanged();
					
	},
	
	
	productListingOver: function(event) {

		var item = jQuery(event.currentTarget);
		
		var container = item.parent();
		
		
		
		if (!item.hasClass("productListing") || item.hasClass("isClone") || item.attr("productId") == jQuery(".productListingHover", container).attr("productId"))
			return;
		
		
		
		// see if there is already a hovered item...
		// and remove it..
		jQuery(".productListingHover", container).remove();
		
		// create a clone and add it to the container..
		var clone = item.clone().addClass("isClone").wrap("<div class='productListingHover'></div>");
		clone = clone.parent();
		
		
		var itemPosition = item.position();
		
		clone.css({
			top: itemPosition.top +3  + "px",
			left: itemPosition.left + 3 + "px"
		}).mouseout(function() {
			if (jQuery(event.currentTarget).hasClass(".productListingHover"))
				jQuery(this).remove();
		})		
		
		container.append(clone);
		
		jQuery(".moreInfo", clone).slideDown("fast");
		
	},
	
	productListingOut: function(event) {

	}






	
})