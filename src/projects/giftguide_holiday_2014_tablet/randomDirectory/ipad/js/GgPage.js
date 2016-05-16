
var GgPage = FinderPage.extend({

    // hack in something to kill all transition out delays from half a second to 1 millisecond
    init: function(params){
        this._super(params);
        this.transitionOutDelay = 1;
    },

	getHighlight: function() {
		return "homepage";
	},
	
	setup: function() {
		this._super();
		
		this.parentDiv = jQuery(".finderPage#" + this.navId, "#pageContainer");
		/*
        var container = jQuery('#footerContainer');
        var footer = container.html();
        this.parentDiv.append(footer);
        container.css({ height: "0" });
		*/
	},

	processParams: function() {
		this._super();
		this.handleTracking();
	},
	
	handleTracking: function() {
	}

});

