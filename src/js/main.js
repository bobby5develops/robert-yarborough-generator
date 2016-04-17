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
