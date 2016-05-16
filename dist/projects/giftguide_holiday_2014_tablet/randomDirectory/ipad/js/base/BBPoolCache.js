var BBPoolCache = ( function() {
	// flip to true if you want pools to be cached
	var wantCaching = true;
	var cache = {};

	function storePoolByName( poolArray, name ) {
		if (wantCaching === true) {
			if ( !cache[ name ]  ) {
				cache[ name ] = poolArray;
			}
		}
	}

	function getPoolByName( name ) {
		var poolArray = -1;
		if ( cache[ name ]  ) {
			poolArray = cache[ name ];
		}
		return poolArray;
	}

    function getAllPoolNames(){
        return _.keys(cache)
    }

	// table of contents
	return {
		storePoolByName: storePoolByName,   // Keith
		getPoolByName: getPoolByName,       // Keith
        getAllPoolNames : getAllPoolNames   // JDavis
	};



} )();