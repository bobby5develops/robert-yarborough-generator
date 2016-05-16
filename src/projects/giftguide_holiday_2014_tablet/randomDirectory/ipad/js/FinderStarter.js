
try {
    console.log("console exists");
} 
catch (e) {
    window.console = {};
    window.console.log = function(txt){
    
    }
    window.console.warn = function(txt){
    
    }
    window.console.error = function(txt){
    
    }
}


var finder;
jQuery(document.body).ready(function(){
    	
		finder = new GgFinder();
		finder.setTemplates(GgHTMLPages);
		
		var data = finder.getTemplate("structure");
        jQuery("#finderContainer").html(data.replace(/randomDirectory\//g, finder.getConfig().assetsDirectory));
        
		// add the image maps to the page...
		jQuery("#finderContainer").after(finder.getTemplate("imageMaps").replace(/randomDirectory\//g, finder.getConfig().assetsDirectory));
		
		// add all the templates that will be needed later...
		for (i in finder.templates.templates) {
			jQuery("#finderContainer").after(finder.templates.templates[i].replace(/randomDirectory\//g, finder.getConfig().assetsDirectory));
		}
		
		
		/* ADD PAGES START */
finder.addPage(new HomePage());
finder.addPage(new LandingPage());
finder.addPage(new ShopPage());
finder.addPage(new ShoprlPage());
finder.addPage(new StargiftsPage());
finder.addPage(new TopgiftsPage());
/* ADD PAGES END */
		
		
		finder.poolDebug = new PoolDebug();
		
        finder.setup();
     
});