const nav_Item = document.querySelector("#nav-item3");
const nav__1 = document.querySelector("#nav-item1");
const nav__2 = document.querySelector("#nav-item2");
const settingSection = document.querySelector('#body');
const textarea_ = document.querySelectorAll('textarea.textarea');
const cancelSideBarSection = document.querySelector('li.cancel');
const remove_Setting = document.querySelector('i.icon.material-icons');
const tabBtn = document.querySelectorAll('.tab');
const tab = document.querySelectorAll('.tabShow');
const form = document.querySelectorAll('form');
const side_bar = document.querySelector('.col-lg-4');
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
    sendFormButton.style.display = 'none';
    RemoveGithubIcon.style.display = 'none';
    cancelSideBarSection.style.display = 'none';
    remove_Setting.style.color = '#000';
    side_bar.style.display = 'none';
    side_bar.style.width = '0px';
    nav__2.style.cursor = 'not-allowed';
    nav__1.style.cursor = 'not-allowed';
    textarea_[0].style.marginLeft = '0%'
}

const removeSetting = () => {
    settingSection.style.display = '';
    nav_Item.style.color = "#fff";
    sendFormButton.style.display = '';
    RemoveGithubIcon.style.display = '';
    cancelSideBarSection.style.display = '';
    side_bar.style.display = '';
    nav__2.style.cursor = '';
    nav__1.style.cursor = 'not-allowed';
}

const toggleSetting = () => {
    nav_Item.addEventListener('click', showSetting);
    remove_Setting.addEventListener('click', removeSetting);
}

toggleSetting()
