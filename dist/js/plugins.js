// Avoid `console` errors in browsers that lack a console.
(function() {
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
}());

// Place any jQuery/helper plugins in here.


(function($) {
    $.fn.menumaker = function(options) {

        var yarboroughNav = $(this), settings = $.extend({
            title: "Menu",
            format: "dropdown",
            breakpoint: 768,
            sticky: false
        }, options);

        return this.each(function() {
            yarboroughNav.find('li ul').parent().addClass('has-sub');
            if (settings.format != 'select') {
                yarboroughNav.prepend('<div id="menu-button">' + settings.title + '</div>');
                $(this).find("#menu-button").on('click', function(){
                    $(this).toggleClass('menu-opened');
                    var mainmenu = $(this).next('ul');
                    if (mainmenu.hasClass('open')) {
                        mainmenu.hide().removeClass('open');
                    }
                    else {
                        mainmenu.show().addClass('open');
                        if (settings.format === "dropdown") {
                            mainmenu.find('ul').show();
                        }
                    }
                });

                multiTg = function() {
                    yarboroughNav.find(".has-sub").prepend('<span class="submenu-button"></span>');
                    yarboroughNav.find('.submenu-button').on('click', function() {
                        $(this).toggleClass('submenu-opened');
                        if ($(this).siblings('ul').hasClass('open')) {
                            $(this).siblings('ul').removeClass('open').hide();
                        }
                        else {
                            $(this).siblings('ul').addClass('open').show();
                        }
                    });
                };

                if (settings.format === 'multitoggle') multiTg();
                else yarboroughNav.addClass('dropdown');
            }

            else if (settings.format === 'select')
            {
                yarboroughNav.append('<select style="width: 100%"/>').addClass('select-list');
                var selectList = yarboroughNav.find('select');
                selectList.append('<option>' + settings.title + '</option>', {
                    "selected": "selected",
                    "value": ""});
                yarboroughNav.find('a').each(function() {
                    var element = $(this), indentation = "";
                    for (i = 1; i < element.parents('ul').length; i++)
                    {
                        indentation += '-';
                    }
                    selectList.append('<option value="' + $(this).attr('href') + '">' + indentation + element.text() + '</option');
                });
                selectList.on('change', function() {
                    window.location = $(this).find("option:selected").val();
                });
            }

            if (settings.sticky === true) yarboroughNav.css('position', 'fixed');

            resizeFix = function() {
                if ($(window).width() > settings.breakpoint) {
                    yarboroughNav.find('ul').show();
                    yarboroughNav.removeClass('small-screen');
                    if (settings.format === 'select') {
                        yarboroughNav.find('select').hide();
                    }
                    else {
                        yarboroughNav.find("#menu-button").removeClass("menu-opened");
                    }
                }

                if ($(window).width() <= settings.breakpoint && !yarboroughNav.hasClass("small-screen")) {
                    yarboroughNav.find('ul').hide().removeClass('open');
                    yarboroughNav.addClass('small-screen');
                    if (settings.format === 'select') {
                        yarboroughNav.find('select').show();
                    }
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);

        });
    };
})(jQuery);

(function($){
    $(document).ready(function(){

        $(document).ready(function() {
            $("#yarboroughNav").menumaker({
                title: "Menu",
                format: "dropdown"
            });

            $("#yarboroughNav a").each(function() {
                var linkTitle = $(this).text();
                $(this).attr('data-title', linkTitle);
            });
        });

    });
})(jQuery);

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
