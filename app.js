function openImg(event) {
  document.querySelector(".big-img").src = event.children[0].src;
}
//this means that it takes the source from a child element and projects it over the parent element.
