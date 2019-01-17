$(document).ready(function () {

  var $document = $(document);
  var header = $('[data-main-header]');

  $document.on('scroll', function () {
    if ($document.scrollTop() > 10) {
      header.addClass('main-header--scrolled');
    } else {
      header.removeClass('main-header--scrolled');
    }
  });
  $document.trigger('scroll');

});


$('a[data-cta]').on('click', function(){

  var produto = $(this).data('product'),
      cta_position = $(this).data('analytics-cta');

  y_dataLayer.push({
    'event': 'clickCTA',
    'posicao_cta': cta_position,
    'produto_cta': produto
  });

});

window.onload = function() {
  setTimeout(function(){ $('body').find('img[width=0][height=0]').css('position', 'absolute'); }, 3000);
};
