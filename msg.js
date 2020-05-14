let myNodelist; 
let span;
let txt
let iter1;
let close; 
let iter2;
let div;
let newElement;
myNodelist = document.querySelectorAll("LI");
for (iter1 of myNodelist) {
  span = document.createElement("SPAN");
  txt = document.createTextNode("❌");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

close = document.getElementsByClassName("close");
for (iter2 of close) {
  close[i].onclick = () => { 
    div = this.parentElement;
    div.style.display = "none";
  };
}

newElement = () => {
  let li;
  let inputValue;
  let t;
  let span;
  let txt;
  let div;
  let iter;
  li = document.createElement("li");
  inputValue = document.querySelector("#myInput").value;
  t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("alerYou must type something then send! 😢\n\n💻 Try upgrading your browser and if the AltGr or Insert key still not working, try the following keys.\n\n1. Windows/Linux\nFirefox - AltGr + Shift + S\n2. Mac\nFirefox - Control + AltGr + S\n3. Windows/Linux/Mac\nOpera - AltGr (Option) + S\n\nAltGr (Windows/Linux) or Option (Mac/Linux) Key works the same way.\nAltGr is the Alt right key on your keyboard.");
  } else {
    document.querySelector("#myUL").appendChild(li);
  }
  document.querySelector("#myInput").value = "";

  span = document.createElement("SPAN");
  txt = document.createTextNode("❌");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (iter = 0; iter < close.length; iter++) {
    close[iter].onclick = function () {
      div = this.parentElement;
      div.style.display = "none";
    };
  }
}
