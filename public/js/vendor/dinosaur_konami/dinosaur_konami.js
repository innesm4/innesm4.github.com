(function($) {

    $.fn.dinosaur_konami = function(trex) {

        if (window.addEventListener) {

            var species = $.extend({
                dino: "/public/img/dino-head.png",
                height: "250",
                width: "250",
                top: "50%",
                left: "50%",
            }, trex),
                keys = [],
                konami_dino = "38,38,40,40,37,39,37,39,66,65";

            window.addEventListener("keydown", function(e) {
                keys.push(e.keyCode);

                if (keys.toString().indexOf(konami_dino) >= 0) {

                    add_dinosaur();
                    style_dino();

                    $('.dinosaur_konami_trex').fadeIn();

                    keys = [];
                }
            }, true);
        }

        function style_dino() {
            $('.dinosaur_konami_trex').css({
                'position': 'absolute',
                'left': species.left,
                'top': species.top,
                'display': 'none',
                'height': species.height + 'px',
                'width': species.width + 'px',
                'margin-top': '-' + species.height / 2 + 'px',
                'margin-left': '-' + species.width / 2 + 'px',
                'z-index': '50',
            });
        }

        function add_dinosaur() {
            var t_rex = $('<div class="dinosaur_konami_trex"><img src="' + species.dino + '" /></div>');
            $(t_rex).appendTo('body');
            move_dinosaur();

            $('.dinosaur_konami_trex').click(function() {
                $(this).fadeOut().remove();
            });
        }

        function move_dinosaur() {

            window.addEventListener("keydown", function(e) {
                switch (e.which) {
                    case 37: //left
                        $('.dinosaur_konami_trex').stop().animate({
                            left: '-=100',
                            duration: 'slow',
                            easing: 'swing',
                        });
                        break;
                    case 38: //up
                        $('.dinosaur_konami_trex').stop().animate({
                            top: '-=100',
                            duration: 'slow',
                            easing: 'swing',
                        });
                        break;
                    case 39: //right
                        $('.dinosaur_konami_trex').stop().animate({
                            left: '+=100',
                            duration: 'slow',
                            easing: 'swing',
                        });
                        break;
                    case 40: //bottom
                        $('.dinosaur_konami_trex').stop().animate({
                            top: '+=100',
                            duration: 'slow',
                            easing: 'swing',
                        });
                        break;
                }
            });
        }

        return this;
    };

})(jQuery);