(function($){
  $(function(){
    $('.modal').modal();

    $('#joined').click(function(event){
      $('#join').html(' \
        <div class="valign-wrapper modal-content"> \
          <div class="row center"> \
            <i class="large material-icons">done</i> \
            <p>Success!</p> \
          </div> \
        </div> \
        <div class="modal-footer"> \
          <a href="dashboard.html" class="modal-action modal-close waves-effect waves-green btn-flat">Go to Dashboard</a> \
        </div> \
      ');
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
