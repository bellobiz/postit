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
    for (i = 0; i <= section.length; i++) {
        section[i].style.display = 'block';
        section[i].style.width = '';
    }
}

const delEditor = () => {
    for (i = 0; i <= section.length; i++) {
        section[i].style.display = '';
    }
}

const toggleEditor = () => {
    lightMode.addEventListener('click', showLightMode);
    darkMode.addEventListener('click', showDarkMode);
    navItem.addEventListener('click', showEditor);
    removeEditor.addEventListener('click', delEditor);
}

toggleEditor()
