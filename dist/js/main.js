/*!
 * html5-boilerplate
 * 
 * 
 * @author 
 * @version 5.2.0
 * Copyright 2016. [object Object] licensed.
 */
function toggleNav() {
    if ($('.off-canvas').hasClass('show-nav')) {
        // Do things on Nav Close
        $('.off-canvas').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('.off-canvas').addClass('show-nav');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}
