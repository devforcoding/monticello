/* Slick slider */
(function ($) {
    $(document).ready(function () {
        $('#slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 2000,
            fade: true,
            pauseOnHover: false,
            arrows: false
        });
    });
})(jQuery);