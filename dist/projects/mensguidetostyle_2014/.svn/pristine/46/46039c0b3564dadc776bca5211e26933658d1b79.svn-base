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

var ProductTabFacet = ProductPoolFacet.extend( {
	init: function(filters) {
		this._super("productTabs", "FILTER", filters);
	},
	setupDisplay: function() {
		// The dropdown title is here. 
		return new TabsDisplayHandler("Shop All", this);
		          	
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


var ProductGroupFacet = ProductPoolFacet.extend({
	
	init: function(filters) {
		this._super("productGroup", "FILTER", filters);
	},
		
	setupDisplay: function() {
		// The dropdown title is here. 
		return new SelectFieldDisplayHandler("Shop", this);
		          	
	}	
})

var SpecialSizesFacet = ProductPoolFacet.extend({
	
	init: function(filters) {
		this._super("specialSizes", "FILTER", filters);
	},
		
	setupDisplay: function() {
		// The dropdown title is here. 
		return new TabsDisplayHandler("Shop All", this);
		          	
	}	
})


var TabFilterFacet = ProductPoolFacet.extend({
	
	init: function(filters){
				
		this._super("tabFilterFacet", "FILTER", filters);
	},
	
	setupDisplay: function() {
		handler = new TabsDisplayHandler("Category", this);
		return handler;
	}
})

var LinksFilterFacet = TabFilterFacet.extend({
	
	facetChanged: function() {
		var values = this.displayHandler.getSelectedValues();

		if (values.length > 0) {
			var myValue = values.pop();
			
			var url = this.getFilters()[myValue].url;
			window.location = url;
		}
	}
	
})


var ColorSelectFacet = CategoryFilterFacet.extend({
	
	init: function() {
		this.category = "pfeed_color";
		this._super("colorSelecter", "FILTER", {});
	},
	
	setupDisplay: function() {
		return new TabsDisplayHandler("Shop By Color", this);
	}
})



var MostGiftableFacet = ProductPoolFacet.extend({
	
	init: function(){
		var filters = {
			"cashmere": {
				label: "Cashemre",
				filter: [{
					pfeed_fabric: "Cashmere"
				}]
			},
			"wool": {
				label: "Wool",
				filter: [{
					pfeed_fabric: "Wool"
				}]
			}
		}
		
		
		this._super("giftableFacet", "FILTER", filters);
	},
	
	setupDisplay: function() {
		return new ToggleButtonDisplayHandler("Most Giftable", this);
	}
})


var BrandSelectFacet = CategoryFilterFacet.extend({
	
	init: function() {
		this.category = "pfeed_brand";
		this._super("brandSelect", "FILTER", {});
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
		this.parent.poolContainer.trigger("sortFacetChanged");
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









