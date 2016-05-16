var SuitQuizPage = MenGuideStylePage.extend({


    /* Initialize any variables that will be needed */
    init:function (params) {

        var params = {
            title:"suitQuiz",
            url:"html/suitQuiz.html",
            navId:"suitQuiz",

            preLoad:[
                "images/suitQuiz/q1.jpg",
                "images/suitQuiz/modelLeft.jpg",
                "images/suitQuiz/modelRight.jpg",
                "images/suitQuiz/title.png",
                "images/suitQuiz/line.png",
                "images/suitQuiz/q4.png",
                "images/suitQuiz/q5.png",
                "images/suitQuiz/q6.png",
                "images/suitQuiz/q7.png",
                "images/suitQuiz/q8.png",
                "images/suitQuiz/q9.png",
                "images/suitQuiz/q10.png",
                "images/suitQuiz/q11.png",
                "images/suitQuiz/q12.png",
                "images/suitQuiz/checkall.jpg"
            ]
        }

        this._super(params);
    },

    /* Setup your event handlers */
    setup:function () {
        this._super();

        var self = this;
        //var answer0;
        //var answer1;
        //var answer2;

        this.ieCrappy = false;
        if (($.browser.msie) && (jQuery.browser.version == 7.0 || jQuery.browser.version == 8.0)) {
            this.ieCrappy = true;
        }

        jQuery(".menuBotton", this.parentDiv).click(function (event) {
            //alert(this.id);

            var $this = $( event.currentTarget );
            $('input[type=radio]', this).attr("checked", true);

            if (self.ieCrappy === true) {
                $this.siblings(".menuBotton").removeClass("selected");
                $this.addClass("selected");
            }
            
            //$('label', this).addClass("erc");
            //self.showOverImage();
        });

        jQuery("#submit", this.parentDiv).click(function () {
            self.checkFormSubmission();

        });

        $('#submit', this.parentDiv).mouseover(function () {
            $(this).css('cursor', 'pointer');
        });


        /*$('.pop', this.parentDiv).mouseover(function () {
            var offset = $(this).offset();
            //alert(offset.top);
            $("#popImage").css({ position:'absolute', left:245, top:offset.top - 210 })
            self.showOverImage();
            $("#popImage").show();
        })
        $('.pop', this.parentDiv).mouseout(function (e) {
            $("#popImage").hide();
        }) */

        if (!finder.simpleAnime) {
            var pageBuild = new AnimationEngine();

            $("#popImage").hide();

            pageBuild.animate($(".model", this.parentDiv), {opacity:0, x:-900}, {opacity:1,x:0},{
                easing: "easeOutQuint",
                duration: 1500,
                delay:0,
                delayEach:500});

            pageBuild.animate($(".item", this.parentDiv), {opacity:0, x:500}, {opacity:1,x:0},{
                easing: "easeOutQuint",
                duration: 1200,
                delay:1000,
                delayEach:200});
        }

    },

    /* Handle Deeplinking */
    processParams:function () {
        this._super();

/*
        var self = this;
        var answer0;
        var answer1;
        var answer2;

        jQuery(".menuBotton", this.parentDiv).click(function () {
            //alert(this.id);
            $('input[type=radio]', this).attr("checked", true);
            //$('label', this).addClass("erc");
            //self.showOverImage();
        })
*/


    },

    /* Transition your page in */
    transitionIn:function () {
        this._super();
        /*
        self.answer0 = jQuery("input[name=answer0]:checked").val();
        self.answer1 = jQuery("input[name=answer1]:checked").val();
        self.answer2 = jQuery("input[name=answer2]:checked").val();
*/

    },

/*
    showOverImage:function () {
        $('#popImage img').hide();
        self.answer0 = jQuery("input[name=answer0]:checked").val();
        self.answer1 = jQuery("input[name=answer1]:checked").val();
        self.answer2 = jQuery("input[name=answer2]:checked").val();

        var who = '#' + self.answer2 + self.answer1;
        console.log(who);
        $(who).show();

    },
*/

    checkFormSubmission:function () {
        var answer0 = jQuery("input[name=answer0]:checked").val();
        if (answer0 == undefined) answer0 = "";

        var answer1 = jQuery("input[name=answer1]:checked").val();
        if (answer1 == undefined) answer1 = "";

        var answer2 = jQuery("input[name=answer2]:checked").val();
        if (answer2 == undefined) answer2 = "";

        if (answer0 == "" || answer1 == "" || answer2 == "") {
            alert("Please select an answer for each question.");
        } else {
            window.location = "#/suitQuizPool/" + answer0 + "/" + answer1 + "/" + answer2;
        }
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

