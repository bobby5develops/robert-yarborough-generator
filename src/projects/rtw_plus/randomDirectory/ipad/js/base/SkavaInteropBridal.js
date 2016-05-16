
var SkavaInteropBridal = Class.extend({
	
	init: function() {
		
		this.products = false;
		this.user = false;
		
		var self = this;
		
		jQuery('[role="skavaInteropBridalSignIn"]').click(function(event) {
			console.log("in login");
			self.showLogin();
			
			event.preventDefault();
			event.stopPropagation();
		});
		
		jQuery('[role="skavaInteropBridalSignOut"]').live ("click", function(event) {
			console.log("in logout");
			self.doLogout();
			
			event.preventDefault();
			event.stopPropagation();
		});
		
		jQuery('[role="skavaInteropBridalLauncher"]').live("click", function(event) {
			console.log("in open bridal");
			self.show();
			
			event.preventDefault();
			event.stopPropagation();
		});
		
		jQuery('[role="skavaInteropBridalAdder"]').live("click", function(event) {

			console.log("in add to wishlist");
			
			var product = jQuery(this).parents(".productListing");
			self.add(product.attr("productId"));
			
			event.preventDefault();
			event.stopPropagation();
		});
		
		
		this.callbacks = {
			
			onOpCompleted: function(code, msg, opcode, retval1, retval2) {}, 
			afterProcess: function(actionName, response) {
				
				console.log("in brial response", actionName, response);
				finder.skava.bridal.lastResponse = response;
				response = JSON.parse(response);
				if (actionName == "signin" || actionName == "getsignedinuser") {
					finder.skava.bridal.user = response.user;
					jQuery("#finderContainer").trigger("bridalSignInStateChanged");
				}
				
				if (actionName == "addtomylist") {
					finder.skava.bridal.products = [];
					finder.skava.bridal.user.numitems = response.entries.size;
					jQuery("#finderContainer").trigger("bridalProductsUpdated");
				}
				
				
			}
		}
		
		this.isSignedIn();
		
	},
	
	isSignedIn: function() {
		
		try {
			WEDDINGSHOP.isSignedIn(this.callbacks)
		} catch(e) {
			console.log("Couldn't check signin");
		}
		
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
			WEDDINGSHOP.addItemsToList(this.callbacks, productId)
		} catch (e) {
			console.log("bridal - Could not add to bridal", productId, e);
		}
	},
	
	inWishlist: function(productId) {
		return jQuery.inArray(productId, this.items) > -1;
	},
	
	show: function() {
		try {
			
			var obj = {
				onOpCompleted: function() {},
				onOpCanceled: function() {}
			}
			
			wedshopShowBridalPartyOverlay(obj, 0, 0)
		} catch (e) {
			console.log("Bridal Party - Could not show Bridal Party", e);
		}
	},
	
	getCount: function() {
			
		if (this.user) {
			return this.user.numitems;
		}
		
		return 0;
	},
	
	showLogin: function() {
		try {
			WEDDINGSHOP.showSignIn(null, null, null, this.callbacks)
		} catch (e) {
			console.log("Bridal - Could not show login", e);
		}
	},
	
	doLogout: function() {
		try {
			wedshopSignout();
			this.user = false;
			jQuery("#finderContainer").trigger("bridalSignInStateChanged");
		} catch (e) {
			console.log("Bridal - Could not show logout", e);
		}
	}
	

		
	
	
});
