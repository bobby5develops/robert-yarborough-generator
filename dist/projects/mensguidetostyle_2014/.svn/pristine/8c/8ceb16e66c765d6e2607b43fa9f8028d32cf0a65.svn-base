var Dressing101Page = MenGuideStylePage.extend({


    /* Initialize any variables that will be needed */
    init:function (params) {

        var params = {
            title:"dressing101",
            url:"html/dressing101.html",
            navId:"dressing101",
            preLoad:[
                "images/dressing101/bowite.jpg",
                "images/dressing101/checklist.jpg",
                "images/dressing101/classic.jpg",
                "images/dressing101/dressing101.png",
                "images/dressing101/halfWindsor.jpg",
                "images/dressing101/main-1.jpg",
                "images/dressing101/main-2.jpg",
                "images/dressing101/main-3.jpg",
                "images/dressing101/shirt.png",
                "images/dressing101/sub.png",
                "images/dressing101/suit.png",
                "images/dressing101/tile.png",
                "images/dressing101/transparentGrey.png",
                "images/dressing101/windsor.jpg"
            ]
        }

        this._super(params);

    },

    /* Setup your event handlers */
    setup:function () {
        this._super();
        var pageBuild = new AnimationEngine();
        var self = this;
        new HotSpot(".hotspot");


        /////// intro animation
        if (!finder.simpleAnime) {
            var pageBuild = new AnimationEngine();

            pageBuild.animate($("#main img", this.parentDiv), {opacity:0, y:300, scale:1.15}, {opacity:1, y:0, scale:1}, {
                easing:"easeOutQuint",
                duration:1250,
                delay:0,
                delayEach:250});
        }


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


});

