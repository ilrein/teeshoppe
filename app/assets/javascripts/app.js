var ready;
ready = function() {

  //instantiate a TimelineLite    
  
  var tl = new TimelineLite();

  // var head = $('h1:first');

  //add a from() tween at the beginning of the timline

  // tl.from(head, 0.5, {left:100, opacity:0});

};

$(document).ready(ready);
$(document).on('page:load', ready);

