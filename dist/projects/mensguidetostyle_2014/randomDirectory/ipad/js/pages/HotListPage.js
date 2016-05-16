var HotListPage = MenGuideStylePage.extend({


    /* Initialize any variables that will be needed */
    init:function (params) {

        var params = {
            title:"hotList",
            url:"html/hotList.html",
            navId:"hotList",
            navHighlight:"howtowearit",
            preLoad:[
                "images/hotList/bags.png",
                "images/hotList/wallets.png",
                "images/hotList/glasses.png",
                "images/hotList/suit.png",
                "images/hotList/ties.png",
                "images/hotList/watches.png",
                "images/hotList/title.png"
            ]
        };

        this._super(params);

    },

    /* Setup your event handlers */
    setup:function () {
        this._super();

        var self = this;
        var pageBuild = new AnimationEngine();


        pageBuild.animate($(".item", this.parentDiv), {scale:0}, {scale:1}, {
            easing:"easeOutQuint",
            duration:1500,
            delay:0,
            delayEach:250});

        pageBuild.animate($(".shopall", this.parentDiv), {scale:0}, {scale:1}, {
            easing:"easeOutQuint",
            duration:1500,
            delay:1500,
            delayEach:250});

        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });

        jQuery(".item a, #.shopall a", this.parentDiv).click(function (event) {
            event.preventDefault();
            self.loadPoolCOntent( $(this).closest('div') );
            $("#poolBackground").show();
        });

        /// show pool only after itmes are loaded
        this.poolContainer.bind('poolPageChanged', function(){
            
        });

        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });


    },

    loadPoolCOntent:function ( $obj ) {
        var poolname = $obj.attr('poolname');
        var headline = $obj.attr('alt');
        var config = $obj.attr('config');

        // change title on top box
        $("#h1").html(headline);
        // load pool
        var quiz_pool_path = poolRootVotes + poolname;
        console.log("----->>>>> quiz_pool_path: " + quiz_pool_path);
        this.productPool.loadPool(quiz_pool_path);
        //// fire tracking
        var trackingValue = "hotList_" + config;
        console.log(">>>>>>>>>> "+trackingValue);
        this.clickTracking(trackingValue);
    },

    /* Handle Deeplinking */
    processParams:function () {
        this._super();

    },

    /* Transition your page in */
    transitionIn:function () {
        this._super();

    },

    /* Transition your page Out */
    transitionOut:function () {
        this._super();

    },

    /* Handle tracking for this page */
    handleTracking:function () {
        this._super();
    }


})

