const nav_Item = document.querySelector("#nav-item3");
const settingSection = document.querySelector('#body');
const cancelSideBarSection = document.querySelector('li.cancel');
const remove_Setting = document.querySelector('i.icon.material-icons');
const tabBtn = document.querySelectorAll('.tab');
const tab = document.querySelectorAll('.tabShow');
const form = document.querySelectorAll('form');
const sendFormButton = document.querySelector('.far.fa-paper-plane');
const RemoveGithubIcon = document.querySelector('.github.fab.fa-github');

const tabs = panelIndex => {
    tab.forEach(node => {
        node.style.display = 'none';
    });
    tab[panelIndex].style.display = 'block';
}
tabs(0);

const showSetting = () => {
    settingSection.style.display = 'block';
    nav_Item.style.color = "#a8a4a4";
    for (let i = 0; i <= textArea.length; i++) {
        textArea[0].style.width = "60%";
        textArea[0].style.marginLeft = "36.6666667%";
        form[0].style.display = 'none';
    }
    sendFormButton.style.display = 'none';
    RemoveGithubIcon.style.display = 'none';
    cancelSideBarSection.style.display = 'none';
    remove_Setting.style.color = '#000';
}

const removeSetting = () => {
    settingSection.style.display = '';
    nav_Item.style.color = "#fff";
    for (let i = 0; i <= textArea.length; i++) {
        textArea[i].style.width = "";
        textArea[i].style.marginLeft = "";
        form[i].style.display = '';
    }
    sendFormButton.style.display = '';
    RemoveGithubIcon.style.display = '';
    cancelSideBarSection.style.display = '';
}

const toggleSetting = () => {
    nav_Item.addEventListener('click', showSetting);
    remove_Setting.addEventListener('click', removeSetting);
}

toggleSetting()
