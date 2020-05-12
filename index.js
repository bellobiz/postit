let start_scroll_down;
start_scroll_down = () => {
  window.scrollBy(0, 1000000);
}

let stop_scroll_down;
stop_scroll_down = () => {
  clearInterval(scroll);
}

let input; 
input = document.querySelector("#myInput");
input.addEventListener("keyup", event => {
  if (event.keyCode === 18) {
    event.preventDefault();
    document.querySelector("#myBtn").click();
  }
  if (event.keyCode === 45) {
    event.preventDefault();
    document.querySelector("#myBtn").click();
  }
});
