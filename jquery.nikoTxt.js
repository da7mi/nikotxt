/*
 * jQuery nikoTxt Plugin v1.0.0
 * https://github.com/da7mi/nikotxt
 *
 * Copyright 2013 da7mi
 * Released under the MIT license
 */
(function($) {
    $.nikoTxt = function( options ){
        var defaults = {
            duration: 2000,
            anim: 'random',
            font: {
                size: {
                    min: 38,
                    max: 100
                },
                color: "random",
                colorChange: true
            },
            y: {
                min: 0,
                max: $(window).height()
            }
        };

        var anims = new Array(
            'linear', 'swing',  'easeInQuad', 'easeOutQuad',
            'easeInOutQuad', 'easeInCubic', 'easeOutCubic',
            'easeInOutCubic', 'easeInQuart', 'easeOutQuart',
            'easeInOutQuart', 'easeInQuint', 'easeOutQuint',
            'easeInOutQuint', 'easeInSine', 'easeOutSine',
            'easeInOutSine', 'easeInExpo', 'easeOutExpo',
            'easeInOutExpo', 'easeInCirc', 'easeOutCirc',
            'easeInOutCirc', 'easeInElastic', 'easeOutElastic',
            'easeInOutElastic', 'easeInBack', 'easeOutBack',
            'easeInOutBack', 'easeInBounce', 'easeOutBounce',
            'easeInOutBounce'
            ),
            colors = new Array(
                "#ffff33","#00FFFF","#00ff33","#cc99ff",
                "#00ff00","#C0C0C0","#66ff33","#ff00cc"
            );
        var srand = function(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        };
        var srand_txt = function(txt) {
            var __txt = txt.split(''),
                __rtxt = '';
            for (var i=0; i<__txt.length; i++) {
                __rtxt += text(__txt[i], colors[srand(1, colors.length)]);
            }
            return __rtxt;
        };
        var text = function(txt, color) {
            return '<span style="color: ' + color + '">' + txt + '</span>';
        };


        var setting = $.extend( defaults, options );

        if (setting.txt == void 0) {
            throw "undefined key: txt";
        }

        var _fontsize = srand(setting.font.size.min,setting.font.size.max),
            _y = srand(setting.y.min, setting.y.max),
            _color = (setting.font.color == "random") ? colors[srand(1, colors.length)] : setting.font.color,
            _clientWidth = $(window).width(),
            _anim = (setting.anim == "random") ? anims[(srand(1, anims.length))]: setting.anim,
            _txt = (setting.font.colorChange) ? srand_txt(setting.txt): text(setting.txt, _color);
        var div = $('<div style="position: fixed; background: transparent; top: ' + _y + 'px; left: ' + $(window).width() + 'px; white-space: nowrap; font-size: ' + _fontsize + 'px; z-index: 9999;">' + _txt + '</div>');
        $(document.body).append(div);

        div.stop().animate(
            {
                left: '-' + div.width() + 'px',
                right: _clientWidth + 'px'
            }
        , setting.duration, _anim, function() {
            div.remove();
        });

    }
})(jQuery);
