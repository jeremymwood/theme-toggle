const sunMoonContainer = $('.sun-moon-container');

$( ".theme-toggle-button" ).on( "click", function() {
    $( 'body' ).toggleClass( "dark" );
    const currentRotation = parseInt($(sunMoonContainer).css("--rotation"));
    sunMoonContainer.css('--rotation', currentRotation + 180);
});
