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
