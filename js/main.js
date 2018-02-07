$(document).ready(function () {

console.log("hello");

$('form').on('submit', function (e) {
  console.log('funtion1')
  e.preventDefault();
  console.log(e);
  $('form input, textarea').each(function () {
    var $emptyElement = $(this);
    // var typeElement = emptyElement.attr('type');
    
    if ($emptyElement.val() === "") {
      $emptyElement.attr("class", "error");
      console.log($emptyElement);
     $emptyElement.siblings('.errorMessage').fadeIn();
     return;
    }
    $emptyElement.removeClass('error');
    $emptyElement.siblings('.errorMessage').hide();
    // if ('form input').on('focus', function(e) {
    //   $emptyElement.attr('class', 'inputFilled');
    // });
  });
});
});