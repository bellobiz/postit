const lightMode = document.querySelector('.light-mode');
const darkMode = document.querySelector('.dark-mode');
const section = document.querySelectorAll('section');
const navItem = document.querySelector(".nav-item1");
const nav_2 = document.querySelector("#nav-item2");
const sideBarCancel = document.querySelector("i.material-icons");
const nav3 = document.querySelector(".nav-item3");
const textAreaSection = document.querySelectorAll('textarea.editor');
const removeEditor = document.querySelector('span.material-icons');
const chatBox = document.querySelectorAll("textarea.textarea");
const bodySetting = document.querySelector('#body');
const myGithubPage = document.querySelector('.github-icon');
const sideBarSectionMenu = document.querySelector('.col-lg-4');

const myFunction = () => {
    const copyText = document.getElementById("my_Input");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    const tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}

const outFunc = () => {
    const tooltip = document.getElementById("myTooltip");
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
    chatBox[0].style.display = '';
    bodySetting.style.display = '';
    nav3.style.color = "#fff";
    sideBarSectionMenu.style.display = 'none';
    sideBarCancel.style.display = 'block';
    nav_2.style.color = '#fff';
}

const delEditor = () => {
    section[0].style.display = '';
    navItem.style.color = "#fff";
    chatBox[0].style.display = 'block';
    bodySetting.style.display = 'none';
    myGithubPage.style.display = '';
    sideBarSectionMenu.style.display = '';
    sideBarCancel.style.display = 'none';
    nav_2.style.color = '';
}

const toggleEditor = () => {
    lightMode.addEventListener('click', showLightMode);
    darkMode.addEventListener('click', showDarkMode);
    navItem.addEventListener('click', showEditor);
    removeEditor.addEventListener('click', delEditor);
}

toggleEditor()
