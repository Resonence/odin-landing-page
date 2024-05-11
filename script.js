
var hoverImage = document.getElementById('hover-image');

hoverImage.addEventListener('mouseenter', function() {
  var audio = document.getElementById('hover-sound');
  audio.play();
});

hoverImage.addEventListener('mouseleave', function() {
  var audio = document.getElementById('hover-sound');
  audio.pause();
});
