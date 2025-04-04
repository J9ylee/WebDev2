$(document).ready(function () {
    // Scroll-trigger animations
    $(window).on('scroll', function () {
        $('.scroll-trigger').each(function () {
            var elementPosition = $(this).offset().top;
            var windowHeight = $(window).scrollTop() + $(window).height();

            if (windowHeight > elementPosition + 100) {
                $(this).addClass('scroll-active');
            }
        });
    });
});
