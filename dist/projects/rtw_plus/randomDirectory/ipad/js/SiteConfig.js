//var isProduction = false;
//FILES_ROOT = VERSION_DIR;
//VERSION_DIR = "http://d3pnveezgteiph.cloudfront.net/impulse/v201106081412/";
var DOC_ROOT = "";
try {
	FILES_ROOT;
	DOC_ROOT = FILES_ROOT;
} catch (e) {
	DOC_ROOT = VERSION_DIR;
}
var assetsDirectory = DOC_ROOT + 'ipad/';
var webRoot = DEEPLINK_DIR;
var popupPosition = [256, 150, 126, 80];
var quickViewPosition = [null, 10, 658, 603];
var shouldCache = false;
var shouldProxy = false;
var SiteConfig = {
	defaultPage: 'home',
	'assetsDirectory': assetsDirectory,
	webRoot: DEEPLINK_DIR,
	aliases: {
		'accessories':{page:'accessories1'}
	},
	sharing: {
		/* SHARING ITEMS - Don't touch this comment :-) */
		site: {
			mailerIds: {
				staging: 524,
				production: 478
			},
			url: webRoot,
			icon: assetsDirectory + "images/share/share_home.jpg",
			facebook: {
				title: "FALL TREND REPORT 2013",
				description: "All the news on what’s hot this season."
			},
			twitter: "FALL TREND REPORT 2013, all the news on what’s hot this season.",
			tracking:{pageid:"ca-so-fallfashionrtw.sharesite", catid:"ca-so-style-source"}
		},
		popupPosition: [268, 100, 135, 100]
	},
	
	vote:{
		tracking:{pageid:'ca-so-fallfashionrtw.lovethis', catid:'ca-so-style-source'}
	},
	
	quickView: {
		catId: "ca-so-fallfashionrtw",
		position: [null, 10, 658, 603],
		bgColor: "#000000"
	},
	
	comment: {
		position: [150, 70]
	},
	
	pageData: {
		moderndresses: {
			pool: poolRootVotes + 'skirtalert_women',
			shopby:{
				"all":{label:"SHOP WOMEN", filter:[{pfeed_specialsize:{has:"Regular"}}],tracking:{pageid:"ca-so-fallfashionrtw.moderndresses.shopwomen", catid:"ca-so-fallfashionrtw-moderndresses"}, selected:true},
				"petites":{label:"PETITE", filter:[{pfeed_specialsize:{has:"Petites"}}],tracking:{pageid:"ca-so-fallfashionrtw.moderndresses.petite", catid:"ca-so-fallfashionrtw-moderndresses"}}
			},
			share:{
				title:"Modern Dresses",
				desc:"This season's dresses take shape with graphic patterns, strong silhouettes and a daring dose of red.",
				icon: assetsDirectory + "images/share/share_dresses.jpg",
				email:""
			}
		},
		blackandwhite: {
			pool: poolRootVotes + 'black_white',
			shopby:{
				"all":{label:"SHOP WOMEN",filter:[{pfeed_specialsize:{has:"Regular"}}],tracking:{pageid:"ca-so-fallfashionrtw.blackwhite.shopwomen", catid:"ca-so-fallfashionrtw-blackwhite"}, selected:true},
				"petites": {label:"PETITE", filter:[{pfeed_specialsize:{has:"Petites"}}],tracking:{pageid:"ca-so-fallfashionrtw.blackwhite.petite", catid:"ca-so-fallfashionrtw-blackwhite"}}
			},
			share:{
				title:"Black and White",
				desc:"Dramatic in all the right ways, this duo feels fresh with eye-catching patterns and colorblocking.",
				icon: assetsDirectory + "images/share/share_bw.jpg",
				email:""
			}
		},
		prepset: {
			pool: poolRootVotes + 'prep_set',
			shopby:{
				"all":{label:"SHOP WOMEN",filter:[{pfeed_specialsize:{has:"Regular"}}],tracking:{pageid:"ca-so-fallfashionrtw.prepset.shopwomen", catid:"ca-so-fallfashionrtw-prepset"}, selected:true},
				"petites": {label:"PETITE", filter:[{pfeed_specialsize:{has:"Petites"}}],tracking:{pageid:"ca-so-fallfashionrtw.prepset.petite", catid:"ca-so-fallfashionrtw-prepset"}}
			},
			share:{
				title:"Prep Set",
				desc:"Capture autumn's essence in menswear-inspired pieces and heritage patterns.",
				icon: assetsDirectory + "images/share/share_prep.jpg",
				email:""
			}
		},
		jacketspreferred: {
			pool: poolRootVotes + 'jackets_preferred',
			shopby:{
				"all":{label:"SHOP WOMEN",filter:[{pfeed_specialsize:{has:"Regular"}}],tracking:{pageid:"ca-so-fallfashionrtw.jacketspreferred.shopwomen", catid:"ca-so-fallfashionrtw-jacketspreferred"}, selected:true},
				"petites": {label:"PETITE", filter:[{pfeed_specialsize:{has:"Petites"}}],tracking:{pageid:"ca-so-fallfashionrtw.jacketspreferred.petite", catid:"ca-so-fallfashionrtw-jacketspreferred"}}
			},
			share:{
				title:"Jackets Preferred",
				desc:"Mixed-media details and the latest shapes add cool to chilly days.",
				icon: assetsDirectory + "images/share/share_jackets.jpg",
				email:""
			}
		},
		trueblues: {
			pool: poolRootVotes + 'true_blues',
			shopby:{
				"all":{label:"SHOP WOMEN",filter:[{pfeed_specialsize:{has:"Regular"}}],tracking:{pageid:"ca-so-fallfashionrtw.trueblues.shopwomen", catid:"ca-so-fallfashionrtw-trueblues"}, selected:true},
				"petites": {label:"PETITE", filter:[{pfeed_specialsize:{has:"Petites"}}],tracking:{pageid:"ca-so-fallfashionrtw.trueblues.petite", catid:"ca-so-fallfashionrtw-trueblues"}}
			},
			share:{
				title:"True Blues",
				desc:"Rediscover indigo-hued denim in new washes, treatments and fits.",
				icon: assetsDirectory + "images/share/share_blues.jpg",
				email:""
			}
		},
		lookofleather: {
			pool: poolRootVotes + 'looks_leather',
			shopby:{
				"all":{label:"SHOP WOMEN",filter:[{pfeed_specialsize:{has:"Regular"}}],tracking:{pageid:"ca-so-fallfashionrtw.lookofleather.shopwomen", catid:"ca-so-fallfashionrtw-lookofleather"}, selected:true},
				"petites": {label:"PETITE", filter:[{pfeed_specialsize:{has:"Petites"}}],tracking:{pageid:"ca-so-fallfashionrtw.lookofleather.petite", catid:"ca-so-fallfashionrtw-lookofleather"}}
			},
			share:{
				title:"The Look of Leather",
				desc:"A powerful ensemble starts with fall's favorite fabric, a luxe take on faux leather.",
				icon: assetsDirectory + "images/share/share_leather.jpg",
				email:""
			}
		},
		accessories: {
			pool: poolRootVotes + 'accessories',
			shopby:{
				"pumps":{label:"PUMPS",filter:[{pfeed_shopcategory:{has:"shop_pumps"}}],tracking:{pageid:"ca-so-style.source.accessories.pumps", catid:"ca-so-style-source"}},
				"bags": {label:"BAGS", filter:[{pfeed_shopcategory:{has:"shop_bags"}}],tracking:{pageid:"ca-so-style.source.accessories.bags", catid:"ca-so-style-source"}},
				"boots":{label:"BOOTS",filter:[{pfeed_shopcategory:{has:"shop_boots"}}],tracking:{pageid:"ca-so-style.source.accessories.boots", catid:"ca-so-style-source"}},
				"jewelry": {label:"JEWELRY", filter:[{pfeed_shopcategory:{has:"shop_jewelry"}}],tracking:{pageid:"ca-so-style.source.accessories.jewelry", catid:"ca-so-style-source"}},
				"watches":{label:"WATCHES",filter:[{pfeed_shopcategory:{has:"shop_watches"}}],tracking:{pageid:"ca-so-style.source.accessories.watches", catid:"ca-so-style-source"}}
			},
			icon: assetsDirectory + "images/share/share_acc.jpg",
			share:{
				'accessories1':{
					title:"Pointy-Toe Pumps",
					desc:"Sharpen any ensemble with a pair of pointed heels.",
					email:""
				},
				'accessories2':{
					title:"Mini Bags",
					desc:"Downsize your daily carryall with a smarter, smaller handbag.",
					email:""
				},
				'accessories3':{
					title:"Tall Boots",
					desc:"Lengthen your legs with these fall classics.",
					email:""
				},
				'accessories4':{
					title:"Wild Jewelry",
					desc:"Explore the exotic side of accessorizing with animal-inspired jewelry.",
					email:""
				},
				'accessories5':{
					title:"Timeless Watches",
					desc:"Switch out a bracelet for a statement-making timepiece.",
					email:""
				}
			}
		}
	},
	
	tracking:{
		'home':{pageid:"ca-so-fallfashionrtw.lp",catid:"ca-so-fallfashionrtw"},
		'moderndresses': {pageid:"ca-so-fallfashionrtw.moderndresses",  catid:"ca-so-fallfashionrtw-moderndresses"},
		'moderndresses2':  {pageid:"ca-so-fallfashionrtw.moderndresses",catid:"ca-so-fallfashionrtw-moderndresses"},
		'blackandwhite':  {pageid:"ca-so-fallfashionrtw.blackwhite",catid:"ca-so-fallfashionrtw-blackwhite"},
		'blackandwhite2':  {pageid:"ca-so-fallfashionrtw.blackwhite",catid:"ca-so-fallfashionrtw-blackwhite"},
		'prepset':{pageid:"ca-so-fallfashionrtw.prepset", catid:"ca-so-fallfashionrtw-prepset"},
		'prepset2': {pageid:"ca-so-fallfashionrtw.prepset", catid:"ca-so-fallfashionrtw-prepset"},
		'jacketspreferred':  {pageid:"ca-so-fallfashionrtw.jacketspreferred", catid:"ca-so-fallfashionrtw-jacketspreferred"},
		'jacketspreferred2': {pageid:"ca-so-fallfashionrtw.jacketspreferred",  catid:"ca-so-fallfashionrtw-jacketspreferred"},
		'trueblues':  {pageid:"ca-so-fallfashionrtw.trueblues",catid:"ca-so-fallfashionrtw-trueblues"},
		'trueblues2':  {pageid:"ca-so-fallfashionrtw.trueblues",catid:"ca-so-fallfashionrtw-trueblues"},
		'lookofleather':  {pageid:"ca-so-fallfashionrtw.lookofleather",catid:"ca-so-fallfashionrtw-lookofleather"},
		'lookofleather2':{pageid:"ca-so-fallfashionrtw.lookofleather", catid:"ca-so-fallfashionrtw-lookofleather"},
		'accessories1': {pageid:"ca-so-fallfashionrtw.accessories.pointytoepumps", catid:"ca-so-fallfashionrtw-accessories-pointytoepumps"},
		'accessories2': {pageid:"ca-so-fallfashionrtw.accessories.minibags", catid:"ca-so-fallfashionrtw-accessories-minibags"},
		'accessories3': {pageid:"ca-so-fallfashionrtw.accessories.tallboots", catid:"ca-so-fallfashionrtw-accessories-tallboots"},
		'accessories4': {pageid:"ca-so-fallfashionrtw.accessories.wildjewelry", catid:"ca-so-fallfashionrtw-accessories-wildjewelry"},
		'accessories5': {pageid:"ca-so-fallfashionrtw.accessories.timelesswatches", catid:"ca-so-fallfashionrtw-accessories-timelesswatches"}
	},
	
	clicktracking:{
		'pinterest':{pageid:"ca-so-fallfashionrtw.sharepinterest", catid:"ca-so-fallfashionrtw-share"},
		'twitter':{pageid:"ca-so-fallfashionrtw.sharetwitter", catid:"ca-so-fallfashionrtw-share"},
		'facebook':{pageid:"ca-so-fallfashionrtw.sharefb", catid:"ca-so-fallfashionrtw-share"},
		'wellred':{pageid:"ca-so-fallfashionrtw.moderndresses.wellred", catid:"ca-so-fallfashionrtw-moderndresses-wellred"},
		'wellred_shop':{pageid:"ca-so-fallfashionrtw.moderndresses.wellred.shopnow", catid:"ca-so-fallfashionrtw-moderndresses-wellred"},
		'wellred_share':{pageid:"ca-so-fallfashionrtw.moderndresses.wellred.sharethis", catid:"ca-so-fallfashionrtw-moderndresses-wellred"},
		'wellred_pin':{pageid:"ca-so-fallfashionrtw.moderndresses.wellred.pinit", catid:"ca-so-fallfashionrtw-moderndresses-wellred"},
		'redhot':{pageid:"ca-so-fallfashionrtw.moderndresses.redhot", catid:"ca-so-fallfashionrtw-moderndresses-redhot"},
		'redhot_shop':{pageid:"ca-so-fallfashionrtw.moderndresses.redhot.shopnow", catid:"ca-so-fallfashionrtw-moderndresses-redhot"},
		'redhot_share':{pageid:"ca-so-fallfashionrtw.moderndresses.redhot.sharethis", catid:"ca-so-fallfashionrtw-moderndresses-redhot"},
		'redhot_pin':{pageid:"ca-so-fallfashionrtw.moderndresses.redhot.pinit", catid:"ca-so-fallfashionrtw-moderndresses-redhot"},
		'shapeshift':{pageid:"ca-so-fallfashionrtw.moderndresses.shapeshift", catid:"ca-so-fallfashionrtw-moderndresses-shapeshift"},
		'shapeshift_shop':{pageid:"ca-so-fallfashionrtw.moderndresses.shapeshift.shopnow", catid:"ca-so-fallfashionrtw-moderndresses-shapeshift"},
		'shapeshift_share':{pageid:"ca-so-fallfashionrtw.moderndresses.shapeshift.sharethis", catid:"ca-so-fallfashionrtw-moderndresses-shapeshift"},
		'shapeshift_pin':{pageid:"ca-so-fallfashionrtw.moderndresses.shapeshift.pinit", catid:"ca-so-fallfashionrtw-moderndresses-shapeshift"},
		'scarletstripes':{pageid:"ca-so-fallfashionrtw.moderndresses.scarletstripes", catid:"ca-so-fallfashionrtw-moderndresses-scarletstripes"},
		'scarletstripes_shop':{pageid:"ca-so-fallfashionrtw.moderndresses.scarletstripes.shopnow", catid:"ca-so-fallfashionrtw-moderndresses-scarletstripes"},
		'scarletstripes_share':{pageid:"ca-so-fallfashionrtw.moderndresses.scarletstripes.sharethis", catid:"ca-so-fallfashionrtw-moderndresses-scarletstripes"},
		'scarletstripes_pin':{pageid:"ca-so-fallfashionrtw.moderndresses.scarletstripes.pinit", catid:"ca-so-fallfashionrtw-moderndresses-scarletstripes"},
		'fineprint':{pageid:"ca-so-fallfashionrtw.moderndresses.fineprint", catid:"ca-so-fallfashionrtw-moderndresses-fineprint"},
		'fineprint_shop':{pageid:"ca-so-fallfashionrtw.moderndresses.fineprint.shopnow", catid:"ca-so-fallfashionrtw-moderndresses-fineprint"},
		'fineprint_share':{pageid:"ca-so-fallfashionrtw.moderndresses.fineprint.sharethis", catid:"ca-so-fallfashionrtw-moderndresses-fineprint"},
		'fineprint_pin':{pageid:"ca-so-fallfashionrtw.moderndresses.fineprint.pinit", catid:"ca-so-fallfashionrtw-moderndresses-fineprint"},
		'majormoto':{pageid:"ca-so-fallfashionrtw.blackwhite.majormoto", catid:"ca-so-fallfashionrtw-blackwhite-majormoto"},
		'majormoto_shop':{pageid:"ca-so-fallfashionrtw.blackwhite.majormoto.shopnow", catid:"ca-so-fallfashionrtw-blackwhite-majormoto"},
		'majormoto_share':{pageid:"ca-so-fallfashionrtw.blackwhite.majormoto.sharethis", catid:"ca-so-fallfashionrtw-blackwhite-majormoto"},
		'majormoto_pin':{pageid:"ca-so-fallfashionrtw.blackwhite.majormoto.pinit", catid:"ca-so-fallfashionrtw-blackwhite-majormoto"},
		'highcontrast':{pageid:"ca-so-fallfashionrtw.blackwhite.highcontrast", catid:"ca-so-fallfashionrtw-blackwhite-highcontrast"},
		'highcontrast_shop':{pageid:"ca-so-fallfashionrtw.blackwhite.highcontrast.shopnow", catid:"ca-so-fallfashionrtw-blackwhite-highcontrast"},
		'highcontrast_share':{pageid:"ca-so-fallfashionrtw.blackwhite.highcontrast.sharethis", catid:"ca-so-fallfashionrtw-blackwhite-highcontrast"},
		'highcontrast_pin':{pageid:"ca-so-fallfashionrtw.blackwhite.highcontrast.pinit", catid:"ca-so-fallfashionrtw-blackwhite-highcontrast"},
		'worksmart':{pageid:"ca-so-fallfashionrtw.blackwhite.worksmart", catid:"ca-so-fallfashionrtw-blackwhite-worksmart"},
		'worksmart_shop':{pageid:"ca-so-fallfashionrtw.blackwhite.worksmart.shopnow", catid:"ca-so-fallfashionrtw-blackwhite-worksmart"},
		'worksmart_share':{pageid:"ca-so-fallfashionrtw.blackwhite.worksmart.sharethis", catid:"ca-so-fallfashionrtw-blackwhite-worksmart"},
		'worksmart_pin':{pageid:"ca-so-fallfashionrtw.blackwhite.worksmart.pinit", catid:"ca-so-fallfashionrtw-blackwhite-worksmart"},
		'beyondbasic':{pageid:"ca-so-fallfashionrtw.blackwhite.beyondbasic", catid:"ca-so-fallfashionrtw-blackwhite-beyondbasic"},
		'beyondbasic_shop':{pageid:"ca-so-fallfashionrtw.blackwhite.beyondbasic.shopnow", catid:"ca-so-fallfashionrtw-blackwhite-beyondbasic"},
		'beyondbasic_share':{pageid:"ca-so-fallfashionrtw.blackwhite.beyondbasic.sharethis", catid:"ca-so-fallfashionrtw-blackwhite-beyondbasic"},
		'beyondbasic_pin':{pageid:"ca-so-fallfashionrtw.blackwhite.beyondbasic.pinit", catid:"ca-so-fallfashionrtw-blackwhite-beyondbasic"},
		'skirtedissue':{pageid:"ca-so-fallfashionrtw.blackwhite.skirtedissue", catid:"ca-so-fallfashionrtw-blackwhite-skirtedissue"},
		'skirtedissue_shop':{pageid:"ca-so-fallfashionrtw.blackwhite.skirtedissue.shopnow", catid:"ca-so-fallfashionrtw-blackwhite-skirtedissue"},
		'skirtedissue_share':{pageid:"ca-so-fallfashionrtw.blackwhite.skirtedissue.sharethis", catid:"ca-so-fallfashionrtw-blackwhite-skirtedissue"},
		'skirtedissue_pin':{pageid:"ca-so-fallfashionrtw.blackwhite.skirtedissue.pinit", catid:"ca-so-fallfashionrtw-blackwhite-skirtedissue"},
		'printedition':{pageid:"ca-so-fallfashionrtw.prepset.printedition", catid:"ca-so-fallfashionrtw-prepset-printedition"},
		'printedition_shop':{pageid:"ca-so-fallfashionrtw.prepset.printedition.shopnow", catid:"ca-so-fallfashionrtw-prepset-printedition"},
		'printedition_share':{pageid:"ca-so-fallfashionrtw.prepset.printedition.sharethis", catid:"ca-so-fallfashionrtw-prepset-printedition"},
		'printedition_pin':{pageid:"ca-so-fallfashionrtw.prepset.printedition.pinit", catid:"ca-so-fallfashionrtw-prepset-printedition"},
		'boymeetsgirl':{pageid:"ca-so-fallfashionrtw.prepset.boymeetsgirl", catid:"ca-so-fallfashionrtw-prepset-boymeetsgirl"},
		'boymeetsgirl_shop':{pageid:"ca-so-fallfashionrtw.prepset.boymeetsgirl.shopnow", catid:"ca-so-fallfashionrtw-prepset-boymeetsgirl"},
		'boymeetsgirl_share':{pageid:"ca-so-fallfashionrtw.prepset.boymeetsgirl.sharethis", catid:"ca-so-fallfashionrtw-prepset-boymeetsgirl"},
		'boymeetsgirl_pin':{pageid:"ca-so-fallfashionrtw.prepset.boymeetsgirl.pinit", catid:"ca-so-fallfashionrtw-prepset-boymeetsgirl"},
		'plaidpair':{pageid:"ca-so-fallfashionrtw.prepset.plaidpair", catid:"ca-so-fallfashionrtw-prepset-plaidpair"},
		'plaidpair_shop':{pageid:"ca-so-fallfashionrtw.prepset.plaidpair.shopnow", catid:"ca-so-fallfashionrtw-prepset-plaidpair"},
		'plaidpair_share':{pageid:"ca-so-fallfashionrtw.prepset.plaidpair.sharethis", catid:"ca-so-fallfashionrtw-prepset-plaidpair"},
		'plaidpair_pin':{pageid:"ca-so-fallfashionrtw.prepset.plaidpair.pinit", catid:"ca-so-fallfashionrtw-prepset-plaidpair"},
		'countrychic':{pageid:"ca-so-fallfashionrtw.prepset.countrychic", catid:"ca-so-fallfashionrtw-prepset-countrychic"},
		'countrychic_shop':{pageid:"ca-so-fallfashionrtw.prepset.countrychic.shopnow", catid:"ca-so-fallfashionrtw-prepset-countrychic"},
		'countrychic_share':{pageid:"ca-so-fallfashionrtw.prepset.countrychic.sharethis", catid:"ca-so-fallfashionrtw-prepset-countrychic"},
		'countrychic_pin':{pageid:"ca-so-fallfashionrtw.prepset.countrychic.pinit", catid:"ca-so-fallfashionrtw-prepset-countrychic"},
		'militarytime':{pageid:"ca-so-fallfashionrtw.jacketspreferred.militarytime", catid:"ca-so-fallfashionrtw-jacketspreferred-militarytime"},
		'militarytime_shop':{pageid:"ca-so-fallfashionrtw.jacketspreferred.militarytime.shopnow", catid:"ca-so-fallfashionrtw-jacketspreferred-militarytime"},
		'militarytime_share':{pageid:"ca-so-fallfashionrtw.jacketspreferred.militarytime.sharethis", catid:"ca-so-fallfashionrtw-jacketspreferred-militarytime"},
		'militarytime_pin':{pageid:"ca-so-fallfashionrtw.jacketspreferred.militarytime.pinit", catid:"ca-so-fallfashionrtw-jacketspreferred-militarytime"},
		'mixmaster':{pageid:"ca-so-fallfashionrtw.jacketspreferred.mixmaster", catid:"ca-so-fallfashionrtw-jacketspreferred-mixmaster"},
		'mixmaster_shop':{pageid:"ca-so-fallfashionrtw.jacketspreferred.mixmaster.shopnow", catid:"ca-so-fallfashionrtw-jacketspreferred-mixmaster"},
		'mixmaster_share':{pageid:"ca-so-fallfashionrtw.jacketspreferred.mixmaster.sharethis", catid:"ca-so-fallfashionrtw-jacketspreferred-mixmaster"},
		'mixmaster_pin':{pageid:"ca-so-fallfashionrtw.jacketspreferred.mixmaster.pinit", catid:"ca-so-fallfashionrtw-jacketspreferred-mixmaster"},
		'newschool':{pageid:"ca-so-fallfashionrtw.jacketspreferred.newschool", catid:"ca-so-fallfashionrtw-jacketspreferred-newschool"},
		'newschool_shop':{pageid:"ca-so-fallfashionrtw.jacketspreferred.newschool.shopnow", catid:"ca-so-fallfashionrtw-jacketspreferred-newschool"},
		'newschool_share':{pageid:"ca-so-fallfashionrtw.jacketspreferred.newschool.sharethis", catid:"ca-so-fallfashionrtw-jacketspreferred-newschool"},
		'newschool_pin':{pageid:"ca-so-fallfashionrtw.jacketspreferred.newschool.pinit", catid:"ca-so-fallfashionrtw-jacketspreferred-newschool"},
		'neautralstate':{pageid:"ca-so-fallfashionrtw.jacketspreferred.neautralstate", catid:"ca-so-fallfashionrtw-jacketspreferred-neautralstate"},
		'neautralstate_shop':{pageid:"ca-so-fallfashionrtw.jacketspreferred.neautralstate.shopnow", catid:"ca-so-fallfashionrtw-jacketspreferred-neautralstate"},
		'neautralstate_share':{pageid:"ca-so-fallfashionrtw.jacketspreferred.neautralstate.sharethis", catid:"ca-so-fallfashionrtw-jacketspreferred-neautralstate"},
		'neautralstate_pin':{pageid:"ca-so-fallfashionrtw.jacketspreferred.neautralstate.pinit", catid:"ca-so-fallfashionrtw-jacketspreferred-neautralstate"},
		'quietingcircle':{pageid:"ca-so-fallfashionrtw.jacketspreferred.quietingcircle", catid:"ca-so-fallfashionrtw-jacketspreferred-quietingcircle"},
		'quietingcircle_shop':{pageid:"ca-so-fallfashionrtw.jacketspreferred.quietingcircle.shopnow", catid:"ca-so-fallfashionrtw-jacketspreferred-quietingcircle"},
		'quietingcircle_share':{pageid:"ca-so-fallfashionrtw.jacketspreferred.quietingcircle.sharethis", catid:"ca-so-fallfashionrtw-jacketspreferred-quietingcircle"},
		'quietingcircle_pin':{pageid:"ca-so-fallfashionrtw.jacketspreferred.quietingcircle.pinit", catid:"ca-so-fallfashionrtw-jacketspreferred-quietingcircle"},
		'tweedit':{pageid:"ca-so-fallfashionrtw.jacketspreferred.tweedit", catid:"ca-so-fallfashionrtw-jacketspreferred-tweedit"},
		'tweedit_shop':{pageid:"ca-so-fallfashionrtw.jacketspreferred.tweedit.shopnow", catid:"ca-so-fallfashionrtw-jacketspreferred-tweedit"},
		'tweedit_share':{pageid:"ca-so-fallfashionrtw.jacketspreferred.tweedit.sharethis", catid:"ca-so-fallfashionrtw-jacketspreferred-tweedit"},
		'tweedit_pin':{pageid:"ca-so-fallfashionrtw.jacketspreferred.tweedit.pinit", catid:"ca-so-fallfashionrtw-jacketspreferred-tweedit"},
		'chicweave':{pageid:"ca-so-fallfashionrtw.jacketspreferred.chicweave", catid:"ca-so-fallfashionrtw-jacketspreferred-chicweave"},
		'chicweave_shop':{pageid:"ca-so-fallfashionrtw.jacketspreferred.chicweave.shopnow", catid:"ca-so-fallfashionrtw-jacketspreferred-chicweave"},
		'chicweave_share':{pageid:"ca-so-fallfashionrtw.jacketspreferred.chicweave.sharethis", catid:"ca-so-fallfashionrtw-jacketspreferred-chicweave"},
		'chicweave_pin':{pageid:"ca-so-fallfashionrtw.jacketspreferred.chicweave.pinit", catid:"ca-so-fallfashionrtw-jacketspreferred-chicweave"},
		'bluestar':{pageid:"ca-so-fallfashionrtw.trueblues.bluestar", catid:"ca-so-fallfashionrtw-trueblues-bluestar"},
		'bluestar_shop':{pageid:"ca-so-fallfashionrtw.trueblues.bluestar.shopnow", catid:"ca-so-fallfashionrtw-trueblues-bluestar"},
		'bluestar_share':{pageid:"ca-so-fallfashionrtw.trueblues.bluestar.sharethis", catid:"ca-so-fallfashionrtw-trueblues-bluestar"},
		'bluestar_pin':{pageid:"ca-so-fallfashionrtw.trueblues.bluestar.pinit", catid:"ca-so-fallfashionrtw-trueblues-bluestar"},
		'balancingact':{pageid:"ca-so-fallfashionrtw.trueblues.balancingact", catid:"ca-so-fallfashionrtw-trueblues-balancingact"},
		'balancingact_shop':{pageid:"ca-so-fallfashionrtw.trueblues.balancingact.shopnow", catid:"ca-so-fallfashionrtw-trueblues-balancingact"},
		'balancingact_share':{pageid:"ca-so-fallfashionrtw.trueblues.balancingact.sharethis", catid:"ca-so-fallfashionrtw-trueblues-balancingact"},
		'balancingact_pin':{pageid:"ca-so-fallfashionrtw.trueblues.balancingact.pinit", catid:"ca-so-fallfashionrtw-trueblues-balancingact"},
		'trueicon':{pageid:"ca-so-fallfashionrtw.trueblues.trueicon", catid:"ca-so-fallfashionrtw-trueblues-trueicon"},
		'trueicon_shop':{pageid:"ca-so-fallfashionrtw.trueblues.trueicon.shopnow", catid:"ca-so-fallfashionrtw-trueblues-trueicon"},
		'trueicon_share':{pageid:"ca-so-fallfashionrtw.trueblues.trueicon.sharethis", catid:"ca-so-fallfashionrtw-trueblues-trueicon"},
		'trueicon_pin':{pageid:"ca-so-fallfashionrtw.trueblues.trueicon.pinit", catid:"ca-so-fallfashionrtw-trueblues-trueicon"},
		'laidback':{pageid:"ca-so-fallfashionrtw.trueblues.laidback", catid:"ca-so-fallfashionrtw-trueblues-laidback"},
		'laidback_shop':{pageid:"ca-so-fallfashionrtw.trueblues.laidback.shopnow", catid:"ca-so-fallfashionrtw-trueblues-laidback"},
		'laidback_share':{pageid:"ca-so-fallfashionrtw.trueblues.laidback.sharethis", catid:"ca-so-fallfashionrtw-trueblues-laidback"},
		'laidback_pin':{pageid:"ca-so-fallfashionrtw.trueblues.laidback.pinit", catid:"ca-so-fallfashionrtw-trueblues-laidback"},
		'blueprint':{pageid:"ca-so-fallfashionrtw.trueblues.blueprint", catid:"ca-so-fallfashionrtw-trueblues-blueprint"},
		'blueprint_shop':{pageid:"ca-so-fallfashionrtw.trueblues.blueprint.shopnow", catid:"ca-so-fallfashionrtw-trueblues-blueprint"},
		'blueprint_share':{pageid:"ca-so-fallfashionrtw.trueblues.blueprint.sharethis", catid:"ca-so-fallfashionrtw-trueblues-blueprint"},
		'blueprint_pin':{pageid:"ca-so-fallfashionrtw.trueblues.blueprint.pinit", catid:"ca-so-fallfashionrtw-trueblues-blueprint"},
		'pipinghot':{pageid:"ca-so-fallfashionrtw.lookofleather.pipinghot", catid:"ca-so-fallfashionrtw-lookofleather-pipinghot"},
		'pipinghot_shop':{pageid:"ca-so-fallfashionrtw.lookofleather.pipinghot.shopnow", catid:"ca-so-fallfashionrtw-lookofleather-pipinghot"},
		'pipinghot_share':{pageid:"ca-so-fallfashionrtw.lookofleather.pipinghot.sharethis", catid:"ca-so-fallfashionrtw-lookofleather-pipinghot"},
		'pipinghot_pin':{pageid:"ca-so-fallfashionrtw.lookofleather.pipinghot.pinit", catid:"ca-so-fallfashionrtw-lookofleather-pipinghot"},
		'leatherlace':{pageid:"ca-so-fallfashionrtw.lookofleather.leatherlace", catid:"ca-so-fallfashionrtw-lookofleather-leatherlace"},
		'leatherlace_shop':{pageid:"ca-so-fallfashionrtw.lookofleather.leatherlace.shopnow", catid:"ca-so-fallfashionrtw-lookofleather-leatherlace"},
		'leatherlace_share':{pageid:"ca-so-fallfashionrtw.lookofleather.leatherlace.sharethis", catid:"ca-so-fallfashionrtw-lookofleather-leatherlace"},
		'leatherlace_pin':{pageid:"ca-so-fallfashionrtw.lookofleather.leatherlace.pinit", catid:"ca-so-fallfashionrtw-lookofleather-leatherlace"},
		'sleeksleeves':{pageid:"ca-so-fallfashionrtw.lookofleather.sleeksleeves", catid:"ca-so-fallfashionrtw-lookofleather-sleeksleeves"},
		'sleeksleeves_shop':{pageid:"ca-so-fallfashionrtw.lookofleather.sleeksleeves.shopnow", catid:"ca-so-fallfashionrtw-lookofleather-sleeksleeves"},
		'sleeksleeves_share':{pageid:"ca-so-fallfashionrtw.lookofleather.sleeksleeves.sharethis", catid:"ca-so-fallfashionrtw-lookofleather-sleeksleeves"},
		'sleeksleeves_pin':{pageid:"ca-so-fallfashionrtw.lookofleather.sleeksleeves.pinit", catid:"ca-so-fallfashionrtw-lookofleather-sleeksleeves"},
		'mixedmessages':{pageid:"ca-so-fallfashionrtw.lookofleather.mixedmessages", catid:"ca-so-fallfashionrtw-lookofleather-mixedmessages"},
		'mixedmessages_shop':{pageid:"ca-so-fallfashionrtw.lookofleather.mixedmessages.shopnow", catid:"ca-so-fallfashionrtw-lookofleather-mixedmessages"},
		'mixedmessages_share':{pageid:"ca-so-fallfashionrtw.lookofleather.mixedmessages.sharethis", catid:"ca-so-fallfashionrtw-lookofleather-mixedmessages"},
		'mixedmessages_pin':{pageid:"ca-so-fallfashionrtw.lookofleather.mixedmessages.pinit", catid:"ca-so-fallfashionrtw-lookofleather-mixedmessages"},
		'lasersharp':{pageid:"ca-so-fallfashionrtw.lookofleather.lasersharp", catid:"ca-so-fallfashionrtw-lookofleather-lasersharp"},
		'lasersharp_shop':{pageid:"ca-so-fallfashionrtw.lookofleather.lasersharp.shopnow", catid:"ca-so-fallfashionrtw-lookofleather-lasersharp"},
		'lasersharp_share':{pageid:"ca-so-fallfashionrtw.lookofleather.lasersharp.sharethis", catid:"ca-so-fallfashionrtw-lookofleather-lasersharp"},
		'lasersharp_pin':{pageid:"ca-so-fallfashionrtw.lookofleather.lasersharp.pinit", catid:"ca-so-fallfashionrtw-lookofleather-lasersharp"},
		'pointytoepumps':{pageid:"ca-so-fallfashionrtw.accessories.pointytoepumps.shopnow", catid:"ca-so-fallfashionrtw-accessories-pointytoepumps"},
		'minibags':{pageid:"ca-so-fallfashionrtw.accessories.minibags.shopnow", catid:"ca-so-fallfashionrtw-accessories-minibags"},
		'tallboots':{pageid:"ca-so-fallfashionrtw.accessories.tallboots.shopnow", catid:"ca-so-fallfashionrtw-accessories-tallboots"},
		'wildjewelry':{pageid:"ca-so-fallfashionrtw.accessories.wildjewelry.shopnow", catid:"ca-so-fallfashionrtw-accessories-wildjewelry"},
		'timelesswatches':{pageid:"ca-so-fallfashionrtw.accessories.timelesswatches.shopnow", catid:"ca-so-fallfashionrtw-accessories-timelesswatches"}
	},
	
	
	// we can probably do this better
	paging:[
		'home',
		'moderndresses',
		'moderndresses2',
		'blackandwhite',
		'blackandwhite2',
		'prepset',
		'prepset2',
		'jacketspreferred',
		'jacketspreferred2',
		'trueblues',
		'trueblues2',
		'lookofleather',
		'lookofleather2',
		'accessories1',
		'accessories2',
		'accessories3',
		'accessories4',
		'accessories5'
	]
};
