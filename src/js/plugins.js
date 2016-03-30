// Avoid `console` errors in browsers that lack a console.
(function($) {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}(jQuery));

// Place any jQuery/helper plugins in here.

(function($) {
    'use strict';
    $.fn.yarboroughModal = function(options){
        var settings, createModal, closeModal, setWidth, setHeight, body;

        settings = $.extend({
            'modal': 'modal',
            'close': 'modal-close',
            'closeText': '',
            'shade': 'modal-shade',
            'width': '',
            'height': '',
            'content': ''
        }, options);

        body = $('body');
        // set the width dynamically for *all modals
        setWidth = function(){
            var width = $(window).width() - 200;
            $(this).find(".modal-window").css("max-width", width);
        };
        // set the height dynamically for *all modals
        setHeight = function(){
            var height = $(window).height() - 200;
            $(this).find(".modal-window").css("max-height", height);
        };

        closeModal = function(modal, shade){
            modal.remove();
            shade.remove();
        };
        // generate modal
        createModal = function(data){
            var shade, close, widthIs, heightIs, modal;
            shade = $('<div />', {
                class: settings.shade
            }).on('click', function(){
                // close modal and shade
                closeModal(modal, shade);
            });

            widthIs = $({
                class: settings.width
            });

            heightIs = $({
                class: settings.height
            });

            close = $('<a />', {
                text: settings.closeText,
                class: settings.close,
                href: '#'

            }).on('click', function(e){
                closeModal(modal, shade);
                e.preventDefault();
            });

            modal = $('<div />', {
                html: data,
                class: settings.modal
            }).append(close);

            body.prepend(modal, shade);
        };
        // event listener agnostic to any/all global click-events
        this.on('click', function(e){
            var self = $(this);
            // $().load();
            $.ajax({
                url: self.data('content'),
                /*contentType: "application/json; charset=utf-8",*/
                type: 'get',
                cache: false,
                dataType: 'html'

            }).done(function(data){
                createModal(data);
            }).error(function(){
                createModal('There was an ERROR!');
            });
            e.preventDefault();
        });
    };
})(jQuery);
