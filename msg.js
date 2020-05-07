let myNodelist = document.getElementsByTagName("LI");
var i;
for (i of myNodelist) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("❌");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
var i;
for (i of close) {
  close[i].onclick = () => {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!\n\n1. Windows/Linux\nFirefox - Alt + Shift + S\n2. Mac\nFirefox - Control + Alt + S\n3. Windows/Linux/Mac\nOpera - Alt (Option) + S\n\nAlt (Windows/Linux) or Option (Mac/Linux) Key works the same way.");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("❌");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
