$(document).ready(function(){
$('#onepage').fullpage({
  sectionSelector:'.vertical',
  controlArrows: false,
  sectionsColor:['#020202','#fff'],
  anchors:['home','portfolio'],
  menu:'#navul'
});

setInterval(navcolor,500);

function navcolor(){
  var x = $('#navli').attr('class');
  if (x == 'active') {
    $('#navbar').css('background-color', '#020202');
    $('#navli a').css('color', '#438496');
    $('nav ul').css('margin-top', '5.1vh');
    $('nav ul').css('margin-bottom', '5.1vh');
  }
  else {
    $('#navbar').css('background-color', 'white');
    $('#navli a').css('color', '#000');
    $('nav ul').css('margin-top', '3.2vh');
    $('nav ul').css('margin-bottom', '3.2vh');
  }
}

var s1 = $('.carousel div:nth-child(1)');
var s2 = $('.carousel div:nth-child(2)');
var s3 = $('.carousel div:nth-child(3)');

var s1z = s1.css('z-index');
var s2z = s2.css('z-index');
var s3z = s3.css('z-index');

function activatelogodesign(){
  s1.removeAttr('class').addClass('slide1');
  s2.removeAttr('class').addClass('slide2');
  s3.removeAttr('class').addClass('slide3');
  $('.category li:nth-child(2)').addClass('selected');
  $('.category li:nth-child(1),.category li:nth-child(3)').removeAttr('class');
};

function activateuidesign(){
  s1.removeAttr('class').addClass('slide2');
  s2.removeAttr('class').addClass('slide3');
  s3.removeAttr('class').addClass('slide1');
  $('.category li:nth-child(1)').addClass('selected');
  $('.category li:nth-child(2),.category li:nth-child(3)').removeAttr('class');
};

function activateillustration() {
  s1.removeAttr('class').addClass('slide3');
  s2.removeAttr('class').addClass('slide1');
  s3.removeAttr('class').addClass('slide2');
  $('.category li:nth-child(3)').addClass('selected');
  $('.category li:nth-child(1),.category li:nth-child(2)').removeAttr('class');
}



function carousel(){

if (s1z == '2' && s2z == '1' && s3z == '0') {
  activateillustration();
}
else if (s1z == '0' && s2z == '2' && s3z == '1') {
  activateuidesign();
}
else if (s1z == '1' && s2z == '0' && s3z == '2') {
  activatelogodesign();
}
}

var timer;
timer = setInterval(carousel,3000);


function cleartimer(){
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
}

function starttimer(){
  if (timer === null) {
    timer = setInterval(carousel,3000);
  }
}

$('.category li a').on(
  {
    mouseenter: function(){
      console.log(s1z);
      cleartimer();
  },
    mouseleave: function(){
      starttimer();
    }
  });


$('.category li:nth-child(2)').on('mouseover', function(){
  activatelogodesign();
});
$('.category li:nth-child(3)').on('mouseover', function(){
  activateillustration();
});
$('.category li:nth-child(1)').on('mouseover', function(){
  activateuidesign();
});




});
