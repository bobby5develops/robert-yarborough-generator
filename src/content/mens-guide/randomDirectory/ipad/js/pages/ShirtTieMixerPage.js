var ShirtTieMixerPage = MenGuideStylePage.extend({


    /* Initialize any variables that will be needed */
    init:function (params) {

        var params = {
            title:"shirtTieMixer",
            url:"html/shirtTieMixer.html",
            navId:"shirtTieMixer",
            preLoad:[
                /*"images/shirtTieMixer/sub.png",
                "images/shirtTieMixer/buy.png",
                "images/shirtTieMixer/ties.png",
                "images/shirtTieMixer/tiesOn.png",
                "images/shirtTieMixer/slim.png",
                "images/shirtTieMixer/slimOn.png",
                "images/shirtTieMixer/classicOn.png",
                "images/shirtTieMixer/classic.png"*/

            ]
        };

        this._super(params);

    },

    /* Setup your event handlers */
    setup:function () {
        this._super();
        var self = this;

        var pageBuild = new AnimationEngine();
        var self = this;

        /*  if (finder.isTablet() == true) {

         pageBuild.animate($("#title", this.parentDiv), {opacity:0, x:-300, scale:1.15}, {opacity:1, x:0, scale:1}, {
         easing:"easeOutQuint",
         duration:1500,
         delay:0,
         delayEach:250});

         pageBuild.animate($("#sub", this.parentDiv), {opacity:0, x:300, scale:1.15}, {opacity:1, x:0, scale:1}, {
         easing:"easeOutQuint",
         duration:1500,
         delay:0,
         delayEach:250});


         ////////  setup pool classic
         this.poolContainer = jQuery("#classicpool", this.parentDiv);
         this.productPool = new ProductPool({
         container:this.poolContainer,
         scrollable:true,
         itemsPerPage:24,
         template:"mixerPoolShirt"
         });
         ////////  setup pool slim shirt
         this.poolContainer2 = jQuery("#slimpool", this.parentDiv);
         this.productPool2 = new ProductPool({
         container:this.poolContainer2,
         scrollable:true,
         itemsPerPage:24,
         template:"mixerPoolShirt"
         });
         ////////  setup pool ties
         this.poolContainer3 = jQuery("#tiespool", this.parentDiv);
         this.productPool3 = new ProductPool({
         container:this.poolContainer3,
         scrollable:true,
         itemsPerPage:24,
         template:"mixerPoolTie"
         });


         // load pool classic
         var poolKey = "classic_shirts";
         var quiz_pool_path = poolRootVotes + poolKey;
         this.productPool.loadPool(quiz_pool_path);
         // load pool classic
         var poolKey2 = "fitted_shirts";
         var quiz_pool_path2 = poolRootVotes + poolKey2;
         this.productPool2.loadPool(quiz_pool_path2);
         // load pool classic
         var poolKey3 = "ties";
         var quiz_pool_path3 = poolRootVotes + poolKey3;
         this.productPool3.loadPool(quiz_pool_path3);

         this.poolContainer.bind("poolLoaded", function () {
         var shoppingArray = [];
         ///////// get attr from image place on stage and make it pinchZoomable

         jQuery("#classicpool img, #slimpool img, #tiespool img").click(function () {
         var imagePath = $(this).attr("src");
         var codeSrc;
         if ($(this).hasClass("shirt")) {
         codeSrc = "<img class='actor shirt' src='" + imagePath + "'>";
         }
         ;
         if ($(this).hasClass("BOWTIE")) {
         codeSrc = "<img class='actor BOWTIE' src='" + imagePath + "'>";
         }
         ;
         if ($(this).hasClass("Regular")) {
         codeSrc = "<img class='actor Regular' src='" + imagePath + "'>";
         }
         ;
         $("#stage").append(codeSrc);
         new PinchZoomable("#stage .actor");
         ///// ad to shopping array
         shoppingArray.push(this.id);
         //alert($(this.parentDiv.parentDiv))
         });


         jQuery("#buyit", this.parentDiv).click(function () {
         self.clickTracking("matchmakerbuy");
         if (shoppingArray.length == 0) {
         alert("Shoppin cart is empty, drag products to frame");
         } else {
         var shoppingString = shoppingArray.join(",");
         finder.skava.quickView({productId:shoppingString});
         }
         ;
         });

         jQuery("#restart", this.parentDiv).click(function () {
         shoppingArray = [];
         $("#stage").html("");
         });

         })
         }
         else {
         */
        try {
            showOverlay();
        } catch (e) {
            console.log("Show overlay not available");
        }
        //}

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
        try {
            closeOverlay()
        } catch (e) {
            console.log("close overlay not available");
        }
        this._super();


    },

    /* Handle tracking for this page */
    handleTracking:function () {
        this._super();
    }


})

