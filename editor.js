const lightMode = document.querySelector('.light-mode');
const darkMode = document.querySelector('.dark-mode');
const section = document.querySelectorAll('section');
const navItem = document.querySelector(".nav-item1");
const textAreaSection = document.querySelectorAll('textarea.editor');
const removeEditor = document.querySelector('span.material-icons');
const chatBox = document.querySelectorAll("textarea.textarea");

function myFunction() {
    var copyText = document.getElementById("my_Input");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

const showLightMode = () => {
    textAreaSection[0].style.backgroundColor = '#fff';
    textAreaSection[0].style.color = '#444';
}

const showDarkMode = () => {
    textAreaSection[0].style.backgroundColor = '';
    textAreaSection[0].style.color = '';
}

const showEditor = () => {
    section[0].style.display = 'block';
    navItem.style.color = "#a8a4a4";
    chatBox[0].style.display = 'none';
}

const delEditor = () => {
    section[0].style.display = '';
    navItem.style.color = "#fff";
    chatBox[0].style.display = 'block';
}

const toggleEditor = () => {
    lightMode.addEventListener('click', showLightMode);
    darkMode.addEventListener('click', showDarkMode);
    navItem.addEventListener('click', showEditor);
    removeEditor.addEventListener('click', delEditor);
}

toggleEditor()
