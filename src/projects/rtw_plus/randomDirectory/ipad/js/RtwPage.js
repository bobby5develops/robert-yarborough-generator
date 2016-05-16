var RtwPage = FinderPage.extend({
	getHighlight: function() {
		return "homepage";
	},
	setup: function() {
		this._super();
		this.parentDiv = jQuery(".finderPage#" + this.navId, "#pageContainer");
		var self = this;
		if(this.title == 'accessories'){
			$('#footerContainer #rolloverkey').css('visibility', 'hidden');
			$('#footerContainer #pagination').css('visibility', 'visible');
			$('#footerContainer #footer .facebook').attr('config', 'accessories');
			$('#footerContainer #footer .facebook').attr('trend', self.navId);
			$('#footerContainer #footer .pinterest').attr('config', 'accessories');
			$('#footerContainer #footer .pinterest').attr('trend', self.navId);
			$('#footerContainer #footer .twitter').attr('config', 'accessories');
			$('#footerContainer #footer .twitter').attr('trend', self.navId);
			$('#pool_wrap').show();
			$('p.findStore').hide();
				
			$('#fake_facets').show();
			$('#fake_facets li').each(function(e){
				$(this).removeClass('toggled');
				var url = $(this).children('a').attr('href').replace('#/', '');
				if(url == self.navId){
					$(this).addClass('toggled');
				}
			});
			$('#additions p a').each(function(e){
				$(this).removeClass('current');
				var url = $(this).attr('href').replace('#/', '');
				if(url == self.navId){
					$(this).addClass('current');
				}
			});
			finder.loadMyPool(this.title);
			
		}else if(this.navId  == 'home'){
			$('#footerContainer #rolloverkey').css('visibility', 'hidden');
			$('#footerContainer #pagination').css('visibility', 'hidden');
			$('#footerContainer #footer .facebook').attr('config', 'currentPage');
			$('#footerContainer #footer .facebook').attr('trend', '');
			$('#footerContainer #footer .pinterest').attr('config', 'currentPage');
			$('#footerContainer #footer .pinterest').attr('trend', '');
			$('#footerContainer #footer .twitter').attr('config', 'currentPage');
			$('#footerContainer #footer .twitter').attr('trend', '');
			$('#pool_wrap').hide();
			$('p.findStore').show();
			$('#fake_facets').hide();
			
		}else{
			$('#footerContainer #rolloverkey').css('visibility', 'visible');
			$('#footerContainer #pagination').css('visibility', 'visible');
			$('#footerContainer #footer .facebook').attr('config', 'trend');
			$('#footerContainer #footer .facebook').attr('trend', this.title);
			$('#footerContainer #footer .pinterest').attr('config', 'section');
			$('#footerContainer #footer .pinterest').attr('trend', this.title);
			$('#footerContainer #footer .twitter').attr('config', 'trend');
			$('#footerContainer #footer .twitter').attr('trend', this.title);
			$('#pool_wrap').show();
			$('p.findStore').hide();

			$('#fake_facets').hide();
			finder.loadMyPool(this.title);
		}
		
		$('ul.facetTabsContainer li[pfeed]').on('click', function(){
			if($(this).attr('pfeed') == 'all'){
				var facet = 'shopwomen';
			}else if($(this).attr('pfeed') == 'petites'){
				var facet = 'petite';
			}
			finder.skava.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-fallfashionrtw."+self.title+"."+facet, catid:"ca-so-fallfashionrtw-"+self.navId});
		});
		
//		console.log('this.shareCopy', this.shareCopy)
		finder.resizePage();
	},

	processParams: function() {
		this._super();
		this.handleTracking();
		if(this.navId  != 'home'){
			$('#finderContainer #pool_wrap').css('background-image', 'url("'+assetsDirectory+'images/'+this.navId+'/pool_bg.png")');
		}
		$('#navContainer #nav ul li a').removeClass('active');
		$('#navContainer #nav ul li#'+this.title+' a').addClass('active');
		
		// set up footerNav
		this.pages = finder.getConfig().paging;
		for(var p = 0; p < this.pages.length; p++){
			if(this.navId == this.pages[p]){
				var thisPage = p;
				if(p == 0){
					var prevPage = this.pages.length-1;
				}else{
					var prevPage = p-1;
				}
				if(p == this.pages.length-1){
					var nextPage = 0;
				}else{
					var nextPage = p+1;
				}
			}
		}
		$('#footerContainer #pagination .pages .currpage').text(thisPage+1);
		$('#footerContainer #pagination .pages .totalpages').text(this.pages.length);
		$('#footerContainer #pagination .paging a.previous').attr('href', '#/'+this.pages[prevPage]);
		$('#footerContainer #pagination .paging a.next').attr('href', '#/'+this.pages[nextPage]);
		// petite deeplink
		if((this.params.argc) && (this.params.argc[0] == 'petite')){
			$('ul.facetTabsContainer li[pfeed=all] input').each(function(){
				$(this).prop('checked', false);
				$(this).parent().removeClass('toggled');
			});
			$('ul.facetTabsContainer li[pfeed=petites] input').each(function(){
				$(this).prop('checked', true);
				$(this).parent().addClass('toggled');
			});
		}
	},
	
	handleTracking: function() {
		try {
			finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().tracking[finder.getCurrentPage().navId]);
		} catch(err) {
			console.error("NO TRACKING",path);
		}
	}

});

var RtwPoolContainerPage = RtwPage.extend({
	init: function(params) {
		this._super(params);
		this.poolScrollable = true;
		this.itemsPerPage = 20;
	},
	
	setupPool: function(container) {
		this.poolWorker = new RtwPool();
		this.poolContainer = jQuery(container);
		this.poolPagination = jQuery("<div id='poolPagination'></div>").appendTo(this.poolContainer);
		this.poolHeader = jQuery("<div id='poolHeader'></div>").appendTo(this.poolContainer);
		this.itemsFound = jQuery("<div id='itemsFound'></div>").appendTo(this.poolPagination);
		this.pageNumbers = jQuery("<div id='pageNumbers'></div>").appendTo(this.poolPagination);
		this.poolResults = jQuery("<div id='poolResults'></div>").appendTo(this.poolContainer);
		this.sortSelect = jQuery("<select id='sortSelect'><option value='-1'>SORT BY</option><option value='logicaldesc'>price: high to low</option><option value='logicalasc'>price: low to high</option></select>").appendTo(this.poolHeader);
		this.brandSelect = jQuery("<select id='brandSelect'><option value='-1'>SHOP BY BRAND</option></select>").appendTo(this.poolHeader);
		// add event handlers..
		var self = this;
		this.sortSelect.change(function() {
			self.sortChanged();
		});
		this.brandSelect.change(function() {
			self.brandChanged();
		});
		this.pageNumbers.delegate("A[pageNum]", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			self.showPage(jQuery(this).attr("pageNum"));
		})
		this.pageNumbers.delegate("A.prevPage", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			var currentPage = jQuery("A[pageNum].selected", self.pageNumbers).attr("pageNum") * 1;
			self.showPage(currentPage - 1);
		})
		this.pageNumbers.delegate("A.nextPage", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			var currentPage = jQuery("A[pageNum].selected", self.pageNumbers).attr("pageNum") * 1;
			self.showPage(currentPage + 1);
		})
	},
	
	loadPool: function(pool) {
		// load the right pool...
		finder.loadingDisplay.start("pool load");
		var self = this;
		setTimeout(function() {
			self.poolWorker.loadPool(pool, jQuery.proxy(self.poolLoaded, self));
		}, 10);
		
	},
	
	poolLoaded: function() {
		this.buildBrandsList();
		this.brandChanged();
		finder.resizePage();
		finder.loadingDisplay.end("pool load");
	},
	
	buildBrandsList: function() {
		var items = this.poolWorker.db.get({});
		var brands = {};
		for (var i = 0; i < items.length; i++){
			if (brands[items[i].pfeed_brand])
				brands[items[i].pfeed_brand]++;
			else 
				brands[items[i].pfeed_brand] = 1;
		}
		var bArray = [];
		for (var i in brands){
			bArray.push(i);
		}
		bArray = bArray.sort();
		var options = "<option value='-1'>SHOP BY BRAND</option>";
		for (var i = 0; i < bArray.length; i++){
			options += "<option value=\"" + bArray[i] + "\">" + bArray[i] + "</option>";
		}
		options += "<option value='-1'>All Brands</option>";
		this.brandSelect.html(options);
	},
	
	setPoolScrollable: function(bool) {
		this.poolScrollable = bool;
	},
	
	setItemsPerPage: function(num) {
		this.itemsPerPage = num;
	},
	
	itemsFiltered: function(filter) {
		if (!filter)
			filter = {};

		this.poolResults.html("");
		var items = this.poolWorker.showFilteredResults("#poolResults", "#productListing", filter);

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

		this.showPage(0);
		if (this.poolScrollable) {
			var scrollNode = this.poolResults[0];
			this.scroller = new TouchScroll(scrollNode, {
				elastic: true
			});
			this.scrollerInited = true;
		}	
	},
	
	updatePagination: function(current) {

		var numPages = (this.pageNumbers.attr("numPages") * 1);

		current = current * 1  + 1;
		
		if (isNaN(current) || current > numPages)
			current = numPages;
	
		var numPagesToShow = 6;
		
		this.pageNumbers.html("<a href='javascript:void(0)' class='prevPage'><img src='" + assetsDirectory + "images/leftarrow.gif' border='0'> Prev</a>");
		
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
		this.pageNumbers.append("<a href='javascript:void(0)' class='nextPage'>Next <img src='" + assetsDirectory + "images/rightarrow.gif' border='0'></a>");
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
		
		jQuery(".productListing:visible", this.poolResults).hide();
		jQuery(".productListing", this.poolResults).slice(pageNum * this.itemsPerPage, pageNum * this.itemsPerPage + this.itemsPerPage).fadeIn();
		
		if (this.poolScrollable && this.scrollerInited)
		{
			this.scroller.scrollTo(0,0);
			//this.scroller.setupScroller();
		}
	},
	
	sortChanged: function() {
		var id = this.sortSelect.val();
		
		var filter = [{pool_insert_id: 'asc'}];
		
		if (id != "-1")
			filter = [{pfeed_priceforfilters: id}];
		
		this.poolWorker.sort(filter);
		
		this.brandChanged();
	},
	
	brandChanged: function() {
		var filter = {};

		var id = this.brandSelect.val();
		if (id  != "-1")
		{
			filter = {pfeed_brand:id};
		}

		this.itemsFiltered(filter);
	}

	
})

