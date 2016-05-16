
var MacysFinder = Class.extend({
  init: function() {
		this.pages = {};
		this.currentPage = false;

		this.loadingDisplay = new LoadingDisplay();
		this.poolCache = new PoolCache();

		this.setupURLHandling();

		jQuery.ajaxSetup( {
			cache: false
		});

		this.templates = {};

		this.skava = new SkavaInterop();
	},

	setTemplates: function(templates) {
		this.templates = templates;
	},

	getTemplate: function(id) {
		return this.templates[id];
	},

	isTablet: function() {
		return Modernizr.touch || navigator.userAgent.match(/iPad/i) != null;
	},

	shouldResizeAndScroll: function() {

	/*
		// change change the document.domain if we are using an iframe for history management.


	    // Does the browser support window.onhashchange? Note that IE8 running in
	    // IE7 compatibility mode reports true for 'onhashchange' in window, even
	    // though the event isn't supported, so also test document.documentMode.
	    var doc_mode = document.documentMode,
	    supports_onhashchange = 'on' + str_hashchange in window && ( doc_mode === undefined || doc_mode > 7 );

		console.log("Native History Support", supports_onhashchange);

		return supports_onhashchange;
	*/

        return Modernizr.hashchange;

	},

	resizePage: function() {
        console.log(' attempting resizePage() ');
		if (!this.shouldResizeAndScroll()) {
            console.log('cannot resizePage()');
			return;
        }

        var height = 0;

        if(null != jQuery("#footerContainer #poolResults").height()) {
            height = jQuery("#finderContainer").height() + jQuery("#footerContainer #poolResults").height();
        }else{
            height = jQuery("#finderContainer").height();
        }
        //console.log('height   ', height);
		try {
			//var currentDomain = document.domain;

			if (window.location.host.indexOf("atfingertips.com") > -1)
				document.domain = "atfingertips.com";
			else
				document.domain = "macys.com";

			$(parent.document.getElementById("social")).css({'height': height + "px"});
			console.log("resized to", height);
			//document.domain = currentDomain;
		} catch (e) {
			console.error("Could not resize page", e);
		}
	},

	scrollPage: function(whereTo) {

		if (!this.shouldResizeAndScroll())
			return;

		var top = 131; //macys header..

		switch (whereTo) {
			case "top":
				top += 0;
				break;

			case "pool":
				var adder = jQuery(".poolHeaderRow", finder.getCurrentPage().parentDiv).offset().top;
				top += adder;
				break;
		}

		try {
			if (window.location.host.indexOf("atfingertips.com") > -1)
				document.domain = "atfingertips.com";
			else
				document.domain = "macys.com";

			//parent.window.scroll(0, top);
			jQuery("HTML,BODY", jQuery(parent.window.document)).animate({scrollTop: top});
			console.log("page scrolled to", top, whereTo, parent, parent.window);
		} catch(e) {
			console.log("Could not scroll page");
		}

	},

	loadPage: function(pageId, query) {

		// see if this is the current page...
		if (this.currentPage && pageId == this.currentPage.navId)
		{

			this.currentPage.load(query);
			finder.pageChanged(this.currentPage);
			return;
		}

		var self = this;


		if (this.currentPage)
			this.currentPage.unload();



		this.loadingDisplay.reset();

		if (!query)
			query = "";



		if (!this.currentPage) {
			this.currentPage = {}
		}



		if (!this.currentPage.transitionOutDelay) {
			this.currentPage.transitionOutDelay = 500;
		}


		jQuery("A.selected").removeClass("selected");

		// is this an alias?
		if (finder.getConfig().aliases[pageId]) {
			var alias = pageId = finder.getConfig().aliases[pageId];
			pageId = alias.page;
			query = "argc=" + alias.query;
		}

		page = this.pages[pageId];
		setTimeout(function(){
            page.load(query);
            finder.pageChanged(page);
        }, this.currentPage.transitionOutDelay + 100);

		//jQuery("A[finderPage=" + page.navHighlight+"]").addClass("selected");


		this.currentPage = page;

	}
});

MacysFinder.prototype.getPoolCache = function() {
	return this.poolCache;
}

MacysFinder.prototype.setupURLHandling = function(){

	var self = this;
	$(window).hashchange( function() {
		self.manageState(location.hash.substring(1));
	})
}

MacysFinder.prototype.manageState = function(state) {
	// parse state...

	console.log(state);

	//console.log(state);

	try {
		closeSharePopup(null, 0);
	} catch(e) { }

	try {
		closePopup();
	} catch(e) { }




	if (state == "")
		state = "/" + this.defaultPage;

	var saveState = state;

	if (state.substring(0,1) == "/")
		state = state.substring(1);

	if (state.indexOf("?") > 0)
	{
		state = state.split("?");
		this.loadPage(state[0], state[1]);
	} else {

		if (state.lastIndexOf("/") > 0)
		{
			state = state.split("/");
			var page = state.shift();;
			var params = "argc=" + state.join("/");
			this.loadPage(page, params);
			return;
		}

		this.loadPage(state);
	}
}


MacysFinder.prototype.startFinder = function()
{
	// parse the url..


	if (window.location.hash == "")
	{
		finder.loadPage(this.defaultPage);
	} else {
		finder.manageState(location.hash.substring(1));
	}

}

MacysFinder.prototype.pageChanged = function() {

}

MacysFinder.prototype.getCurrentPage = function() {
	return this.currentPage;
}

MacysFinder.prototype.addPage = function (page) {
	page.setParent(this);
	this.pages[page.navId] = (page);
}



// JavaScript Document
// PreloadHandler

var PreloadImage = Class.extend({
  init: function(parent, imgsrc) {

		this.handler = parent;
		this.loaded = false;
		this.imgsrc = imgsrc;

		if (this.imgsrc.substring(0,7) != "http://")
			this.imgsrc = finder.getConfig().assetsDirectory + this.imgsrc;

		var pImage = this;

		this.img = new Image();


		jQuery(this.img).bind('load', function(){
			pImage.itemLoaded();
		});

		console.log("preloadimage: " + this.imgsrc);

		this.img.src = this.imgsrc;
	}
});


PreloadImage.prototype.itemLoaded = function() {
	this.loaded = true;
	this.handler.itemLoaded();
}

var PreloadHandler = Class.extend({
  init: function(callback, images) {

		this.callback = callback;
		this.images = images;
		this.preloadItems = [];
		this.isDone = false;
	}
});

PreloadHandler.prototype.start = function()
{
	if (!this.images || this.images.length == 0)
	{
		this.callback();
		return;
	}
	finder.loadingDisplay.start("image preload");
	var myself = this;
	for (var i = 0; i < this.images.length; i++)
	{
		this.preloadItems.push(new PreloadImage(this, this.images[i]));
	}

	this.images = null;
}

PreloadHandler.prototype.itemLoaded = function() {
	if (!this.isDone && this.checkForFullLoad())
	{
		//try {
			finder.loadingDisplay.end("image preload");
			this.isDone = true;
			this.callback();
		//} catch(e) { alert("itemLoaded: " + e.message);}
	} else {

	}

}


PreloadHandler.prototype.checkForFullLoad = function() {
	for (var i = 0; i < this.preloadItems.length; i++)
	{
		if (!this.preloadItems[i].loaded)
			return false;
	}
	return true;
}


var LoadingDisplay = Class.extend({
  init: function() {

		this.div = jQuery("#bodyContainer>DIV.loading");
		this.counter = 0;

	}
});

LoadingDisplay.prototype.getDiv = function() {
	return jQuery("#bodyContainer>DIV.loading");
}

LoadingDisplay.prototype.start = function(desc) {
	this.counter++;
	this.div = jQuery("#bodyContainer>DIV.loading");
	this.div.stop().show();
	console.log("start: " + desc);
}

LoadingDisplay.prototype.end = function (desc) {
	this.counter--;

	if (this.counter <= 0)
	{

		this.counter = 0;
		this.div.fadeOut();
	}
	console.log("end: " + desc);
}


LoadingDisplay.prototype.reset = function() {
	this.counter = 0;
}

