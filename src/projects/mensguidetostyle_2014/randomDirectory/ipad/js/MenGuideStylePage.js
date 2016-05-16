var MenGuideStylePage = FinderPage.extend({

	getHighlight: function() {
		return "homepage";
	},

	setup: function() {
		this._super();

		this.parentDiv = jQuery(".finderPage#" + this.navId, "#pageContainer");




        // for fitguide pages there are maps with area elements that have the addingtrack attribute
        $('[addingtrack]').click(function(){
            finder.fitguideimagemaptracking( $(this) );
        });




    },

	processParams: function() {
		this._super();
		this.handleTracking();
	},

	handleTracking: function() {
	    //console.log('handleTracking()');
        // see if there is tracking specified for this url...
        try {
            var tracking = finder.getConfig().tracking[this.navId];
            finder.skava.handleTracking(this, tracking);
        } catch(e) {
            // we don't have tracking for this page...
        }
	},

    /* Transition your page in */
    transitionIn: function() {
        this._super();

        var pageBuild = new AnimationEngine();

        //TRANSITION IN NAVIGATION
        if (!finder.simpleAnime) {
            pageBuild.animate($(".prevNavButton, .nextNavButton", this.parentDiv), {opacity:0}, {opacity:1}, {
                easing:"easeOutQuint",
                duration:2500,
                delay:1000,
                delayEach:0
            });
        }

        // fix the iFrame
        finder.resizePage();
        var t = setTimeout(function(){
            clearTimeout(t);
            finder.resizePage();
        } , 2000);

    },

    clickTracking: function(trackingval) {
        //console.log('clickTracking()');
        try {
            var tracking = finder.getConfig().tracking[trackingval];
            //console.log(">>>>>>>>>>>>>>>>>>>>>>>> tracking "+tracking)
            finder.skava.handleTracking(this, tracking);
        } catch(e) {
            // we don't have tracking for this page...
        }
    },

    createHotSpotV2:function (configListName, container) {
        var hotSpotDataFromConfig = finder.getConfig().hotspots[configListName];
        console.log( 'HOTSPOT!!!!!!', hotSpotDataFromConfig );

        var shareImage = "";
        if (hotSpotDataFromConfig[0].shareimage) {

            shareImage = hotSpotDataFromConfig[0].shareimage;
        }

        var drawFunction = function (item) {
            console.log(item.description)
            var text = "<div id='"+item.openDirection+"'><p><span class='title'>" + item.title + '</p>'+ item.description + "<div class='shopNow' productId='"+item.productId+"' pageid='"+item.pageid +"' catid='"+item.catid+"' role='skavaInteropQuickView'  track='QuickView'><img src='" + finder.getConfig().assetsDirectory + "images/wearsuit/shopthislook.png'></div><div class='sharing' data-share-image='" + shareImage + "'><div class='share' role='skavaInteropShareFacebook'  track='fb' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/fb.png'></div><div class='share' role='skavaInteropShareTwitter' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/twitter.png' track='twitter'></div></div><div class='minus'></div></div>";

            switch(configListName){
                case 'suitsCK':
                    var text = "<div id='"+item.openDirection+"'><p><span class='title'>" + item.title + '</p>'+ item.description + "<div class='shopNow' productId='"+item.productId+"' pageid='"+item.pageid +"' catid='"+item.catid+"' role='skavaInteropQuickView' track='QuickView'><img src='" + finder.getConfig().assetsDirectory + "images/wearsuit/shopthislook.png'></div><div class='shopNow'  style='padding-top:5px;' productId='"+item.productId+"' pageid='"+item.pageid +"' catid='"+item.catid+"  role='skavaInteropQuickView'><img id='shopall' src='" + finder.getConfig().assetsDirectory + "images/wearsuit/shopsuits.png'></div><div class='sharing' data-share-image='" + shareImage + "'><div class='share'  track='fb' track='fb' role='skavaInteropShareFacebook' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/fb.png' onclick=\"finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'" + item.fbid + "',catid:'" + item.catid + "'})\"></div><div class='share' role='skavaInteropShareTwitter' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/twitter.png' onclick=\"finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'" + item.twitterid + "',catid:'" + item.catid + "'})\"></div></div><div class='minus'></div></div>";
                    break;
                case 'suitsMK':
                var text = "<div id='"+item.openDirection+"'><p><span class='title'>" + item.title + '</p>'+ item.description + "<div class='shopNow' productId='"+item.productId+"' pageid='"+item.pageid +"' catid='"+item.catid+"'  role='skavaInteropQuickView' track='QuickView'><img src='" + finder.getConfig().assetsDirectory + "images/wearsuit/shopthislook.png'></div><div class='shopNow' style='padding-top:5px;' productId='"+item.productId+"' pageid='"+item.pageid +"' catid='"+item.catid+"'><img id='shopdress' src='" + finder.getConfig().assetsDirectory + "images/wearsuit/shopdress.png'></div><div class='sharing' data-share-image='" + shareImage + " ><div class='share' track='fb' role='skavaInteropShareFacebook' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/fb.png'  track='fb' onclick=\"finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'" + item.fbid + "',catid:'" + item.catid + "'})\"></div><div class='share' role='skavaInteropShareTwitter' track='Twitter' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/twitter.png' onclick=\"finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'" + item.twitterid + "',catid:'" + item.catid + "'})\"></div></div><div class='minus'></div></div>";
                    break;
                case 'boldbuds':
                    var text = "<div id='"+item.openDirection+"'><p><span class='title'>" + item.title + '</p>'+ item.description + "<div class='shopNow' productId='"+item.productId+"' pageid='"+item.pageid +"' catid='"+item.catid+"'  role='skavaInteropQuickView' track='QuickView'><img src='" + finder.getConfig().assetsDirectory + "images/wearsuit/shopthislook.png'></div><div class='shopNow' style='padding-top:5px;' productId='"+item.productId+"' pageid='"+item.pageid +"' catid='"+item.catid+"'><img id='shopall' src='" + finder.getConfig().assetsDirectory + "images/wearsuit/shopsuits.png'></div><div class='sharing' data-share-image='" + shareImage + "'><div class='share'  track='fb' role='skavaInteropShareFacebook' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/fb.png'  track='fb' onclick=\"finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'" + item.fbid + "',catid:'" + item.catid + "'})\"></div><div class='share' role='skavaInteropShareTwitter' track='Twitter' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/twitter.png' onclick=\"finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'" + item.twitterid + "',catid:'" + item.catid + "'})\"></div></div><div class='minus'></div></div>";
                    break;
                default:
                    var text = "<div id='"+item.openDirection+"'><p><span class='title'>" + item.title + '</p>'+ item.description + "<div class='shopNow' track='shopnow' productId='"+item.productId+"' pageid='"+item.pageid +"' catid='"+item.catid+"' role='skavaInteropQuickView' track='QuickView'><img src='" + finder.getConfig().assetsDirectory + "images/wearsuit/shopthislook.png'></div><div class='sharing' data-share-image='" + shareImage + "'><div class='share' role='skavaInteropShareFacebook' config='site' ><img src='" + finder.getConfig().assetsDirectory + "images/fb.png' track='fb' onclick=\"finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'" + item.fbid + "',catid:'" + item.catid + "'})\"></div><div class='share' role='skavaInteropShareTwitter' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/twitter.png'  track='twitter' onclick=\"finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'" + item.twitterid + "',catid:'" + item.catid + "'})\"></div></div><div class='minus'></div></div>";
            }
            return text;
        };
        new HotSpot("DATA", hotSpotDataFromConfig, container, drawFunction, "blackHotspot");

        // share
        container.find('.hotspot').find('.shareThis').click(
            function(){
                finder.skava.share(finder.getConfig().sharing.site);
            }
        );

    }


});

