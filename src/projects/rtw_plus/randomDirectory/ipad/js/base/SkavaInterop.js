
function sharePopupCloseCallback() {
	jQuery("#finderContainer").trigger("popupsClosed");
}

var SkavaInterop = Class.extend({



    init: function(){
    
		var self = this;
	
		this.votedItems = [];
    	this.wishList = new SkavaInteropWishList();
		this.internationalPricing = new SkavaInteropInternationalPricing();
		
		this.initializeWidgets("BODY");
		
		// setup event listeners...
		jQuery('[role="skavaInteropShare"]').live({
			click: function(event) {
				event.preventDefault();
				if(jQuery(this).attr("config")=="currentPage"){
					self.share($.extend({},finder.getConfig().sharing['site'],{url:webRoot+'/'+finder.getCurrentPage().navId}));
				}else{
					var thistrend = jQuery(this).attr("trend");
					var trendshare = {};
					trendshare.facebook = {};
					trendshare.mailerIds = {};
						trendshare.mailerIds.staging = 647;
						trendshare.mailerIds.production = 593;
						trendshare.facebook.title = jQuery(this).siblings("h4").text();
						trendshare.facebook.description = jQuery(this).siblings("p").text();
						trendshare.twitter = jQuery(this).siblings("h4").text()+' '+jQuery(this).siblings("p").text();
						trendshare.url = finder.getConfig().sharing.site.url+'/'+thistrend;
						trendshare.icon = jQuery(this).siblings("a.minusSharePin").attr("pinicon");
					try{
						self.share(trendshare);
					}catch(e){
						console.log('did not share', e);
					}
				}
			}
		});
		
		
		jQuery('[role="skavaInteropSharePinterest"]').live({
			click: function(event) {
				event.preventDefault();
				if(jQuery(this).attr("config")=="currentPage"){
					try{
						sharePinterest(null, finder.getConfig().sharing.site.twitter, finder.getConfig().sharing.site.icon, finder.getConfig().sharing.site.url,  "width=700, height=500", true);
					}catch(e){
						console.log('did not share', e);
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['pinterest']);
				}else if(jQuery(this).attr("config")=="accessories"){
					var thistrend = jQuery(this).attr("trend");
					var trendshare = {};
					trendshare.facebook = {};
						trendshare.facebook.title = finder.getConfig().pageData.accessories.share[thistrend].title;
						trendshare.facebook.description = finder.getConfig().pageData.accessories.share[thistrend].desc;
						trendshare.twitter = finder.getConfig().pageData.accessories.share[thistrend].title+' '+finder.getConfig().pageData.accessories.share[thistrend].desc;
						trendshare.url = finder.getConfig().sharing.site.url+'/'+thistrend;
						trendshare.icon = assetsDirectory+'images/pinicons/'+thistrend+'.jpg';
					try{
						sharePinterest(null, trendshare.twitter, trendshare.icon, trendshare.url,  "width=700, height=500", true);
					}catch(e){
						console.log('did not share', e);
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['pinterest']);
				}else if(jQuery(this).attr("config")=="section"){
					var thistrend = jQuery(this).attr("trend");
					var trendshare = {};
					trendshare.facebook = {};
						trendshare.facebook.title = finder.getConfig().pageData[thistrend].share.title;
						trendshare.facebook.description = finder.getConfig().pageData[thistrend].share.desc;
						trendshare.twitter = finder.getConfig().pageData[thistrend].share.title+' '+finder.getConfig().pageData[thistrend].share.desc;
						trendshare.url = finder.getConfig().sharing.site.url+'/'+thistrend;
						trendshare.icon = finder.getConfig().pageData[thistrend].share.icon;
					try{
						sharePinterest(null, trendshare.twitter, trendshare.icon, trendshare.url,  "width=700, height=500", true);
					}catch(e){
						console.log('did not share', e);
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['pinterest']);
				}else if(jQuery(this).attr("config")=="trend"){
					var thistrend = jQuery(this).attr("trend");
					var trendshare = {};
					trendshare.facebook = {};
						trendshare.facebook.title = finder.getConfig().pageData[thistrend].share.title;
						trendshare.facebook.description = finder.getConfig().pageData[thistrend].share.desc;
						trendshare.twitter = jQuery(this).siblings("h4").text()+' '+jQuery(this).siblings("p").text();
						trendshare.url = finder.getConfig().sharing.site.url+'/'+thistrend;
						trendshare.icon = jQuery(this).attr("pinicon");
					try{
						sharePinterest(null, trendshare.twitter, trendshare.icon, trendshare.url,  "width=700, height=500", true);
					}catch(e){
						console.log('did not share', e);
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['pinterest']);
				}
			}
		});
		
		
		jQuery('[role="skavaInteropShareTwitter"]').live({
			click: function(event) {
				event.preventDefault();
				if(jQuery(this).attr("config")=="currentPage"){
					try{
						shareTwitterV2(null, finder.getConfig().sharing.site.twitter, finder.getConfig().sharing.site.twitter, finder.getConfig().sharing.site.icon, finder.getConfig().sharing.site.url);
					}catch(e){
						console.log('did not share', e);
						console.log(finder.getConfig().sharing.site)
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['twitter']);
				}else if(jQuery(this).attr("config")=="trend"){
					var thistrend = jQuery(this).attr("trend");
					var trendshare = {};
					trendshare.facebook = {};
						trendshare.facebook.title = finder.getConfig().pageData[thistrend].share.title;
						trendshare.facebook.description = finder.getConfig().pageData[thistrend].share.desc;
						trendshare.twitter = finder.getConfig().pageData[thistrend].share.title+' '+finder.getConfig().pageData[thistrend].share.desc;
						trendshare.url = finder.getConfig().sharing.site.url+'/'+thistrend;
						trendshare.icon = finder.getConfig().pageData[thistrend].share.icon;
					try{
						shareTwitterV2(null, trendshare.twitter, trendshare.twitter, trendshare.icon, trendshare.url);
					}catch(e){
						console.log('did not share', e);
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['twitter']);
				}else if(jQuery(this).attr("config")=="accessories"){
					var thistrend = jQuery(this).attr("trend");
					var trendshare = {};
					trendshare.facebook = {};
						trendshare.facebook.title = finder.getConfig().pageData.accessories.share[thistrend].title;
						trendshare.facebook.description = finder.getConfig().pageData.accessories.share[thistrend].desc;
						trendshare.twitter = finder.getConfig().pageData.accessories.share[thistrend].title+' '+finder.getConfig().pageData.accessories.share[thistrend].desc;
						trendshare.url = finder.getConfig().sharing.site.url+'/'+thistrend;
						trendshare.icon = assetsDirectory+'images/pinicons/'+thistrend+'.jpg';
					try{
						shareTwitterV2(null, trendshare.twitter, trendshare.twitter, trendshare.icon, trendshare.url);
					}catch(e){
						console.log('did not share', e);
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['twitter']);
				}
			}
		});
		
		
		jQuery('[role="skavaInteropShareFacebook"]').live({
			click: function(event) {
				event.preventDefault();
				if(jQuery(this).attr("config")=="currentPage"){
					try{
						shareFb(null, finder.getConfig().sharing.site.facebook.title, finder.getConfig().sharing.site.facebook.description, finder.getConfig().sharing.site.icon, finder.getConfig().sharing.site.url, true, true);
					}catch(e){
						console.log('did not share', e);
						console.log(finder.getConfig().sharing.site)
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['facebook']);
				}else if (jQuery(this).attr("config")=="trend"){
						var thistrend = jQuery(this).attr("trend");
						var trendshare = {};
						trendshare.facebook = {};
							trendshare.facebook.title = finder.getConfig().pageData[thistrend].share.title;
							trendshare.facebook.description = finder.getConfig().pageData[thistrend].share.desc;
							trendshare.twitter = finder.getConfig().pageData[thistrend].share.title+' '+finder.getConfig().pageData[thistrend].share.desc;
							trendshare.url = finder.getConfig().sharing.site.url+'/'+thistrend;
							trendshare.icon = finder.getConfig().pageData[thistrend].share.icon;
						try{
							shareFb(null, trendshare.facebook.title, trendshare.facebook.description, trendshare.icon, trendshare.url, true, true);
						}catch(e){
							console.log('did not share', e);
						}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['facebook']);
				}else if (jQuery(this).attr("config")=="accessories"){
					var thistrend = jQuery(this).attr("trend");
					var trendshare = {};
					trendshare.facebook = {};
						trendshare.facebook.title = finder.getConfig().pageData.accessories.share[thistrend].title;
						trendshare.facebook.description = finder.getConfig().pageData.accessories.share[thistrend].desc;
						trendshare.twitter = finder.getConfig().pageData.accessories.share[thistrend].title+' '+finder.getConfig().pageData.accessories.share[thistrend].desc;
						trendshare.url = finder.getConfig().sharing.site.url+'/'+thistrend;
						trendshare.icon = assetsDirectory+'images/pinicons/'+thistrend+'.jpg';
					try{
						shareFb(null, trendshare.facebook.title, trendshare.facebook.description, trendshare.icon, trendshare.url, true, true);
					}catch(e){
						console.log('did not share', e);
					}
					finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().clicktracking['facebook']);
				}
			}
		});
		
		jQuery('[role="skavaInteropComment"]').live({
			click: function(event) {
				event.preventDefault();
				self.comment({});
			}
		});
		
		jQuery('[role="skavaInteropQuickView"]').live({
			click: function(event) {
				event.preventDefault();
				self.quickView({
					productId: jQuery(this).attr("productId")
				});
				
			}
		});
		
		jQuery('[role="skavaInteropPageTracking"]').live({
			click: function(event) {
				var tracking = jQuery(this).attr("tracking");
				tracking = tracking.split(",");
				var obj = {
					pageid: tracking[0],
					catid: tracking[1]
				}
		
				self.handleTracking(finder.getCurrentPage(), obj);
			}
		})
		
		jQuery('[role="skavaInteropVote"]').live({
			click: function(event) {
				event.preventDefault();
				event.stopPropagation();
				console.log('finder.votedOnProducts', finder.votedOnProducts)
				var item = jQuery(this).parents("[entryId]");
				if( $.inArray(parseInt(item.attr('entryId')), finder.votedOnProducts ) == -1 ){
					if (item.hasClass("voted") || finder.skava.beenVotedOn(item.attr("entryId")))
						return;
					else
						item.addClass("voted"); 
						var params = {
							entryId: item.attr("entryId"),
							onSuccess: function(retval1, retval2, code, message){
								console.log("voting success", retval1, retval2, code, message)
								var newMessage;
								var numVotes = 1 * retval1;
								if (numVotes == 1) {
									newMessage = "1 LOVES THIS";
								} else {
									newMessage = numVotes + " LOVE THIS";
								}
								try {
									var db = finder.getCurrentPage().productPool.poolWorker.db({entryid: 1 * item.attr("entryId")});
									console.log("vote update", db, retval1, item.attr("entryId"));
									db.update({
										'votes': 1 * retval1,
										'voteCount': 1 * retval1
									});
									console.log("vote updated", db, retval1,  1 * item.attr("entryId"));
								} catch(e) {
									console.log("Couldn't update vote count in DB");
								}
								jQuery(".voteCount", item).html(newMessage);
								item.addClass("voted");
								finder.getCurrentPage().parentDiv.trigger({type: "skavaVote", votes: numVotes, entryId: item.attr("entryId"), productId: item.attr("productId")});
							},
							onCancel: function(){
							},
							onFailure: function(){
							}
						}
						self.vote(params);
				}else{
					console.log('Already voted on this.')
				}
			}
		})
    },
	
	beenVotedOn: function(entryId) {
		return jQuery.inArray(entryId, this.votedItems) > -1;
	},
		/*
		jQuery('[role="skavaInteropVote"]').live({
			click: function(event) {
				event.preventDefault();
				event.stopPropagation();
				var item = jQuery(this).parents(".productListing");
				
				if (item.hasClass("voted"))
					return;
				else
					item.addClass("voted"); 
				
                var params = {
                
                    entryId: item.attr("entryId"),
                    onSuccess: function(retval1, retval2, code, message){
                        console.log("voting success", retval1, retval2, code, message)
						
						var newMessage;
						
						var numVotes = 1 * retval1;
						
						if (numVotes == 1) {
							newMessage = "1 LOVES THIS &middot;";
						} else {
							newMessage = numVotes + " LOVE THIS &middot;";
						}
						
						finder.skava.votedItems.push(item.attr("productId"));
						
						try {
							var db = finder.getCurrentPage().productPool.poolWorker.db;
							console.log("vote update", db, retval1, item.attr("entryId"));
							db.update({
								'votes': 1 * retval1,
								'voteCount': 1 * retval1
							}, {
								'entryid': 1 * item.attr("entryId")
								});
							console.log("vote updated", db, retval1,  1 * item.attr("entryId"));
						} catch(e) {
							console.log("Couldn't update vote count in DB");
						}
						
						jQuery(".voteCount", item).html(newMessage);
						item.addClass("voted");
						
                    },
                    onCancel: function(){
                    },
					onFailure: function(){
                    }
                
                }
				
				self.vote(params);
				
			}
		})
		
    
    },
		*/
	
	beenVotedOn: function(productId) {
		return jQuery.inArray(productId, this.votedItems) > -1;
	},
	
	initializeWidgets: function(container) {
	
		var self = this;
		jQuery('[role="skavaInteropLike"]', container).each(function() {
			self.showFBLikeFrame( {
				containerId: jQuery(this).attr("id"),
				url: finder.getConfig().webRoot + jQuery(this).attr("url")
			});
		});
		
		jQuery('[role="skavaInteropWallWidget"]', container).each(function() {
			
			self.showFBWallWidget( {
				containerId: jQuery(this).attr("id"),
				url: jQuery(this).attr("url")
			});
		});
		
		jQuery('[role="skavaInteropWallFeed"]', container).each(function() {
			showWallFeed('wallfeed', 0, 0, 0, 0, 10, jQuery(this)[0])
		});
		
		jQuery('[role="skavaInteropFBTopRatedHorizontal"]', container).each(function() {
			try {
				showFbTopList(jQuery(this).attr("id"));
			} catch(e) {
				
			}
		});
		
		jQuery('[role="skavaInteropFBTopRatedVertical"]', container).each(function() {
			try {
				showFbTopList(jQuery(this).attr("id"), true);
			} catch(e) {
				
			}
		});  
	},
	
	handleTracking: function(page, vars) {
		
		try {
			(function() {
				
				var pageid = vars.pageid;
				var catid = vars.catid;
				
				 if (finder.isTablet()) {
					pageid = vars.pageid.replace("ca-so", "ca-so-ipad")
					catid = vars.catid.replace("ca-so", "ca-so-ipad")
				}
				/**/
				
				console.warn("Tracking: ", pageid, catid);
				registerPageViewEx(pageid, catid);
				
			})();
		} catch(e) {
			console.log(e.message);
		}
		
	},
	
	handleTrackingElement: function(page, vars) {
		
		try {
			(function() {
				console.warn("Element Tracking: ", vars.elementid);
				registerPageViewEx(vars.pageid, vars.catid);
				
			})();
		} catch(e) {
			console.log(e.message);
		}
		
	},
    
    
    share: function(params){
    
        var defaultParams = {
            mailerIds: {
                staging: 123,
                production: 123
            },
            url: "http://www.macys.com",
            icon: "http://www.macys.com/logo.jpg",
            facebook: {
                title: "This is the facebook Title",
                description: "This is the facebook description"
            },
            twitter: "this is the tweet",
			position: finder.getConfig().sharing.popupPosition
        };
        
        jQuery.extend(true, defaultParams, params);
        
        console.log(defaultParams);
        var mailerId = defaultParams.mailerIds.staging;
        if (isProduction) 
            mailerId = defaultParams.mailerIds.production;   
        
        try {
            showSharePopup(null, defaultParams.facebook.title, defaultParams.facebook.description, defaultParams.icon, defaultParams.url, mailerId, null, null, 180, null, defaultParams.twitter, defaultParams.position)
			jQuery("#finderContainer").trigger("popupsOpened");
        } 
        catch (e) {
            console.log("Site share not available", defaultParams);
			
        }
		
		try {
			if(defaultParams.hasOwnProperty("tracking")){
				this.handleTracking(finder.getCurrentPage(),defaultParams.tracking);
			}
		} catch(err) {
		}
		
		jQuery("#finderContainer").trigger("popupsOpened");
		
        
    },
    
    comment: function(params){
    
        var defaultParams = {
            num: 5,
			commentId: 0
        }
        
        jQuery.extend(true, defaultParams, params);
        
        try {
            //showFBComment(true, defaultParams.num, finder.getConfig().comment.position[0], finder.getConfig().comment.position[1])
			fgs.showFBCommentFrameEx('fbcomments', 0, defaultParams.num, finder.getConfig().comment.position[0], finder.getConfig().comment.position[1], 800, null, 800);
			jQuery("#finderContainer").trigger("popupsOpened");
        } 
        catch (e) {
            console.log("Couldn't show the comment box", e);
        }
		
		jQuery("#finderContainer").trigger("popupsOpened");
        
    },
    
    quickView: function(params){
    
        var defaultParams = {
            productId: ""
        }
        
        jQuery.extend(true, defaultParams, params);
		
		console.log("quickview called", defaultParams);
        
        showAddToBag(null, 6, null, 0, defaultParams.productId, finder.getConfig().quickView.bgColor, finder.getConfig().quickView.catId, false, finder.getConfig().quickView.position, null, null, null);

		    finder.scrollPage('top');

		jQuery("#finderContainer").trigger("popupsOpened");
    },
    
    showFBLikeFrame: function(params){
    
        var defaultParams = {
            containerId: "",
            url: "http://www.macys.com"
        }
        
        jQuery.extend(true, defaultParams, params);
        
        try {
            fgs.showFBLikeFrame("blankFrmeId", false, defaultParams.url, 0, 0, "top", "left", null, defaultParams.containerId, {
                position: "relative"
            });
        } 
        catch (e) {
            console.log("Could not show FB Like Frame", e);
        }
    },
    
    showFBWallWidget: function(params){
    
        var defaultParams = {
            containerId: "",
            url: "http://www.macys.com"
        }
        
        jQuery.extend(true, defaultParams, params);
        
        try {
        	console.log(defaultParams.url);
        	fgs.showFBLikeBox("blankFrmeId", false, defaultParams.url, 255, 566, 255, 566, true, true, false, 7, 11, 'left', 'top', 400, defaultParams.containerId)

            /*fgs.showFBLikeFrame("blankFrmeId", true, defaultParams.url, 0, 0, "top", "left", null, defaultParams.containerId, {
                position: "relative"
            });
            */
        } 
        catch (e) {
            console.log("Could not show FB Like Frame", e);
        }
    },
    
    //fgs.showFBLikeBox(idFrame, useXFBMLLike, urlToLike, lbcWidth, lbcHeight, lbWidth, lbHeight, show_faces, stream, header, xoffset, yoffset, xanchor, yanchor, zPos, containerEl)
	
	closePopups: function() {
		try {
			closePopup();
			jQuery("#finderContainer").trigger("popupsClosed");
		} catch (e) {
			console.log("Could not call closePopup");
		}
	},
	
	vote: function(params) {
		
		var defaultParams = {
			
			entryId: "",
			onSuccess: function(retval1, retval2, code, message) {console.warn("callback not specified from voting")},
			onCancel: function() {}
			
		}
		
		jQuery.extend(true, defaultParams, params);
		
		var voteCallback = function(respcode, respmsg, opcode, retval1, retval2) {
			console.log("in callback", respcode, respmsg, opcode, retval1, retval2);
			if (respmsg == "Success") {
				defaultParams.onSuccess(retval1, retval2, respcode, respmsg);
			} else {
				defaultParams.onFailure(respcode, respmsg, opcode);
			}
		}

		var swfVoteFor =
		{
		    onOpCancelled: defaultParams.onCancel,
		    onOpCompleted: voteCallback,
		    PercentLoaded : function() {return 100;}
		};
		
		try {
			//voteForExWithFacebook(swfVoteFor, defaultParams.entryId, "Macy's");
			voteForEx(swfVoteFor, defaultParams.entryId);
		} catch(e) {
			console.log("Couldn't call the voting function", e, defaultParams, swfVoteFor);
		}
		
		try {
			if(finder.getConfig().hasOwnProperty("vote") && finder.getConfig().vote.hasOwnProperty("tracking")){
				this.handleTracking(finder.getCurrentPage(),finder.getConfig().vote.tracking);
			}
		} catch(e) {
		}
		
		finder.votedOnProducts.push(parseInt(defaultParams.entryId));
		console.log('Updated: Voted on Items', finder.votedOnProducts);
		$.cookie('VOTED_ON_ITEMS_RTW', escape( finder.votedOnProducts.join(',') ) );
		
	}

});



var SkavaInteropInternationalPricing = Class.extend({
	
	
	
	init: function() {
		
		var self = this;
		this.isInternational = false;
		
		var obj = {
			onInitializeInternational: function(available, response) {
				console.log("international pricing is available", available);
				if (available) {
					self.isInternational = true;
				} else {
					self.isInternational = false;
				}
			},
			onUpdateInternational: function(response) { 
				console.log(response, "response from international");
				
				for (i in response.internationaldetail) {
					var item = jQuery(".productListing[productId='" + i + "']");
					if (response.internationaldetail[i].shippingavailability == "N") {
						jQuery(".price1", item).html("Not available for shipping");
						jQuery(".price2", item).html("");
						jQuery(".price3", item).html("");
					}
					else {
						jQuery(".price1", item).html(response.internationaldetail[i].pfeed_price1);
						jQuery(".price2", item).html(response.internationaldetail[i].pfeed_price2);
						jQuery(".price3", item).html(response.internationaldetail[i].pfeed_price3);
					}
				}
						
			}
		}
		
		
        setTimeout(function(){
            try {
                initializeInternational(obj);
            } 
            catch (e) {
                console.log("Could not initialize the international pricing...", e);
            }
        }, 2000);
		
		
		
		jQuery("#finderContainer").bind("poolPageChanged", function() {
			
			// don't process this if we are not international...
			if (!self.isInternational) {
				return;
			}
			
			var productIds = [];
			
			jQuery(".productListing[productId]:visible").each(function() {
				productIds.push(jQuery(this).attr("productId"));
			});
			
			if (productIds.length == 0)
				return;
			
			try {
				getInternationalDetails(productIds.join(","));
			} catch (e) {
				console.log("Couldn't get international procing details", e);
			}
			
		});
		
		
		
	}
});


var SkavaInteropWishList = Class.extend({
	
	init: function() {},
	
	initialize: function(callback) {
		
		var self = this;
		
		self.items = [];
		
		var myCallback;
		if (!callback)
			myCallback = function(name, num, items, fbImage) {}
		else 
			myCallback = callback;

		var callbackObj = {
			onOpCompleted: function(code, msg, opcode, retval1, retval2) {},
			onUpdateWishList: function(name, num, items, fbImage) {

				console.log("in wishlist callback", name, num, items, fbImage);
				self.items = items;
				self.name = name;
				self.fbImage = fbImage;
				
				jQuery("[role='skavaInteropWishListCount']").html(num);
				
				self.checkProducts();
				
				myCallback(name, num, items, fbImage);
			}
		}
		
		jQuery("#finderContainer").bind('poolLoaded', function() {
			self.checkProducts();
		});
		
		try {
			(function() { initializeWishList(callbackObj, 211, 200, null, true); })();
		} catch (e) {
			console.log("Wish list - initialization error", e);
		}
		console.log("Wish list initialized");
		
		// attach event handlers...
		
		jQuery('[role="skavaInteropWishListSignIn"]').click(function(event) {
			console.log("in login");
			self.showLogin();
			
			event.preventDefault();
			event.stopPropagation();
		});
		
		jQuery('[role="skavaInteropWishListSignOut"]').live ("click", function(event) {
			console.log("in logout");
			self.doLogout();
			
			event.preventDefault();
			event.stopPropagation();
		});
		
		jQuery('[role="skavaInteropWishListLauncher"]').live("click", function(event) {
			console.log("in open wishlist");
			self.show();
			
			event.preventDefault();
			event.stopPropagation();
		});
		
		jQuery('[role="skavaInteropWishListAdder"]').live("click", function(event) {

			console.log("in add to wishlist");
			
			var product = jQuery(this).parents(".productListing");
			self.add(product.attr("productId"));
			
			event.preventDefault();
			event.stopPropagation();
		});
		
		
	},
	
	checkProducts: function() {
		jQuery(".productListing").removeClass("inWishlist");
		for (i = 0; i < this.items.length; i++)
		{
			jQuery(".productListing[productId='" + this.items[i] + "']").addClass("inWishlist");
		}
	},
	
	add: function(productId) {
		try {
			addToWishList(productId);
		} catch (e) {
			console.log("Wish List - Could not add to wish list", productId, e);
		}
	},
	
	inWishlist: function(productId) {
		return jQuery.inArray(productId, this.items) > -1;
	},
	
	show: function() {
		try {
			showWishList(49, 27);
		} catch (e) {
			console.log("Wish List - Could not show wish list", e);
		}
	},
	
	getCount: function() {
		try {
			getWishListCount();
		} catch (e) {
			console.log("Wish List - Could not get wish list count", e);
		}
	},
	
	showLogin: function() {
		try {
			showLogin();
		} catch (e) {
			console.log("Wish List - Could not show login", e);
		}
	},
	
	doLogout: function() {
		try {
			doLogout();
		} catch (e) {
			console.log("Wish List - Could not show logout", e);
		}
	},
	
	showInfo: function() {
		try {
			showWishlistInfoOverlay(1);
		} catch(e) {
			console.log("Tried to call the wishlist info overlay");
		}
	}
		
	
	
});


