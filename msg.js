let myNodelist = document.querySelectorAll("li");
let i;
let span;
let txt
for (i of myNodelist) {
  span = document.createElement("SPAN");
  txt = document.createTextNode("❌");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

let close = document.querySelectorAll(".close");
let i_;
let div;
for (i_ of close) {
  close[i_].onclick =  () => {
    div = this.parentElement;
    div.style.display = "none";
  };
}

let newElement = () => {
  let li;
  let inputValue;
  let t;
  let span;
  let txt;
  li = document.createElement("li");
  inputValue = document.querySelector("#myInput").value;
  t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must type something then send! 😢\n\n💻 Try upgrading your browser and if the AltGr or Insert key still not working, try the following keys.\n\n1. Windows/Linux\nFirefox - AltGr + Shift + S\n2. Mac\nFirefox - Control + AltGr + S\n3. Windows/Linux/Mac\nOpera - AltGr (Option) + S\n\nAltGr (Windows/Linux) or Option (Mac/Linux) Key works the same way.\nAltGr is the Alt right key on your keyboard.");
  } else {
    document.querySelector("#myUL").appendChild(li);
  }
  document.querySelector("#myInput").value = "";

  span = document.createElement("SPAN");
  txt = document.createTextNode("❌");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  let iter;
  let div;
  for (iter of close) {
    close[i].onclick = function () {
      div = this.parentElement;
      div.style.display = "none";
    };
  }
}
