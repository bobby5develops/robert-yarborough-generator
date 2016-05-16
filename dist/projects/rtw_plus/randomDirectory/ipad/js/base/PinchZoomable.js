function PinchZoomable(n1){
    var n = jQuery(n1);
    
    n.each(function(){
		
		var n3 = jQuery(this);
		
        if (!n3.attr("rotation") || n3.attr("rotation") == "") 
            n3.attr("rotation", "0");
        
        if (!n3.attr("scale") || n3.attr("scale") == "") 
            n3.attr("scale", "1");
        
        if (!n3.attr("translate") || n3.attr("translate") == "") 
            n3.attr("translate", " ");
        
        if (!n3.attr("deltaX") || n3.attr("deltaX") == "") 
            n3.attr("deltaX", 0);
        
        if (!n3.attr("deltaY") || n3.attr("deltaY") == "") 
            n3.attr("deltaY", 0);
        
        n3.addClass("pinchZoomable");
    })
    
    
    
    n.bind("touchstart", function(e){
        e.preventDefault();
        
        if (e.originalEvent.touches.length != 1) 
            return;
        
        var node = jQuery(this);
        
        var nodePosition = node.offset();
        
        var touch = e.originalEvent.touches[0];
        
        var xChange = touch.pageX - 1 * node.attr("deltaX");
        var yChange = touch.pageY - 1 * node.attr("deltaY");
        
        node.attr("offX", xChange);
        node.attr("offY", yChange);
		
		node.css({
			"-webkit-transform-origin": "50% 50%"
		});
        
        node.trigger("interactionStart");
    });
    
    
    n.bind("touchend", function(e){
        var node = jQuery(this);
        node.trigger("interactionEnd");
    });
    
    n.bind("touchmove", function(e){
    
        if (e.originalEvent.touches.length != 1) 
            return;
        
        e.preventDefault();
        
        var node = jQuery(this);
        
        var touch = e.originalEvent.touches[0];
        
        var newX = touch.pageX - node.attr("offX");
        var newY = touch.pageY - node.attr("offY");
        
        
        
        node.attr("deltaX", newX).attr("deltaY", newY);
        
        newX += "px";
        newY += "px";
        
        var rotation = parseInt(node.attr("rotation"));
        var scale = node.attr("scale");
        var translate = "translate3d(" + newX + ", " + newY + ", 0px)";
        node.attr("translate", translate);
        
        //console.log(translate + " rotation(" + rotation + "deg) scale(" + scale + ")");
        node.css({
            "-webkit-transform": translate + " rotate(" + rotation + "deg) scale(" + scale + ")"
        })
    });
    
    n.bind("gesturestart", function(){
    
        var node = jQuery(this);
        
        if (!node.attr("rotation") || node.attr("rotation") == "") 
            node.attr("rotation", "0");
        
        if (!node.attr("scale") || node.attr("scale") == "") 
            node.attr("scale", "1");
        
        
        node.trigger("interactionStart");
    });
    
    n.bind("gestureend", function(){
    
        var node = jQuery(this);
        node.trigger("interactionEnd");
        node.removeClass("interaction");
        node.attr("rotation", node.attr("xrotation"));
        node.attr("scale", node.attr("xscale"));
        console.log("end");
        
        
    });
    
    n.bind("gesturechange", function(f){
        f.preventDefault();
        e = f.originalEvent;
        try {
            var node = jQuery(this);
            
            var currentRotation = parseInt(node.attr("rotation"));
            var currentScale = 1 * node.attr("scale");
            
            
            var newRotation = (currentRotation + e.rotation) % 360;
            var newScale = currentScale * e.scale;
            newScale = newScale.toFixed(2);
            
            var translate = node.attr("translate");
            
            // scale and rotation are relative values,
            // so we wait to change our variables until the gesture ends
            //node.style.width = (width * e.scale) + "px";
            //node.style.height = (height * e.scale) + "px";
            node.css("-webkit-transform", translate + " rotate(" + ((newRotation) % 360) + "deg) scale(" + newScale + ")");
            
            node.attr("xrotation", newRotation);
            node.attr("xscale", newScale);
        } 
        catch (e) {
        
        }
    });
    
    n.bind("interactionStart", function(e){
        jQuery(this).addClass("interaction");
        
        var maxZindex = 1;
        var children = jQuery(this).parent().children('.pinchZoomable');
        children.each(function(){
            maxZindex = Math.max(maxZindex, 1 * jQuery(this).css("z-index"));
        });
        
        jQuery(this).css("z-index", ++maxZindex);
    });
    
    n.bind("interactionEnd", function(e){
        jQuery(this).removeClass("interaction");
    });
}
