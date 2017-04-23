(function($){
  $(function(){
    // load all illnesses
    var template = Handlebars.compile($('#all-ill-template').html());
    var context = {"illnesses": ILLNESSES};
    var html = template(context);
    $('#all-ill').html(html);
  }); // end of document ready
})(jQuery);
