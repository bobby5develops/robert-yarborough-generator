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
		
	},
	
	getCSSClass: function() {
		return "";
	}
	
})



var SelectFieldDisplayHandler = ProductPoolFacetDisplayHandler.extend({
	
	setup: function() {
		this._super();
		this.field = jQuery("<select>");
		
		var self = this;
		this.field.change(function() {
			self.displayChanged();
		})
	},
	
	display: function() {
		this._super();
		var values = "";
	
		
		var filters = this.parent.getFilters();
		for (i in filters) {
			values += "<option value=\"" + i + "\">" + filters[i].label + "</option>";
		}
		
		this.field.html(values);	
		return this.field;	
	},
	
	getSelectedValues: function() {
		
		return [this.field.val()];
	},
	
	reset: function() {
		this._super();
		
		var filters = this.parent.getFilters();
		var first = "";
		for (i in filters) {
			first = i;
			break;
		}
		
		this.field.val(first);
	},
	
	getCSSClass: function() {
		return "selectField";
	}

});

var ToggleTabsDisplayHandler = ProductPoolFacetDisplayHandler.extend({
	
	setup: function() {
		this._super();
		this.field = jQuery("<div><span class='facetTitle'>" + this.defaultText + "</span><ul class='facetTabsContainer'></ul></div>");
		
		var self = this;
		jQuery("UL", this.field).delegate("LI", "click", function() {
			
			var item = jQuery(this);
			
			var filter = self.parent.getFilters()[item.attr("pfeed")];
			
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
				// if this is a single select... or the item we clicked on is a single select...
				// clear other checked items...
				if (!self.isToggle() || item.attr("selectType") == "single") {
					item.siblings("LI").removeClass("toggled").children("INPUT").removeAttr("checked");
				} else {
					// otherwise.. clear out any other items that were single selects...
					item.siblings("LI[selectType='single']").removeClass("toggled").children("INPUT").removeAttr("checked");
				}

				item.addClass("toggled");
			}
			
			if (item.hasClass("toggled")) {
				jQuery("INPUT", item).attr("checked", "1");
			} else {
				jQuery("INPUT", item).removeAttr("checked");
			}
			
			// check if anything is selected in this filter group... if not..
			// we need to select the "selectAll" items...
			if (!item.hasClass("toggled") && item.siblings("LI.toggled").length == 0) {
				item.parent().children("LI[selectAll='all']").addClass("toggled").children("INPUT").attr("checked", "1");
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
			var toggled = filters[i].selected ? "toggled" : "";
			var single = filters[i].single || filters[i].selectAll ? "single" : "multiple";
			var selectall = filters[i].selectAll ? "all" : "";
			values += "<li pfeed=\"" + i + "\" " + toggled + " class=\"" + i.replace("'", "") + " " + toggled + "\" selectType=\"" + single + "\" selectAll=\"" + selectall + "\"><input type='checkbox' " + checked + "> " + filters[i].label + "</li>";
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
	},
	
	getCSSClass: function() {
		return "checkboxField";
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

	handlePoolData: function(items, initialFilters) {

		if (!initialFilters)
			initialFilters = {};

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
		
		this.filters = initialFilters;
		
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
		
		
		
		
		// console.log(this.filters, "CATEGORY FILTER");
		
		this.display();
	}
	
})
