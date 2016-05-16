var HomePage = MenGuideStylePage.extend({


    /* Initialize any variables that will be needed */
    init:function (params) {

        var params = {
            title:"Home Page",
            url:"html/home.html",
            navId:"home",
            preLoad:[
                "images/home/main_photo.jpg",
                "images/home/man1.jpg",
                "images/home/man2.jpg",
                "images/home/man3.jpg"
            ]
        }

        this._super(params);

    },

    /* Setup your event handlers */
    setup:function () {
        this._super();


    },

    /* Handle Deeplinking */
    processParams:function () {
        this._super();


    },

    /* Transition your page in */
    transitionIn:function () {


        // query the dom
        var mainitem = $("#BW", this.parentDiv);
        var sideItems = $('.menuBotton a', this.parentDiv);

        TweenMax.fromTo(mainitem, .7, {css:{opacity:0, left:-100}, ease:Power3.easeOut}, {css:{opacity:1, left:0}});

        TweenMax.staggerFrom(sideItems, 0.6, {css:{opacity:0, left:"+=100"}, ease:Power3.easeOut}, 0.2);

////        // avoiding timing params in greensock because of iOS6
//        var t1 = setTimeout(function(){
//            TweenMax.from(titleItem, .7, {css:{opacity:0, top:-150}, ease:Power3.easeOut});
//            clearTimeout(t1);
//        } , 200);


        $("#white").hide();

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

