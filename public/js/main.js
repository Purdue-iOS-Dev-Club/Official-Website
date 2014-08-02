(function($) {
  $('#contactform').submit(function() {
    var action = $(this).attr('action');
    var values = $(this).serialize();
    $.post(action, values, function(data) {
      $('.results').hide().html(data).slideDown('slow');
      $('#contactform').find('.form-control').val('');
    });
    return false;
  });
})(jQuery);
