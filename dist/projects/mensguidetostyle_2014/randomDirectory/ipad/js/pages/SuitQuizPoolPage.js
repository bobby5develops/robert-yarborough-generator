var SuitQuizPoolPage = MenGuideStylePage.extend({


    /* Initialize any variables that will be needed */
    init:function (params) {

        var params = {
            title:"suitQuizPool",
            url:"html/suitQuizPool.html",
            navId:"suitQuizPool",
            navHighlight:"suitQuiz",
            preLoad:[
                "images/suitQuizPool/quiz_title.png",
                "images/suitQuizPool/suitQuizPool_image.gif",
                "images/transparent.png",
                "images/suitQuizPool/model1.jpg",
                "images/suitQuizPool/model2.jpg"
            ]
        }

        this._super(params);

    },

    /* Setup your event handlers */
    setup:function () {
        this._super();

        var self = this;

        this.poolContainer = jQuery("#quiz_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing",
            showMoreOnHover:false
        });

        this.poolContainer.bind("sortFacetChanged", function() {
            self.clickTracking("suitQuizPoolquizSorting");
        });

        this.poolContainer.bind("resetFacets", function() {
            self.clickTracking("suitQuizPoolquizReset");
        });

        //this.sidebar = jQuery("#sidebarImage", this.parentDiv);
        this.header = jQuery("#headerImage", this.parentDiv);

        $('#quiz_quizAgain', this.parentDiv).click(function () {
            // track for a click on quiz again
            self.clickTracking("suitQuizPoolquizAgain");
        });

        /* var mainOn = false;
        function slideShow() {
            if(!mainOn){
                jQuery("#slide1").fadeOut(2000);
                mainOn = true
            }else{
                jQuery("#slide1").fadeIn(2000);
                mainOn = false
            }
        }
        setInterval(slideShow,7000); */
    },

    /* Handle Deeplinking */
    processParams:function () {
        this._super();
        var data = finder.getConfig().pool["quiz"];
        //var quiz_result = finder.getConfig().tracking.swimQuiz["results"];
        //alert(quiz_result);
        //$("<img src='" + data.sidebar + "'>").hide().appendTo(this.sidebar.empty()).load(function () {
        //    $(this).fadeIn()
        //});
        $("<img src='" + data.header + "'>").hide().appendTo(this.header.empty()).load(function () {
            $(this).fadeIn()
        });


        // init facets
        var facet1 = new SortingFacet();
        this.productPool.addFacet(facet1);

        if (data.hasOwnProperty("shopby")) {
            var facet2 = new GenericDropDownFacet(data.shopby, "all", "shop by");
            this.productPool.addFacet(facet2);
        }

        var facet3 = new ResetFacet();
        this.productPool.addFacet(facet3);


        // load pool
        var poolKey = this.params.argc.join("~");
        //if (poolKey) poolKey = 'q00~q10~q20';
        console.log('this.params.argc', this.params.argc);
        console.log('poolKey', poolKey);
        var quiz_pool_path = poolRootQuiz + poolKey;
        console.log("----->>>>> quiz_pool_path: " + quiz_pool_path);
        this.productPool.loadPool(quiz_pool_path);
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

