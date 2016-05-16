/*
 * Available Facet Abstract Types:
 * 1.	CategoryFilterFacet - specify a pfeed_xxx property.. and it builds the item automatically...
 * 2.	ProductPoolFacet - specify your filters manually....
 * 
 * Available Display Handlers:
 * 1.	ButtonDisplayHandler
 * 2.	ToggleButtonDisplayHandler
 * 3.	SelectFieldDisplayHandler
 * 4.	ToggleTabsDisplayHandler
 * 5.	TabsDisplayHandler
 * 
 */


var GenericDropDownFacet = ProductPoolFacet.extend( {
	init: function(filters, id, title) {
		this.facetId = id;
		this.facetTitle = title;
		this._super(id, "FILTER", filters);
	},
	setupDisplay: function() {
		// The dropdown title is here. 
		return new SelectFieldDisplayHandler(this.facetTitle, this);
		          	
	}
})



var GenericCheckboxFacet = ProductPoolFacet.extend( {
	init: function(filters, id, title) {
		this.facetId = id;
		this.facetTitle = title;
		this._super(id, "FILTER", filters);
	},
	setupDisplay: function() {
		// The dropdown title is here. 
		return new TabsDisplayHandler(this.facetTitle, this);
		          	
	}
})


var LinksFilterFacet = ProductPoolFacet.extend({
	
	facetChanged: function() {
		var values = this.displayHandler.getSelectedValues();

		if (values.length > 0) {
			var myValue = values.pop();
			
			var url = this.getFilters()[myValue].url;
			window.location = url;
		}
	}
	
})


var ColorFacet = ProductPoolFacet.extend({
	
	init: function() {
		var filter = {
			"all": {
				selected: true,
				label: "show all",
				filter: [],
				selectAll: true
			},
			"graysilver": {
				label: "gray/silver",
				filter: [{pfeed_color: {has:"Grey"}},{pfeed_color: {has:"Silver"}}]
			},
			"pink": {
				label: "pink",
				filter: [{pfeed_color: {has:"Pink"}}]
			},
			"white": {
				label: "white",
				filter: [{pfeed_color: {has:"White"}}]
			},
			"green": {
				label: "green",
				filter: [{pfeed_color: {has:"Green"}}]
			},
			"yelloworange": {
				label: "yellow/orange",
				filter: [{pfeed_color: {has:"Yellow"}},{pfeed_color: {has:"Orange"}}]
			},
			"brownbeige": {
				label: "brown/beige",
				filter: [{pfeed_color: {has:"Brown"}},{pfeed_color: {has:"Beige"}}]
			},
			"red": {
				label: "red",
				filter: [{pfeed_color: {has:"Red"}}]
			},
			"blue": {
				label: "blue",
				filter: [{pfeed_color: {has:"Blue"}}]
			},
			"black": {
				label: "black",
				filter: [{pfeed_color: {has:"Black"}}]
			},
			"purple": {
				label: "purple",
				filter: [{pfeed_color: {has:"Purple"}}]
			},
			"multiprint": {
				label: "multiprint",
				filter: [{pfeed_color: {has:"Multiprint"}}]
			}
		};
		this._super("color", "FILTER", filter);
	},
	
	setupDisplay: function() {
		return new TabsDisplayHandler("Shop By Color", this);
	}
})

var BrandSelectFacet = CategoryFilterFacet.extend({
	
	init: function() {
		this.category = "pfeed_brand";
		this._super("brandSelect", "FILTER", {});
	},
	
	handlePoolData: function(items) {
		
		var initialFilters = {
			'showall': {
				label: "show all",
				selectAll: true,
				single: true,
				selected: true
			}
		}
		
		this._super(items, initialFilters);
		
	},
	
	setupDisplay: function() {
		return new SelectFieldDisplayHandler("Shop By Brand", this);
	}
})

var SortingFacet = ProductPoolFacet.extend({
	
	init: function() {
		
		var filters = {
			"pricehightolow": {
				label: "price: high to low",
				filter: ["pfeed_priceforfilters logicaldesc"]
			},
			"pricelowtohigh": {
				label: "price: low to high",
				filter: ["pfeed_priceforfilters logical"]
			},
			"toploved": {
				label: "top loved",
				filter: ["votes logicaldesc"]
			}
		}		

		
		this._super("sortSelect", "SORT", filters);
	},
	
	setupDisplay: function() {
		return new SelectFieldDisplayHandler("Sort By", this);
	},
	
	facetChanged: function() {
		this.parent.poolContainer.trigger({
			type: "sortFacetChanged",
			changedFacet: this
		});
	}
})

var ResetFacet = ProductPoolFacet.extend({
	
	init: function(){
		this._super("resetFacet", "FILTER", {});
	},
	
	setupDisplay: function() {
		return new ButtonDisplayHandler("Reset", this);
	},
	
	facetChanged: function() {
		this.parent.poolContainer.trigger("resetFacets");
	}
})









