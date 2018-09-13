//= require jquery
//= require bootstrap
//= require_tree .
//= require plugins
//= require scripts
//= require flag

$(document).ready(function() {
  $('.js-scrollTo').on('click', function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $('html, body').animate( { scrollTop: $(contact).offset().top }, speed ); // Go
    return false;
  });
});
