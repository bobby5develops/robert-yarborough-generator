var poolModel = ( function() {
	var alpha = 'aaa';
	var beta = 'bbb';
	var poolData = [];
	var currentData = [];
	var totalItems = 0;
	var pageIndex = 0;
	var PAGE_SIZE = 6;
	var prevPageSize;
	var pageSize = PAGE_SIZE;
	var currentSort;
	var defaultSort = function(o) { return -o.insertIndex; };

	function testFunction() {
		alert("TEST TEST TEST");
	}

	function init( obj ) {
		//alert("Wheeeee");
		if ( obj[ "PAGE_SIZE" ] ) {
			PAGE_SIZE = obj[ "PAGE_SIZE" ];
			pageSize = PAGE_SIZE;
		}
		for ( var prop in obj ) {
			if( obj.hasOwnProperty( prop ) ){
				
			}
		}
	}

	function loadPool( url ) {
		$( poolModel ).trigger( "loading" );
		var poolRequest = $.ajax({
			type: "GET",
			url: url,
			dataType: "jsonp",
			timeout: 30000,
			tryCount: 0,
			tryLimit: 2,
			async: true,
			success: function( data, textStatus, jqXHR ){
				//alert("SUCCESS");
				$( poolModel ).trigger( "loaded" );
				console.log( data, " DATA");
				processData( data );
				
				//insertTheData( theData );
				//if(hijack) data = hijack(data);
				//self.insert(data);
				//self.loadNext();
				//console.log('loaded',arguments);
			},
			error: function( request, type, errorThrown ){
				//alert("ERROR");
				console.error( 'error loading', arguments );
				//self.loadNext();
			}
		});
	}

	function processData( data ) {
		if( data.entries.length ) {
			for( var i=0; i<data.entries.length; i++){
				var entry = {};
				entry.pfeed_priceforfilters = parseFloat(data.entries[i].properties.pfeed_priceforfilters);
				//entry.imageWidth = imageWidth;
				// LETS FIX THIS SOMEWHERE PLEASE
				entry.image_fullImage = data.entries[i].fileUrl;
				entry.pfeed_url = data.entries[i].properties.pfeed_url;
				entry.entryid = data.entries[i].entryId;
				entry.pfeed_brand = data.entries[i].properties.pfeed_brand;
				entry.pfeed_id = data.entries[i].properties.pfeed_id;
				entry.pfeed_productgroup = data.entries[i].properties.pfeed_productgroup;
				entry.pfeed_price1 = data.entries[i].properties.pfeed_price1;
				entry.pfeed_price2 = data.entries[i].properties.pfeed_price2;
				entry.pfeed_price3 = data.entries[i].properties.pfeed_price3;
				entry.pfeed_name = data.entries[i].properties.pfeed_name;
				entry.label = data.entries[i].properties.pfeed_name;
				entry.pfeed_name = data.entries[i].properties.pfeed_name;
				entry.votes = 0;
				entry.insertIndex = i;
				poolData.push( entry );
			}
		}
		totalItems = poolData.length;
		if (!currentSort) currentSort = defaultSort;
		setCurrentData();

		$( poolModel ).trigger( "processed" );
	}

	function setCurrentData() {
		// reverses data
		var sortedData = sort( poolData, currentSort );
		currentData = poolData.slice( pageIndex * pageSize, pageIndex * pageSize + pageSize );
		$( poolModel ).trigger( "changed" );
	}

	function sort( array, f ) {
		var sortedData = _.sortBy( array, f );
		return sortedData;
	}

	function incrementPage() {
		prevPageSize = pageSize;

		pageSize =  (pageSize + PAGE_SIZE > totalItems ) ? totalItems : pageSize + PAGE_SIZE;
		console.log( pageSize );
		if (prevPageSize !== pageSize) {
			setCurrentData();
		}
	}

	function returnPoolData() {
		return poolData;
	}

	function returnCurrentData() {
		return currentData;
	}

	// table of contents
	return {
		test: testFunction,
		init: init,
		loadPool: loadPool,
		incrementPage: incrementPage,
		returnPoolData: returnPoolData,
		returnCurrentData: returnCurrentData,
	};

} )();