

var HomePage = RtwPage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {
		
		var params = {
				 	title: "home",
					url: "html/home.html",
					navId: "home",
					preLoad: [
						'images/home/fall_bg.jpg',
						'images/home/fall_trendreport.png'		
							  ]
				 }
		
		this.overHero = false;
//		this.animArray = ['IMG#defaultHero1','IMG#defaultHero2','IMG#defaultHero3'];
		this.animIndex = 0;
		
		this._super(params);
		
	},
	
	/* Setup your event handlers */
	setup: function() {
		this._super();
//		$('IMG.defaultHeroImg').fadeOut(0);
		
		
	},
	
	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();	
	},
	
	fadeInNext:function()
	{
		var self = this;
		if(!self.overHero){
			if(self.animIndex<self.animArray.length-1){
				self.animIndex++;
			} else {
				self.animIndex = 0;
			}
			if($.support.opacity){
				$('IMG.defaultHeroImg').fadeOut();
				$('IMG.defaultHeroImg#defaultHero'+(self.animIndex+1)).fadeIn();
			} else {
				$('IMG.defaultHeroImg').hide();
				$('IMG.defaultHeroImg#defaultHero'+(self.animIndex+1)).show();
			}
		}
		setTimeout($.proxy(this.fadeInNext,this),2000);
	},
	
	/* Transition your page in */
	transitionIn: function()
	{
		jQuery.fx.off = !$.support.opacity;
		
//		$('div#navContainer ul li').css({backgroundColor : '#000000'}); 
		
		var self = this;
	/*
		if($.support.opacity){
			$('IMG.heroBig',this.parentDiv).css({opacity:0});
		}
		$('IMG.defaultHeroImg').fadeOut(0);
		
		$('A.hit',this.parentDiv).hover(
		function(e){
			self.overHero = true;
			var id = $(this).attr('id').slice(3);

			if($.support.opacity){
				$('IMG.heroBig').removeClass('selected').stop().hide();
				$('IMG.heroBig#bigHero'+id).addClass('selected').stop().show().css({opacity:0}).animate({opacity:1},400);
				$('IMG.hero').stop().animate({opacity:.2},400);
				$('IMG.hero#hero'+id).stop().animate({opacity:1},400);
			} else {
				$('IMG.heroBig').removeClass('selected').hide();
				$('IMG.heroBig#bigHero'+id).addClass('selected').show();
				$('IMG.hero#hero'+id).show();
			}
			$('DIV#defaultHero').hide();
		},
		function(e){
			self.overHero = false;
			
			if($.support.opacity){
				$('IMG.heroBig').hide();
				$('IMG.hero').stop().animate({opacity:1},400);
			} else {
				$('IMG.heroBig').hide();
			}
			$('DIV#defaultHero').show();


		}
		);
//		this.fadeInNext();

*/
		this._super();
	},

	/* Transition your page in 
	transitionIn: function() {
		var homeMenuChild = $('.homeMenuChild'); 
		var homeHeroImage = $('.homeHeroImage'); 
		var homeTitle = $('#homeTitle ul li');
		var animatingIn = true; 
		var rotatingGirlNum = 0;
		var rotatingGirl; 
		
		$('div#navContainer ul li').css({backgroundColor : '#000000'}); 
		
		if($.support.opacity)
		{
			homeHeroImage.css({opacity : 0});
			homeMenuChild.css({opacity : 0, width : 0}); 
			homeTitle.css({opacity : 0}); 
		} else {
			homeHeroImage.hide();
			homeMenuChild.hide();
			homeTitle.hide();
		}
		console.log("opacity", $.support.opacity);
		rotatingGirl = setInterval(MoveGirl, 5000); 
		
		homeTitle.each(function(i){
			if($.support.opacity)
			{
				$(this).delay(200*i + 400).animate({opacity : 1}, 1200);
			} else {	
				$(this).delay(200*i + 400).show();
			}
		}); 
		
		homeMenuChild.each(function(i){
			var girlNum = 5;
			
			if($.support.opacity)
			{
				$(this).delay(50*i + 800).animate({opacity : 1, width : 93}, 700, 'easeOutSine', function(){
					if(i == girlNum)
						animatingIn = false;
				});
			} else {
				$(this).delay(50*i + 800).show();
				if(i == girlNum) animatingIn = false;
			}
		}); 
		
		if($.support.opacity)
		{
			$('#mainHero').delay(500).show().animate({opacity : 1}, 2200); 
		} else {
			$('#mainHero').delay(500).show(); 
		}

		
		homeMenuChild.mouseover(function(){
			clearInterval(rotatingGirl);
			var mouseGirl = $(this) 
			
			homeMenuChild.each(function(i){
				if($(this) == mouseGirl)
				rotatingGirlNum = i;
			});
			
			goAnimate(this.id); 
		}); 
		
		homeMenuChild.mouseout(function(){
			if(!animatingIn){
				rotatingGirl = setInterval(MoveGirl, 5000); 
				homeMenuChild.each(function(){
					if($.support.opacity)
					{
						$(this).stop().animate({opacity : 1}, 400);  
					} else {
						$(this).stop().show();
					}
				}); 
			}
		});
		
		function goAnimate(girl){
		 if(!animatingIn){
				var homeRollId = girl; 
				homeHeroImage.each(function(){
					if(this.id == homeRollId){
						if($.support.opacity)
						{
							$(this).stop().show().animate({opacity : 1}, 800); 
						} else {
							$(this).stop().show(); 
						}
					}else{
						if($.support.opacity)
						{
							$(this).stop().animate({opacity : 0}, 800);
						} else {
							$(this).stop().hide(); 
						}
					}
				
					homeMenuChild.each(function(i){
						if(this.id == homeRollId)
						{
							if($.support.opacity)
							{
								$(this).stop().animate({opacity : 1}, 400);
							}
							else
							{
								$(this).stop().show();
							}
						} else {
							if($.support.opacity)
							{
								$(this).stop().animate({opacity : .6}, 400); 
							} else {
							}
						}
					});  
				}); 
			}
		}
		
		function MoveGirl(){
			if(rotatingGirlNum != 6)
			rotatingGirlNum = rotatingGirlNum + 1;
			else
			rotatingGirlNum = 0
			
			homeMenuChild.each(function(i){
				if(i == rotatingGirlNum){
					goAnimate(this.id); 
					
					//console.log('hhh : ', this.id);
				}
				
			});
			
			
		}
		
	
		this._super();
		
	},*/
	
	/* Transition your page Out */
	transitionOut: function() {
		this._super();
		
	},
	
	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}

	
})

