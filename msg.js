var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("❌");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.style.backgroundColor = "#fff";
  li.style.borderRadius = "4px";
  li.style.padding = "7px";
  li.style.overflow = "auto";
  li.style.maxHeight = "300px";
  li.style.marginLeft = "30%";
  li.style.marginRight = "40px";
  li.style.fontSize = "medium";
  li.style.fontFamily = "Roboto Condensed";
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!\n\n1. Windows/Linux\nFirefox - Alt + Shift + S\n2. Mac\nFirefox - Control + Alt + S\n3. Windows/Linux/Mac\nOpera - Alt (Option) + S\n\nAlt (Windows/Linux) or Option (Mac/Linux) Key works the same way.");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("❌");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
