
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
				self.share(finder.getConfig().sharing[jQuery(this).attr("config")]);
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
		
		jQuery("#finderContainer").bind("deeplinkChanged", function() {
			
			// on change...
			// look to track...
			
			
		});

        jQuery('[role="skavaInteropFitJeansBootcut"]').live({
            //added by shubhra
            click: function(event){
                self.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-gentlemans.101.fitguide.jeans.bootcut", catid:"ca-so-gentlemans.101.fitguide.jeans"});
            }
        });
        jQuery('[role="skavaInteropFitJeansStraight"]').live({
            //added by shubhra
            click: function(event){
                self.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-gentlemans.101.fitguide.jeans.straight", catid:"ca-so-gentlemans.101.fitguide.jeans"});
            }
        });
        jQuery('[role="skavaInteropFitJeansRelaxed"]').live({
            //added by shubhra
            click: function(event){
                self.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-gentlemans.101.fitguide.jeans.relaxed", catid:"ca-so-gentlemans.101.fitguide.jeans"});
            }
        });
        jQuery('[role="skavaInteropFitJeansSlim"]').live({
            //added by shubhra
            click: function(event){
                self.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-gentlemans.101.fitguide.jeans.slim", catid:"ca-so-gentlemans.101.fitguide.jeans"});
            }
        });
        jQuery('[role="skavaInteropFitJeansSkinny"]').live({
            //added by shubhra
            click: function(event){
                self.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-gentlemans.101.fitguide.jeans.skinny", catid:"ca-so-gentlemans.101.fitguide.jeans"});
            }
        });


		jQuery('[role="skavaInteropShareFacebook"]').live({
			click: function(event) {
				event.preventDefault();

				var $this = $(event.currentTarget);
				var $parent = $this.parent();
				var imageUrl = $parent.attr("data-share-image");

                //added by shubhra
                self.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-gentlemans.share.facebook", catid:"ca-so-gentlemans-guide-share"});

                var sharedData = jQuery.extend({}, finder.getConfig().sharing[jQuery(this).attr("config")]);

                if (imageUrl) {
					sharedData.icon = imageUrl;
                }

                sharedData.url = finder.returnUrl();
                console.log(sharedData, " sharedData *************************");

				self.shareFacebook( sharedData );
			}
		});
		
		jQuery('[role="skavaInteropSharePinterest"]').live({
			click: function(event) {
				event.preventDefault();
				self.sharePinterest(finder.getConfig().sharing[jQuery(this).attr("config")]);
			}
		});

        jQuery('[role="skavaInteropBookaDate"]').live({
            click: function(event) {
                self.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-gentlemans.macysbyappointment", catid:"ca-so-gentlemans-guide"});

            }
        });
		
		jQuery('[role="skavaInteropShareTwitter"]').live({
			click: function(event) {
				event.preventDefault();
                self.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-gentlemans.share.twitter", catid:"ca-so-gentlemans-guide-share"});
                
                var sharedData = jQuery.extend({}, finder.getConfig().sharing[jQuery(this).attr("config")]);
                sharedData.url = finder.returnUrl();

                console.log(sharedData, " sharedData *************************");

                self.shareTwitter( sharedData );
			}
		});
		
		jQuery('[role="skavaInteropShareEmail"]').live({
			click: function(event) {
				event.preventDefault();
				self.shareEmail(finder.getConfig().sharing[jQuery(this).attr("config")]);
			}
		});
		
		jQuery('[role="skavaInteropSendToMyPhone"]').live({
			click: function(event) {
				event.preventDefault();
				self.sendToMyPhone(finder.getConfig().sharing[jQuery(this).attr("config")]);
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
				var item = jQuery(this).parents("[entryId]");
				
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
							newMessage = "1 LOVES THIS &middot;";
						} else {
							newMessage = numVotes + " LOVE THIS &middot;";
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
				
			}
		})
		
		this.nullObject = {
	        onOpCancelled: function() { },
	        onOpCompleted: function() { },
	        onSuccess: function() { },
	        onFailure: function() { },
	        PercentLoaded : function() {return 100;}
	    }
		
    
    },
	
	beenVotedOn: function(entryId) {
		return jQuery.inArray(entryId, this.votedItems) > -1;
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
			pinterest: {
				image: assetsDirectory + "images/fb_share_icon.JPG",
				desc: "this is the pinterest Description"
			},
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
	
    sendToMyPhone: function(params){
        var defaultParams = {
			phone: {
				title: "SMS Title",
				message: "SMS MESSAGE",
				mailerIds: {
					staging: 407,
					production: 378
				}
			}
        };
        
        jQuery.extend(true, defaultParams, params);
		
		var mailerId = defaultParams.phone.mailerIds.staging;
        if (isProduction) 
            mailerId = defaultParams.phone.mailerIds.production;  
        
        try {
            sendMessage(this.nullObject, defaultParams.phone.title, defaultParams.phone.message, defaultParams.icon, defaultParams.url, 0, true)
			jQuery("#finderContainer").trigger("popupsOpened");
        } 
        catch (e) {
            console.log("phone share not available", defaultParams);
        }
		
		jQuery("#finderContainer").trigger("popupsOpened");
    },

	shareFacebook: function(params){
        var defaultParams = {
			facebook: {
                title: "facebook title",
                description: "facebook description"
            }
        };
        
        jQuery.extend(true, defaultParams, params);
        
        try {
            shareFb(this.nullObject, defaultParams.facebook.title, defaultParams.facebook.description, defaultParams.icon, defaultParams.url)
			jQuery("#finderContainer").trigger("popupsOpened");
        } 
        catch (e) {
            console.log("facebook share not available", defaultParams);
        }
		
		jQuery("#finderContainer").trigger("popupsOpened");
    },
	
	sharePinterest: function(params){
        var defaultParams = {
			pinterest: {
				image: "",
				desc: ""
			}
        };
        
        jQuery.extend(true, defaultParams, params);
        
        try {
            sharePinIt(defaultParams.url, defaultParams.pinterest.image, defaultParams.pinterest.desc)
			jQuery("#finderContainer").trigger("popupsOpened");
        } 
        catch (e) {
            console.log("pinterest share not available", defaultParams);
        }
		
		jQuery("#finderContainer").trigger("popupsOpened");
    },
	
	shareTwitter: function(params){
        var defaultParams = {
			twitter: "twitter message",
			url: "http://www.macys.com"
        };
        
        jQuery.extend(true, defaultParams, params);
        
        try {
            shareTwitterV2(this.nullObject, defaultParams.twitter, "", defaultParams.icon, defaultParams.url)
			jQuery("#finderContainer").trigger("popupsOpened");
        } 
        catch (e) {
            console.log("twitter share not available", defaultParams);
        }
		
		jQuery("#finderContainer").trigger("popupsOpened");
    },
	
	shareEmail: function(params) {
        var defaultParams = {
			mailerIds: {
				staging: 388,
				production: 388
			}
        };
        
        defaultParams = jQuery.extend({}, defaultParams, params);
        
		var mailerId = defaultParams.mailerIds.staging;
        if (isProduction) 
            mailerId = defaultParams.mailerIds.production;  
		
        try {
            showEmailPopup(this.nullObject, "", "", defaultParams.icon, defaultParams.url, mailerId);
			jQuery("#finderContainer").trigger("popupsOpened");
        } 
        catch (e) {
            console.log("email share not available", defaultParams);
        }
		
		jQuery("#finderContainer").trigger("popupsOpened");
    },
    quickView: function(params){
    
        var defaultParams = {
            productId: ""
        }
        
        jQuery.extend(true, defaultParams, params);
		
		console.log("quickview called", defaultParams);
        
        showAddToBag(null, 6, null, 0, defaultParams.productId, finder.getConfig().quickView.bgColor, finder.getConfig().quickView.catId, false, finder.getConfig().quickView.position, null, null, null)
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
		
		
		if (finder.skava.beenVotedOn(1 * defaultParams.entryId))
			return;
		finder.skava.votedItems.push(1 * defaultParams.entryId);
		
		var voteCallback = function(respcode, respmsg, opcode, retval1, retval2) {
			console.log("in callback", respcode, respmsg, opcode, retval1, retval2);
			if (respmsg == "Success") {
				defaultParams.onSuccess(retval1, retval2, respcode, respmsg);
			} else {
				defaultParams.onFailure(respcode, respmsg, opcode);
			}
			
			try {
				jQuery("OBJECT", finder.getCurrentPage().parentDiv).each(function() {
					
					console.warn(retval1, retval2, respcode, respmsg);
					this.sendVotingData([{label: "",entryid:defaultParams.entryId, votes:retval1}]);
					});
			} catch (e) {
				console.log("Tried forwarding the vote callback into flash...", e);
			}
		}

		var swfVoteFor =
		{
		    onOpCancelled: defaultParams.onCancel,
		    onOpCompleted: voteCallback,
		    PercentLoaded : function() {return 100;}
		};
		
		try {
			voteForEx(swfVoteFor, defaultParams.entryId, "Macy's");
		} catch(e) {
			console.log("Couldn't call the voting function", e, defaultParams, swfVoteFor);
		}
		
		
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
		
		jQuery("#finderContainer").bind('poolPageChanged', function() {
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


