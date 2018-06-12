$(document).ready(function(){
$('#onepage').fullpage({
  sectionSelector:'.vertical',
  controlArrows: false,
  sectionsColor:['#020202','#fff'],
  anchors:['home','portfolio'],
  menu:'#navul'
});


  $(document).on('click mousewheel keyup keydown', function(){
    var x = $('#navli').attr('class');
    if (x == 'active') {
      $('#navbar').css('background-color', '#020202');
      $('#navul li').css('color','#fff');
      $('#navli a').css('color', '#438496');
      $('nav ul').css('margin-top', '5.1vh');
      $('nav ul').css('margin-bottom', '5.1vh');
    }
    else {
      $('#navbar').css('background-color', 'white');
      $('#navul li').css('color','#707070');
      $('#navli a').css('color', '#707070');
      $('nav ul').css('margin-top', '3.2vh');
      $('nav ul').css('margin-bottom', '3.2vh');
    }






});


});
