const lightMode = document.querySelector('.light-mode');
const darkMode = document.querySelector('.dark-mode');
const section = document.querySelectorAll('section');
const navItem = document.querySelector(".nav-item1");
const textAreaSection = document.querySelectorAll('textarea.editor');
const removeEditor = document.querySelector('span.material-icons');

const showLightMode = () => {
    for (i = 0; i <= textAreaSection.length; i++) {
        textAreaSection[i].style.backgroundColor = '#fff';
        textAreaSection[i].style.color = '#444';
    }
}

const showDarkMode = () => {
    for (i = 0; i <= textAreaSection.length; i++) {
        textAreaSection[i].style.backgroundColor = '';
        textAreaSection[i].style.color = '';
    }
}

const showEditor = () => {
    section[0].style.display = 'block';
    navItem.style.color = "#a8a4a4"
}

const delEditor = () => {
    section[0].style.display = '';
    navItem.style.color = "#fff"
}

const toggleEditor = () => {
    lightMode.addEventListener('click', showLightMode);
    darkMode.addEventListener('click', showDarkMode);
    navItem.addEventListener('click', showEditor);
    removeEditor.addEventListener('click', delEditor);
}

toggleEditor()
