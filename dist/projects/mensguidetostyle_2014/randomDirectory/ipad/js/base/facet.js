

var Facet = Class.extend({

	init: function(id, label, filter, display) {
		this.filter = filter;
		this.id=id;
		this.label = label;
		this.display = display;
		this.parent = null;
		this.selected = false;
	},
	
	
	getFilter: function() {
		return filter;
	},
	
	isOn: function() {
		return this.selected;
	},
	
	setParent: function(parent) {
		this.parent = parent;
	},
	
	toggle: function() {
		
		this.selected = !this.selected;
		
		try {
			this.checkbox[0].checked = this.selected;
		} catch(e) { }
		
		this.checkbox.removeClass("selected");
		
		if (this.selected)
			this.checkbox.addClass("selected");
			
		this.parent.facetChanged();
				
	},
	
	setCheckBox: function(check) {
		this.checkbox = check;
		jQuery(check).click(jQuery.proxy(this.toggle, this));
	}
	
});

var FacetSorter = Class.extend( {
	init: function() {
		this.options = {};
	},
	
	addOption: function (label, filter) {
		this.options[label] = filter;
	},
	
	draw: function() {
		
		var self = this;
		
		var div = jQuery("<div class='facetSorter'>Sort By </div>");
		
		var select = "<select name=facterSorter>";
		for(i in this.options) {
			select += "<option value='" + i + "'>" + i + "</option>";
		}
		select += "</select>";
		
		select = jQuery(select)
		
		select.change(function() {
			self.changed();
		});
		
		div.append(select);
		this.select = select;
		return div;
	},
	
	changed: function() {
		console.log("sorting changed");
		this.parent.sortChanged();
	},
	
	getSortFilter: function() {
		return this.options[jQuery(this.select).val()];
	},
	
	setParent: function(parent) {
		this.parent = parent;
	}
})


var FacetCategory = Class.extend( {
	
	init: function(id, label, display) {
		this.id = id;
		this.label = label;
		this.display = display;		
		this.facets = []
	}, 
	
	
	addFacet: function(facet) {

		facet.setParent(this);
		this.facets.push(facet);
	},
	
	setParent: function(parent) {
		this.parent = parent;
	},
	
	draw: function() {
		
		var div = jQuery("<div class='facetContainer'></div>");
		var h2 = jQuery("<h2 class='facetTitle'>" + this.label + "</h2>");
		var ul =  jQuery("<ul class='facetCategory' id='" + this.id + "'></ul>");
		for (i = 0; i < this.facets.length; i++)
		{
			var facet = this.facets[i];
			var li = jQuery("<li class='facet'></li>");
			var input = jQuery("<input type='checkbox' class='facetCheckbox' id='facet_" + facet.id + "'>");
			var label = "<label for='facet_" + facet.id + "'>" + facet.label + "</label>";
			
			facet.setCheckBox(input);
			
			li.append(input);
			li.append(label);
			ul.append(li);
		}
		
		div.append(h2);
		div.append(ul);
		
		return div;
	},
	
	facetChanged: function() {
		this.parent.categoryChanged();
	}
	
});

var FacettedResults = Class.extend ( {
	init: function(db, containers ) {
		this.facetContainer = containers.facetContainer;
		this.resultsContainer = containers.resultsContainer;
		this.paginationContainer = containers.paginationContainer;
		this.sortingContainer = containers.sortingContainer;
		
		this.db = db;
		this.facetCategories=[];
		this.setupFacets();
		
		this.setupListeners();
	},
	
	categoryChanged: function() {
		this.filter();
	},
	
	sortChanged: function() {
		this.db.sort(this.sorter.getSortFilter());
		this.filter();
	},
	
	setupListeners: function() {
		self = this
		jQuery(this.paginationContainer + " .pageNumbers A[pageNum]").live("click", function() {
			self.showResultsPage(jQuery(this).attr("pageNum"));
		});
	},
	
	setupFacets: function() {
		
	},
	
	addFacetCategory: function(facetCategory) {
		facetCategory.parent = this;
		this.facetCategories.push(facetCategory);
	},
	
	mergeFilters: function ()
	{
		var filters = {};
		for (var i = 0; i < this.facetCategories.length; i++)
		{
			for (var j = 0; j < this.facetCategories[i].facets.length; j++)
			{

				if (this.facetCategories[i].facets[j].isOn())
					this.merge(filters, this.facetCategories[i].facets[j].filter);
			}
		}
		
		return filters;

	},
	
	merge: function(one, two) {
		for (var i in two)
		{
			if (!one[i])
			{
				one[i] = two[i];
			} else {
				for (var j in two[i])
				{
					if (!one[i][j])
					{
						one[i][j] = two[i][j];
					} else {
						jQuery.merge(one[i][j], two[i][j]);
					}
				}
			}
		}
	},
	
	filter: function() {
		var filters = this.mergeFilters();
		
		console.log(filters);
		
		jQuery(this.resultsContainer).html("");
		this.db.showFilteredResults(this.resultsContainer, "#productListing", filters);
		
		this.itemsFiltered();
	},
	
	itemsFiltered: function() {
		
		// build page numbers...
		// build paginated list...
		var items = jQuery(this.resultsContainer + " .productListing");
		
		jQuery(this.paginationContainer + " .itemsFound").html(items.length + " items found");
		
		var numPages = Math.ceil(items.length / this.itemsPerPage);
		jQuery(this.paginationContainer + " .pageNumbers").html("");
		if (numPages > 1) {
			for (i = 0; i < numPages; i++) {
				jQuery(this.paginationContainer + " .pageNumbers").append("<a href='javascript:void(0);' pageNum='" + i + "'>" + (i + 1) + "</a> ");
			}
		}
		this.showResultsPage(0);

	},
	
	showResultsPage: function(pageNum) {

		jQuery(this.paginationContainer + " .pageNumbers A").removeClass("selected");
		jQuery(this.paginationContainer + " .pageNumbers A[pageNum=" + pageNum+ "]").addClass("selected");
		
		jQuery(this.resultsContainer + " .productListing:visible").hide();
		jQuery(this.resultsContainer + " .productListing").slice(pageNum * this.itemsPerPage, pageNum * this.itemsPerPage + this.itemsPerPage).fadeIn();

	},
	
	display: function () {
		jQuery(this.facetContainer).html("");
		for (j = 0; j < this.facetCategories.length; j++)
		{
			var display = this.facetCategories[j].draw();
			jQuery(this.facetContainer).append(display);
		}
		
		jQuery(this.sortingContainer).html("").append(this.sorter.draw());
	},
	
	setSorter: function(sorter) {
		sorter.setParent(this);
		this.sorter = sorter;
	}
	
});

var SofaFacettedResults = FacettedResults.extend({
	setupFacets: function() {
		
		this._super();
		
		// setup sorting...
		var sorter = new FacetSorter();
		sorter.addOption("price: low to high", [{pfeed_priceforfilters: 'logicalasc'}]);
		sorter.addOption("price: high to low", [{pfeed_priceforfilters: 'logicaldesc'}]);
		this.setSorter(sorter);
		
		
		var materialCat = new FacetCategory("material", "Material", "list");
		
		materialCat.addFacet(new Facet("material_leather", "Leather", {pfeed_productgroup:{has:['ondemand_leather']}}));
		materialCat.addFacet(new Facet("material_fabric", "Fabric", {pfeed_productgroup:{has:['Fabric']}}));
		materialCat.addFacet(new Facet("material_microfiber", "Microfiber", {pfeed_productgroup:{has:['Microfiber']}}));
		
		this.addFacetCategory(materialCat);
		
		var featuresCat = new FacetCategory("features", "Features", "list");
		
		featuresCat.addFacet(new Facet("features_sleeper", "Sleepers", {pfeed_productgroup:{has:['Sleeper']}}));
		featuresCat.addFacet(new Facet("features_modular", "Modular", {pfeed_productgroup:{has:['Modular']}}));
		featuresCat.addFacet(new Facet("features_reclining", "Reclining", {pfeed_productgroup:{has:['Reclining']}}));
		
		this.addFacetCategory(featuresCat);
		
		
		this.itemsPerPage=24;
		
		
	}
})





 






