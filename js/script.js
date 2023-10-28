$(window).load(function() {
    $('.menu-button').on('click', function() {
        $('.menu').toggleClass('menu_active');
        $('.menu-button').toggleClass('menu-button_active');
    });
});