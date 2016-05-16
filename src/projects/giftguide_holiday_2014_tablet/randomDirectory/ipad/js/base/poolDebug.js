var PoolDebug = Class.extend({

	init: function() {
		
		this.container = jQuery("#poolDebug");
		if (this.container.length == 0) {
			return;
		}
		
		this.container.css({
			font: "10px Arial"
		})
		
		var self = this;
		jQuery("#finderContainer").bind("poolLoaded", function(event) {
			try {
				self.handlePoolLoad(event.productPool);
			} catch(e) {
				alert(e);
			}
		})
		
		
		
	},
	
	handlePoolLoad: function(productPool) {
		
		this.productPool = productPool;
		
		this.container.html("");
		
		this.createFilters();
		
		this.appendMessage("Items per page", this.productPool.itemsPerPage);
		this.appendMessage("Template", this.productPool.template);
		this.appendMessage("Pool Loaded", this.productPool.poolWorker.lastPool);
		this.appendMessage("Num Products", this.productPool.poolWorker.db().count());
		
		
	},
	
	appendMessage: function(title, message) {
		this.container.append("<HR><B>" + title + "</B>: <span>" + message + "</span>");
	},
	
	createFilters: function() {
		
		this.pfeedSelect = jQuery("<select></select>");
		var item = this.productPool.poolWorker.db().first();
		
		var itemHtml = "<option value='-1'>Properties</option>";
		for (i in item) {
			itemHtml += "<option value='" + i + "'>" + i + "</option>";
		}
		this.pfeedSelect.html(itemHtml);
		
		this.pfeedSelectResults = jQuery("<div></div>");
		
		this.container.append("<hr>");
		this.container.append(this.pfeedSelect);
		this.container.append(this.pfeedSelectResults);
		
		var self = this;
		this.pfeedSelect.change(function() {
			
			var items = self.productPool.poolWorker.db().distinct(jQuery(this).val());
			
			var myItems = {};
			var currentFieldIsArray = false;
			for (i = 0; i < items.length; i++) {
				if (items[i] instanceof Array) {
					for (j = 0; j < items[i].length; j++) {
						currentFieldIsArray = true;
						myItems[items[i][j]] = 1;
					}
				}
				else {
					myItems[items[i]] = 1;
				}
			}
			
			self.pfeedSelectResults.html("");
			for (i in myItems) {
				self.pfeedSelectResults.append("<div><input type=checkbox value=\"" + i + "\"> " + i+"</div>");
			}
			
			jQuery("input", self.pfeedSelectResults).click(function() {
				//checkbox is clicked... lets create a filter...
				
				// get selected checkboxes...
				var checkboxes = [];
				jQuery("input:checked", self.pfeedSelectResults).each(function() {
					checkboxes.push(jQuery(this).val())
				})
				
				var filters = [];
				var compareType = "is";
				if (currentFieldIsArray) {
					compareType = "has";
				}
				for (i = 0; i < checkboxes.length; i++) {
					var filter = {};
					filter[self.pfeedSelect.val()] = {} 
					filter[self.pfeedSelect.val()][compareType] = checkboxes[i];
					filters.push(filter);
				}
				
				self.productPool.itemsFiltered(filters);
				
			})
			
		})
		
		
		
	}



});













