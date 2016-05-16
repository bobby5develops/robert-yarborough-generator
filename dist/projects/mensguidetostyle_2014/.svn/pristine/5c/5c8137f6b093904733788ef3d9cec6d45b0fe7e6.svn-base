var ProductPoolFacet = Class.extend({

	init: function(name, type, filters) {
		this.name = name;
		this.type = type; // either "FILTER" or "SORT"
		this.filters = filters;
		this.parent = parent;
		
		this.displayHandler = this.setupDisplay();
	},
	
	setupDisplay: function() {
		return new SelectFieldDisplayHandler("Shop By", this);
	},
	
	display: function() {
		return this.displayHandler.display();
	},
	
	getSelectedFilter: function() {
		var values = this.displayHandler.getSelectedValues();
		
		var filter = [];
		for (i = 0; i < values.length; i++) {
			filter = jQuery.merge(filter, this.filters[values[i]].filter);
		}
		
		return filter;
	},
	
	getFilters: function() {
		return this.filters;
	},
	
	getSelected: function() {
		var values = this.displayHandler.getSelectedValues();
		
		var filter = [];
		for (i = 0; i < values.length; i++) {
			filter.push(this.filters[values[i]]);
		}

		
		return filter;
	},
	
	setSelected: function(val) {
		for (var i in this.filters) {
			if (i == val) {
				this.filters[i].selected = true;
			} else {
				this.filters[i].selected = false;
			}
		}
		this.displayHandler.display();
		this.facetChanged();
	},
	
	facetChanged: function() {
		this.parent.poolContainer.trigger({
			type: "filterFacetChanged",
			changedFacet: this
		});
	},
	
	setParent: function(parent) {
		this.parent = parent;
	},
	
	handlePoolData: function(items) {
		
	},
	
	getType: function() {
		return this.type;
	},
	
	reset: function() {
		this.displayHandler.reset();
	}
});

var ProductPoolFacetDisplayHandler = Class.extend({
	
	init: function(defaultText, par) {
		this.defaultText = defaultText;
		this.parent = par;
		
		this.setup();
	},
	
	setup: function() {
		
	},
	
	display: function() {
		
	},
	
	displayChanged: function() {
		this.parent.facetChanged();
	},
	
	getSelectedValues: function() {
		return [];
	},
	
	reset: function() {
		
	}
	
})



var SelectFieldDisplayHandler = ProductPoolFacetDisplayHandler.extend({
	
	setup: function() {
		this._super();
		this.field = jQuery("<select><option value='-1'>" + this.defaultText + "</option>");
		
		var self = this;
		this.field.change(function() {
			self.displayChanged();
		})
	},
	
	display: function() {
		this._super();
		var values = "<option value='-1'>" + this.defaultText + "</option>";
	
		
		var filters = this.parent.getFilters();
		for (i in filters) {
			values += "<option value='" + i + "'>" + filters[i].label + "</option>";
		}
		
		this.field.html(values);	
		return this.field;	
	},
	
	getSelectedValues: function() {
		if (this.field.val() == "-1")
			return [];
			
		return [this.field.val()];
	},
	
	reset: function() {
		this._super();
		this.field.val("-1");
	}

});
var ToggleTabsDisplayHandler = ProductPoolFacetDisplayHandler.extend({
	
	setup: function() {
		this._super();
		this.field = jQuery("<div><span class='facetTitle'>" + this.defaultText + "</span><ul class='facetTabsContainer'></ul></div>");
		
		var self = this;
		jQuery("UL", this.field).delegate("LI", "click", function() {
			
			var item = jQuery(this);
			
			if (item.hasClass("toggled")) {
				if (!self.isToggle()) {
					// see how many items are checked... if only one.. don't remove the class..
					if (item.siblings(".toggled").length > 0) {
						item.removeClass("toggled");
					}
				} else {
					item.removeClass("toggled");
				}
				
			} else {
				if (!self.isToggle()) {
					item.siblings("LI").removeClass("toggled").children("INPUT").removeAttr("checked");
				}
				item.addClass("toggled");
			}
			
			if (item.hasClass("toggled")) {
				jQuery("INPUT", item).attr("checked", "1");
			} else {
				jQuery("INPUT", item).removeAttr("checked");
			}
			self.displayChanged();
		})
		
		
	},
	
	isToggle: function() {
		return true;
	},
	
	display: function() {
		this._super();
		
		var values = "";
		var filters = this.parent.getFilters();
		for (i in filters) {
			var checked = filters[i].selected ? "checked" : "";
			var toggled = filters[i].selected ? "class='toggled'" : "";
			values += "<li pfeed='" + i + "' " + toggled + "><input type='checkbox' " + checked + "> " + filters[i].label + "</li>";
		}
		
		jQuery("UL", this.field).html(values).css({padding: "0px", margin: "0px", 'list-style': "none", "-webkit-padding-start": "0px"});
		
		jQuery("LI", this.field).css({'list-style': "none", "cursor": "pointer"})
		
		return this.field;	
	},
	
	getSelectedValues: function() {
		var items = [];
		jQuery("LI.toggled", this.field).each(function() {
			items.push(jQuery(this).attr("pfeed"));
		})

		
		return items;
	},
	
	reset: function() {
		this._super();
		jQuery(".toggled", this.field).removeClass("toggled");
		jQuery("[checked]", this.field).removeAttr("checked");
	}
	
});

var TabsDisplayHandler = ToggleTabsDisplayHandler.extend({

	isToggle: function() {
		return false;
	}
	
});



var ToggleButtonDisplayHandler = ProductPoolFacetDisplayHandler.extend({
	
	setup: function() {
		this._super();
		this.field = jQuery("<input type='button' value='" + this.defaultText + "'>");
		
		var self = this;
		this.field.click(function() {
			self.field.toggleClass("toggled");
			self.displayChanged();
		})
	},
	
	display: function() {
		this._super();
		return this.field;	
	},
	
	getSelectedValues: function() {
		if (this.field.hasClass("toggled")) {
			// return the first filter..
			var filters = this.parent.getFilters();
			for (i in filters) {
				return [i];
				break;
			}
		}
		else {
			return [];
		}
	},
	
	reset: function() {
		this._super();
		this.field.removeClass("toggled");
	}

});

var ButtonDisplayHandler = ProductPoolFacetDisplayHandler.extend({
	
	setup: function() {
		this._super();
		this.field = jQuery("<input type='button' value='" + this.defaultText + "'>");
		
		var self = this;
		this.field.click(function() {
			self.displayChanged();
		})
	},
	
	display: function() {
		this._super();
		return this.field;	
	}

});


var CategoryFilterFacet = ProductPoolFacet.extend({

	handlePoolData: function(items) {

		// use these items to build my filters list...
		var category = {};
		for (var i = 0; i < items.length; i++)
		{
			
			if (items[i][this.category] instanceof Array) {
				for (j = 0; j < items[i][this.category].length; j++) {
					if (category[items[i][this.category][j]])
						category[items[i][this.category][j]]++;
					else 
						category[items[i][this.category][j]] = 1;
				}
			} else {
				if (category[items[i][this.category]])
					category[items[i][this.category]]++;
				else 
					category[items[i][this.category]] = 1;
			}
			
			
			
			
		}
		var bArray = [];
		for (var i in category)
		{
			if(i==""){
				continue;
			}
			bArray.push(i);
		}
		bArray = bArray.sort();
		
		this.filters = {}
		
		for (var i = 0; i < bArray.length; i++)
		{
			var myfilter = {
				label: bArray[i],
				filter: []
			}
			var filter2 = {}
			filter2[this.category] = {
				has: [bArray[i]]
			};
			myfilter.filter.push(filter2);
			this.filters[bArray[i]] = myfilter;
			
		}
		this.display();
	}
	
})


