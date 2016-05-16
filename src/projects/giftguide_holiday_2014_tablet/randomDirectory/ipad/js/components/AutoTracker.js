//cms
function AutoTracker(settings){
	var self = this;
	this.logging = true;
	this.log = [];
	
	self.settings = {prefix:'ca-so-', defaultPage:'home', site:'lenoxsweeps', ignoreKeys:[], ignoreNumbers:true};
	$.extend(self.settings,settings);
	
	this.init = function(){
		$.each(self.settings.ignoreKeys, function(i,e){self.settings.ignoreKeys[i] = self.settings.ignoreKeys[i].toLowerCase()});
		self.parent = $('#finderContainer');
		self.parent.on('click','[track]',self.handleClickTracker);
		self.parent.on('change','select[track]',self.handleClickTracker);
		self.parent.on('click','a:not([track])',self.handleClickLink);
		self.parent.on('pageUrlChanged',self.handlePageChanged);
		self.tracker_base = finder.getConfig().tracking.base;
	}
	
	this.track = function(pageid, catid){
		pageid = self.replaceConstants(pageid);
		catid = self.replaceConstants(catid);
		pageid = pageid.replace('..','.');
		catid = catid.replace('..','.');
		while(pageid.slice(-1)=='.') pageid=pageid.slice(0,-1);
		while(catid.slice(-1)=='.') catid=catid.slice(0,-1);
		catid = catid.replace(/\./g,'-');
		
		self.insertLog(pageid, catid);
		
		try {
			registerPageViewEx(pageid, catid);
		} catch (err) {
			console.log('AutoTracker.track("'+pageid+'","'+catid+'")');
		}
	}
	
	this.pageBase = function(){
		var p = location.hash.slice(1);
		p = p.split('?')[0];
		var keys = p.replace(/^\/|\/$/g, '').split('/');
		if(keys.length>0){
			var path = [];
			for(var i=0; i<keys.length; i++){
				if($.inArray(keys[i],self.ignoreKeys)==-1){// && (self.settings.ignoreNumbers && isNaN(keys[i]))){
					path.push(keys[i]);
				}
			}
			var result = self.filterIgnored(path).join('.').toLowerCase();
			return result=='' ? self.settings.defaultPage : result;
		}
		return 'hp';
	}
	
	this.siteBase = function(){
		return self.settings.prefix+self.settings.site;
	}
	
	this.replaceConstants = function(str,eventType){
		var tags = [];
		var keys = str.split('.');
		for(var i=0; i<keys.length; i++){
			switch(keys[i]){
				case '%PAGE%' :
					tags.push(self.pageBase());
					break;
				case '%SITE%' :
					tags.push(self.siteBase());
					if(eventType=='click'){
						tags.push('click');
					}
					break;
				default :
					tags.push(keys[i]);
			}
		}
		return tags.join('.');
	}
	
	this.handleClickLink = function(evt){
		var href = $(this).attr('href');
		if(href.indexOf('http')==0){
			href = href.split('//')[1];
			var folders = href.split('/');
			var parts = folders[0].split('.');
			var path = [];
			path.push(parts[1] ? parts[1] : parts[0]);
			path.push(folders[1] ? folders[1] : '');
			$(this).attr('track',path.join(''));
			self.handleClickTrackerProxy(this);
			//self.trigger('click');
		}
	}
	
	this.handleClickTrackerProxy = function(_this){
		//console.log('handleClickTracker',evt.target);
		var tags = [];
		
		$(_this).parents('[trackKey]').each(function(i,e){
			if($.inArray($(e).attr('trackKey'),tags)==-1){
				tags.push($(e).attr('trackKey'));
			}
		});
		tags = self.filterIgnored(tags);
		
		var tracker_tag = $(_this).attr('track');
		var pageid = self.siteBase() + '.click.' + self.pageBase() + '.' + tags.join('.') + '.' + tracker_tag;
		var catid = self.siteBase() + '.click.' + self.pageBase() + '.' + tags.join('.');
		
		if(tracker_tag.indexOf('{')>-1){
			// this is json data
			try {
				var d = $.parseJSON(tracker_tag);
				
				if(d.pageid){
					pageid = self.replaceConstants(d.pageid,'click');
				}
				if(d.catid){
					catid = self.replaceConstants(d.catid,'click');
				}
			} catch(err) {
				console.error("Can't process JSON auto tracker:",tracker_tag);
			}
		}
		self.track(pageid,catid);
	}
	
	this.handleClickTracker = function(evt){
		//evt.stopPropagation();
		self.handleClickTrackerProxy(this);
	}
	
	this.handlePageChanged = function(){
		var cms_page = finder.getCurrentPage()//CMSTools.getCurrentCMSPage();
//		if(cms_page && cms_page.tracking){
//			//
//			// use tracker specified in CMS page if found
//			//
//			var tracker_tag = cms_page.tracking;
//			if(tracker_tag.indexOf('{')>-1){
//				try {
//					var d = $.parseJSON(tracker_tag);
//
//					if(d.pageid){
//						pageid = self.replaceConstants(d.pageid,'click');
//					}
//					if(d.catid){
//						catid = self.replaceConstants(d.catid,'click');
//					}
//					self.track(pageid,catid);
//				} catch(err) {
//					console.error("Can't process JSON auto tracker:",tracker_tag);
//				}
//			}
//		} else {
			//
			// contruct tracker based on hash
			//
			var tracker_page = '';
			var p = finder.getCurrentPage();
			if(p.params.argc){
				var tracker_page = self.filterIgnored(p.params.argc).join('.').toLowerCase();
			}
			var pagebase = self.pageBase();
			var pageid = self.siteBase() + '.page.' + pagebase + (pagebase.indexOf('.')==-1 ? '.lp' : '');
			var catid = pageid.split('.').slice(0,-1).join('.');
			self.track(pageid,catid);
//		}
	}
	
	this.filterIgnored = function(arr){
		var result = [];
		for(var i=0; i<arr.length; i++){
			if($.inArray(arr[i].toLowerCase(),self.settings.ignoreKeys)==-1){
				result.push(arr[i].toLowerCase());
			}
		}
		return result;
	}
	//
	// LOGGING CLICKS FOR EXPORT
	//
	this.startLog = function(){
		self.logging = true;
		self.log = [];
	}
	this.insertLog = function(pageid, catid){
		if(self.logging){
			self.log.push('siteid,'+catid+',description,'+pageid);
			/*
			var b = self.siteBase();
			var p = pageid.split('.');
			var c = catid.split('.');
			var pi = p.length;
			var ci = c.length;
			
			while(pi>0 && ci>0){
				var cs = c.slice(0,ci).join('.');
				var ps = p.slice(0,pi).join('.');
				var str = 'siteid,'+cs+',description,'+ps;
				if($.inArray(str,self.log)==-1){
					self.log.push(str);
				}
				ci--;
				pi--;
			}
			*/
		}
	}
	this.printLog = function(){
		self.log.sort();
		console.log(self.log.join('\n'));
	}
	
	this.init();
}