$('form').on('submit', function (e) {
  e.preventDefault();
  $('form input, form textarea').each(function () {
    var $emptyElement = $(this);
    var $typeElement = emptyElement.attr('type');
    
    if ($emptyElement.val() === "") {
      $emptyElement.addClass("error");
     $emptyElement.siblings('error-message').fadeIn();
     return;
    }
  });
});