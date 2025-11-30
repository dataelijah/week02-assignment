function openImg(event) {
  document.getElementById("bigImg").src = event.children[0].src;
}
//this means that it takes the source from a child element and projects it over the parent element.
function reduceVolume() {
  var audio = document.getElementById("theAudio");
  audio.volume = 0.1;
}
reduceVolume();
//reduced the background ambient music to 10%
