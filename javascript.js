$(document).ready(function(){
$('#onepage').fullpage({
  sectionSelector:'.vertical',
  controlArrows: false,
  sectionsColor:['#020202','#fff'],
  anchors:['home','portfolio'],
  menu:'#navul'
});


  $(document).on('mousewheel keyup keydown', function(){
    var x = $('#navli').attr('class');
  
      if (x == 'active') {
        $('#navbar').css('background-color', '#020202');
        $('li').css('color','#fff');
        $('#navli a').css('color', '#286DA8');
      }
      else {
        $('#navbar').css('background-color', 'white');
        $('li').css('color','#000000');
        $('#navli a').css('color', '#000000');
      }




});


});
