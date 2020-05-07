let myNodelist = document.querySelectorAll("li");

let i;
let span;
let txt;
for (i of myNodelist) {
  span = document.createElement("span");
  txt = document.createTextNode("❌");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

let close = document.querySelectorAll(".close");

let i_;
let div;
for (i_ of close) {
  close[i_].onclick = () => {
    div = this.parentElement;
    div.style.display = "none";
  };
}

let newElement = () => {
  let li = document.createElement("li");
  let inputValue = document.querySelector("#myInput").value;
  let t = document.createTextNode(inputValue);
  let span;
  let txt;
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!\n\n1. Windows/Linux\nFirefox - Alt + Shift + S\n2. Mac\nFirefox - Control + Alt + S\n3. Windows/Linux/Mac\nOpera - Alt (Option) + S\n\nAlt (Windows/Linux) or Option (Mac/Linux) Key works the same way.");
  } else {
    document.querySelector("#myUL").appendChild(li);
  }
  document.querySelector("#myInput").value = "";

  span = document.createElement("span");
  txt = document.createTextNode("❌");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  let counter;
  let div;
  for (counter of close) {
    close[counter].onclick = () => {
      div = this.parentElement;
      div.style.display = "none";
    };
  }
}
