// JavaScript Document
/*
	Finder Page
	*/

var FinderPage = Class.extend({
  init: function(params) {
	
		this.doTransition = true;
		this.params = {};
	
		this.title = params.title;
		this.url = params.url;
		this.navId = params.navId;
		
		if (params.transitionIn)
			this.transitionIn = params.transitionIn;
			
		if (params.transitionOut)
			this.transitionOut = params.transitionOut;
		
		this.pageLoaded = false;
		this.imagesLoaded = false;
		
		this.preLoad = params.preLoad;
		
		if (!params.navHighlight)
			this.navHighlight = params.navId;
		else
			this.navHighlight = params.navHighlight; 
		
		if (!this.preLoad)
			this.preLoad = [];

		this.preloadHandler = new PreloadHandler(jQuery.proxy(this.allImagesLoaded, this), this.preLoad);
		
		this.transitionOutDelay = 500;
		
	},
	load: function(vars){

		this.params = this.parseQueryString(vars);
		if (this.params.argc) {
			this.params.argc = this.params.argc.split("/");
		}
		
		if (!this.pageLoaded) {
			// get the contents...
			finder.loadingDisplay.start("page load");
			this.processPageLoad(finder.getTemplate(this.navId));
			
		}
		else {
			this.allImagesLoaded();
		}
		
	},
	
	doTransitions: function(bool) {
		this.doTransition = bool;
	},
	
	processParams: function() {
		// override me..
        this.parentDiv.trigger({type: "pageUrlChanged", page:this});
	},
	
	bringToFront: function(){
		console.log(".finderPage#" + this.navId);
		console.log(jQuery(".finderPage#" + this.navId, "#pageContainer").show().css({'visibility': 'visible', 'z-index': 150}));

		jQuery("#finderContainer").trigger("pageLoaded");	
		jQuery("#finderContainer").trigger("dataChanged");

	},
	
	sendToBack: function() {
	
		jQuery(".finderPage#" + this.navId, "#pageContainer").css({'visibility': 'hidden', 'z-index': 1}).hide();
	
	},
	
	transitionIn: function() {
		this.bringToFront();
	},
	
	transitionOut: function() {
		var self = this;
		setTimeout(function() {
			self.prepareForNextLoad();
			self.sendToBack();
			}, self.transitionOutDelay);
	},
	
	prepareForNextLoad: function() {
		
	}, 
	
	setup: function() {
		
	},
	
	unload: function(){
		var self = this;
		this.transitionOut();
		
		setTimeout(jQuery.proxy(this.removePage, this), self.transitionOutDelay);
		
	}
}); 



FinderPage.prototype.setParent = function (parent)
{
	this.parent = parent;
}

FinderPage.prototype.allImagesLoaded = function() {
	
	this.processParams();
	
	if (this.doTransition) {
		this.transitionIn();
	} else {
		this.bringToFront();
	}
}

FinderPage.prototype.processPageLoad = function(data, status, xhr) {
	data = data.replace(/randomDirectory\//g, finder.getConfig().assetsDirectory);
	this.pageLoaded = true;
	jQuery("#pageContainer").append(data);
	this.setup();
	this.preloadHandler.start();
	finder.loadingDisplay.end("page load");
}


FinderPage.prototype.removePage = function() {

	this.pageLoaded = false;
	jQuery("#" + this.navId + ".finderPage", "#pageContainer").remove();

}

FinderPage.prototype.parseQueryString = function (q) {
	
	var urlParams = {};
	
    var e,
        a = /\+/g,  // Regex for replacing addition symbol with a space
        r = /([^&=]+)=?([^&]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); }

    while (e = r.exec(q))
       urlParams[d(e[1])] = d(e[2]);
	   
	return urlParams;
}





