function Equations() {
}

Equations.line = function (inner) {
  $('#current_equation').removeAttr("id");
  
  $('#equations').prepend(
    '<li class="equation" id="current_equation">' + 
    inner +
    '</li>'
  );
};

Equations.make_new_line = function () {
  this.line($('#current_equation').html())
};

Equations.prepend_both_sides = function (string) {
  this.make_new_line();
  $('#current_equation .lhs').prepend(string);
  $('#current_equation .rhs').prepend(string);
};

Equations.multiply = function (value) { 
  this.prepend_both_sides('<mi>' + value + '</mi>');
};

$(document).ready(function() {
  $("#multiply_by_submit").click( function () {
    Equations.multiply($('#multiply_by')[0].value);
  })
  
  $.get('equation1.mml', function(data) {
    Equations.line(data);
  });
});

