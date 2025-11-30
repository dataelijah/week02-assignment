function openImg(event) {
  document.getElementById("bigImg").src = event.children[0].src;
}
//this means that it takes the source from a child element and projects it over the parent element.
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "u") {
    alert("Welcome E");
  }
});
// this means adding an event listener for a 'keydown' press, the e stands for 'event object' and this function runs whenever a user presses the key down.
// testing with  console.log(e); on the console, shows what's being pressed.
