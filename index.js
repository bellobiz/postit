function start_scroll_down() {
  window.scrollBy(0, 10000000);
}

function stop_scroll_down() {
  clearInterval(scroll);
}

var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 18) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
  if (event.keyCode === 179) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
