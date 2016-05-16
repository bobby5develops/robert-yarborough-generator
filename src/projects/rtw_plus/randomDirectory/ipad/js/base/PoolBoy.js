
/// JavaScript Document

var PoolBoy = Class.extend({
  init: function(parent) {
	
		if (!parent)
			parent = false;
			
		
		this.proxy = false;
		this.parent = parent;
		this.lastPool = "";
		this.loaded = false;	
		this.lastDocument = "";
		
		this.limit = 1000;
		this.offset = 0;
		this.numItems = 0;
		this.skavaFilter = false;
	}
}); 

PoolBoy.prototype.loadPool = function(pool, callback, type) {
	
	if (!type)
		type = "simple";
	
	this.callback = callback;
	

	
	/*
	if (this.lastPool == pool && this.loaded)
	{
		if (this.parent) {
			this.parent.poolContainer.trigger("poolDataLoaded");
		}
		this.callback();
		return;
	}
	*/
	
	// see if its in the cache..
	var cachePool = finder.getPoolCache().getPool(pool);

	if (cachePool) {
		if (cachePool != "") {
			// in load from cache..

			this.processPoolResults(jQuery.parseXML(cachePool));
			return;
		}
	}
	
	this.lastPool = pool;
	this.loaded = false;


	
	var url = pool.replace(/limit=(.*?)&/, "limit=" + this.limit + "&");
	url = url.replace(/offset=(.*?)&/, "offset=" + this.offset + "&");
	
	if (this.skavaFilter) {
		url = url + "&filter=" + escape(JSON.stringify(this.skavaFilter));
	}
	
	//url = "pool.xml";
	
	this.proxy = false;
	if (this.proxy)
		url = "proxy.php?url=" + escape(url);
	
	try {
		var poolBoyObj = this;
		skavaPoolLoadCallback = function(entries)
		{
			poolBoyObj.processPoolResultsJSON(entries);
		}
		url = url + "&callback=skavaPoolLoadCallback";
		getDataFromServer('id_blackfriday_pool', url) ;
	
	} 
	catch (e) {
		console.log("getDataFromServer Error", "using jQuery ajax instead")
	
		jQuery.ajax({
			type: "GET",
			url: url,
			dataType: "jsonp",
			//jsonpCallback: "skavaPoolLoadCallback",
			success: jQuery.proxy(this.processPoolResultsJSON, this)
		}); 

	}

	
}

PoolBoy.prototype.processPoolResults = function(document, status, xhr) {
	this.loaded = true;
	this.lastDocument = document;
	this.db = new TAFFY([]);
	this.parseDocument(document);
	
	// save this pool into the cache..
	try {
		xhr.responseText;
		finder.getPoolCache().updateCache(this.lastPool, xhr.responseText);
	} catch (e) { }
	
	try {
		this.callback();
	} catch(e) {  };
}

PoolBoy.prototype.processPoolResultsJSON = function(document, status, xhr) {
	this.loaded = true;
	this.lastDocument = document;
	this.db = new TAFFY([]);
	
	this.parseDocumentJSON(document);
	
	// save this pool into the cache..
	try {
		xhr.responseText;
		finder.getPoolCache().updateCache(this.lastPool, xhr.responseText);
	} catch (e) { }
	
	try {
		if (this.parent) {
			this.parent.poolContainer.trigger("poolDataLoaded");
		}
	} catch (e) {
		
	}
	
	try {
		this.callback();
	} catch(e) {  };
}

PoolBoy.prototype.parseDocumentJSON = function (document) {
	var db = this.db;
	var counter = 0;
	
	console.log("document from skava", document);
	this.numItems = document.totalEntries[0];

	
	if (!document.entries) {
		document.entries = [];
		document.entryStat = [];
	}
	
	var helper = new PoolHelper();
	
	for (var i =0; i < document.entries.length; i++) {
		
		me = document.entries[i];

		var entry=me.properties;
		
		entry.entryid = me.entryId;
		entry.label = me.title;
		entry.description = me.comment;
		entry.image_fullImage = me.fileUrl;
		entry.itemUrl = me.itemUrlyeah;
		//entry.voteCount = me.find("votecount").text();
		//entry.ranking = me.find("rankingd").text();
		
		// get the votes..
		try {
			entry.votes = 0;
			entry.votes = document.entryStats[i].numLikes;
		} catch (e) {
			// do nothing...
		}
		
		entry.pfeed_priceforfilters = 1 * entry.pfeed_priceforfilters;
		
		
		entry.swatches = [];
		try {
			var colors = jQuery.parseJSON(entry.pfeed_colorimage);
			for (j in colors) {
				if (colors[j][0] != "") {
					var swatch = {};
					swatch.title = j;
					swatch.swatchImage = colors[j][0];
					if (colors[j][1])
						swatch.productImage = colors[j][1].replace(/wid=(.*?)&/gi, "wid=%width%&").replace(/hei=(.*?)&/gi, "&");
					else 
						swatch.productImage = "";
					entry.swatches.push(swatch);
				}
			}
			
		} catch(e) {
			
		}
		
		entry.promotions = [];
		try {
			entry.promotions = jQuery.parseJSON(entry.pfeed_promotions);
			entry.promotionsText = entry.promotions.join(", ");
			entry.hasPromotions = entry.promotions.length > 0;
		} catch(e) {
			
		}
		
		if (entry.pfeed_shopcategory && !(entry.pfeed_shopcategory instanceof Array))
			entry.pfeed_shopcategory = entry.pfeed_shopcategory.split(",");
			
		if (entry.pfeed_productgroup && !(entry.pfeed_productgroup instanceof Array))
			entry.pfeed_productgroup = entry.pfeed_productgroup.split(",");
		
		helper.parseEntry(entry);
		
		
		
		entry.pool_insert_id = counter;
		db.insert(entry);
		
		counter++;
				
	}
}

PoolBoy.prototype.setLimit = function(limit) {
	this.limit = limit
}

PoolBoy.prototype.setOffset = function(offset) {
	this.offset = offset
}

PoolBoy.prototype.setSkavaFilter = function(filter) {
	this.skavaFilter = filter
}


PoolBoy.prototype.parseDocument = function (document) {
	var db = this.db;
	var counter = 0;
	jQuery(document).find("entry").each(function() {
		var entry = {};
		me = jQuery(this);
		
		entry.entryid = me.find("entryid").text();
		entry.label = me.find("label").text();
		entry.description = me.find("description").text();
		entry.image_fullImage = me.find("imageurl").text();
		entry.itemUrl = me.find("itemUrl").text();
		entry.voteCount = me.find("votecount").text();
		entry.ranking = me.find("rankingd").text();
		
		me.find("prop").each (function() {
			var name = jQuery(this).attr("name");
			var value = jQuery(this).text();
			switch (name) {
				case "pfeed_availability":
				case "pfeed_brand":
				case "pfeed_bvavgrating":
				case "pfeed_bvnumreviews":
				case "pfeed_bvtoprated":
				case "pfeed_id":
				case "pfeed_imageurl":
				case "pfeed_longdescription":
				case "pfeed_specialsize":
				case "pfeed_shopcategory":
				case "pfeed_name":
				case "pfeed_price1":
				case "pfeed_price2":
				case "pfeed_price3":
				case "pfeed_priceforfilters":
				case "pfeed_saleprice":
				case "pfeed_retailprice":
				case "pfeed_shortdescription":
				case "pfeed_bvavgrating":
				case "pfeed_newarrival":
				case "promogroup":
				case "pfeed_look":
				case "pfeed_customtitle":
				case "pfeed_customdescription1":
				case "pfeed_display":
					entry[name] = value;
					break;
					
				case "pfeed_bvcomments":
				case "pfeed_bvcommentstitle":
					entry[name] = value.split("%,%").reverse();
					try {
						if (entry[name][0].trim == "")
							array_shift(entry[name]);
					} catch(e) { }
					break;
					
				default:
					entry[name] = value.split(",");
					break;
			}
		})
		
		entry.pfeed_priceforfilters = 1 * entry.pfeed_priceforfilters;
		
		entry.pool_insert_id = counter;
		db.insert(entry);

		counter++;
				
	});
}

PoolBoy.prototype.showFilteredResults = function (divToUpdate, templateName, filter)
{
	var items = false;
	

		for (i = 0; i < filter.length; i++) {
			
			if (!items) {
				if (filter[i].length == 0)
					items = this.db();
				else 
					items = this.db(filter[i]);
				
			}
			else {
				if (filter[i].length > 0)
					items = items.filter(filter[i]);
			}
		}
		
		if (filter.length > 0)
			items = items.get();
		else 
			items = this.db().get();
			

	try {
		jQuery(templateName).tmpl(items).appendTo(divToUpdate);
		jQuery(divToUpdate).append("<div style='clear: both;'></div>");
		
		
		jQuery("#finderContainer").trigger("poolLoaded");	
		jQuery(finder.getCurrentPage().parentDiv).trigger("poolLoaded");
		jQuery("#finderContainer").trigger("dataChanged");		
	} 
	catch (e) {
		
	}
	return items;
}

PoolBoy.prototype.getFilteredResults = function (filter)
{
	var items = false;
	

		for (i = 0; i < filter.length; i++) {
			
			if (!items) {
				if (filter[i].length == 0)
					items = this.db();
				else 
					items = this.db(filter[i]);
				
			}
			else {
				if (filter[i].length > 0)
					items = items.filter(filter[i]);
			}
		}
		
		if (filter.length > 0)
			items = items;
		else 
			items = this.db();
			

	return items;
}

PoolBoy.prototype.sort = function (filter) {

	this.db.sort(filter);
}



var PoolCache = Class.extend({
  init: function() {
	
		this.available = true;
		if (!shouldCache || !window['localStorage']) {
			this.available = false;
			return;
		}
		
		this.storage = window['localStorage'];
		
		this.cacheLength = 10; //minutes;
	
	},
	
	updateCache: function(name, pool) {
		if (!this.available)
			return false;
			
		
		this.storage.setItem("TIMESTAMP_" + name, new Date().getTime());

		
		this.storage.setItem("POOL_" + name, pool);
	},
	
	getPool: function(name) {
		
		
		if (!this.available)
			return false;
		
		var timestamp = this.storage.getItem("TIMESTAMP_" + name);

		
		
		if (!timestamp)
			return false;
			
			
			
		timestamp = timestamp * 1;
			

			
		if (timestamp < (new Date().getTime()) - this.cacheLength * 60 * 60 * 1000) {
			// too old..
			// try to remove this pool from the cache..
			this.storage.removeItem("POOL_" + pool);
			this.storage.removeItem("TIMESTAMP_" + pool);
			return false;
		}
		
		
		
		var pool = this.storage.getItem("POOL_" + name);
		if (pool != null) {
			console.log("pool found");
			return pool;
		} else { 
			console.log("pool was null");
			return false;
		}
	}
});


