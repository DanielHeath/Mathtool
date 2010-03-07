function Equations() {
}

Equations.multiply = function (value) { 
  alert(value);
};

$(document).ready(function() {
  $("#multiply_by_submit").click( function () {
    Equations.multiply($('#multiply_by')[0].value);
  })
  
  $.get('equation1.mml', function(data) {
    $('#equations').append(
      '<li class="equation" id="current_equation">' + 
      data +
      '</li>'
    );
  });
});

