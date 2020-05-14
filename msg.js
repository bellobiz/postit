var myNodelist = document.querySelectorAll("LI");
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
  li.appendChild(t);
  if (inputValue === "") {
    alert("alerYou must type something then send! 😢\n\n💻 Try upgrading your browser and if the AltGr or Insert key still not working, try the following keys.\n\n1. Windows/Linux\nFirefox - AltGr + Shift + S\n2. Mac\nFirefox - Control + AltGr + S\n3. Windows/Linux/Mac\nOpera - AltGr (Option) + S\n\nAltGr (Windows/Linux) or Option (Mac/Linux) Key works the same way.\nAltGr is the Alt right key on your keyboard.");
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
