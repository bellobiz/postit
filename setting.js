const nav_Item = document.querySelector("#nav-item3");
const settingSection = document.querySelector('#body');
const remove_Setting = document.querySelector('i.icon.material-icons');
const tabBtn = document.querySelectorAll('.tab');
const tab = document.querySelectorAll('.tabShow');

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
}

const removeSetting = () => {
    settingSection.style.display = '';
    nav_Item.style.color = "#fff";
}

const toggleSetting = () => {
    nav_Item.addEventListener('click', showSetting);
    remove_Setting.addEventListener('click', removeSetting);
}

toggleSetting()