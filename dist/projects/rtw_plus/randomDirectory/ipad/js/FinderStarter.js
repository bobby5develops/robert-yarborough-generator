
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
    	
		finder = new RtwFinder();
		finder.setTemplates(RtwHTMLPages);
		
		var data = finder.getTemplate("structure");
        jQuery("#finderContainer").html(data.replace(/randomDirectory\//g, finder.getConfig().assetsDirectory));
        
		
		/* ADD PAGES START */
finder.addPage(new Accessories1Page());
finder.addPage(new Accessories2Page());
finder.addPage(new Accessories3Page());
finder.addPage(new Accessories4Page());
finder.addPage(new Accessories5Page());
finder.addPage(new Blackandwhite2Page());
finder.addPage(new BlackandwhitePage());
finder.addPage(new HomePage());
finder.addPage(new Jacketspreferred2Page());
finder.addPage(new JacketspreferredPage());
finder.addPage(new Lookofleather2Page());
finder.addPage(new LookofleatherPage());
finder.addPage(new Moderndresses2Page());
finder.addPage(new ModerndressesPage());
finder.addPage(new Prepset2Page());
finder.addPage(new PrepsetPage());
finder.addPage(new Trueblues2Page());
finder.addPage(new TruebluesPage());
/* ADD PAGES END */
		
		
finder.setup();


     
});