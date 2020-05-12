const closeSideBar = document.querySelector("li.cancel");
const closeIcon = document.querySelector("i.side-bar.material-icons");
const sideBar = document.querySelector(".col-lg-4");
const chatSection = document.querySelector(".col-lg-8");
const textArea = document.querySelectorAll("textarea.textarea");
const sendIcon = document.querySelector("i.far.fa-paper-plane");
const activeGroup = document.querySelector(".nav-item2");
const contactsSearchBarIcon = document.querySelector("#search-bar");
const contactsSearchBar = document.querySelector("#contacts-bar");
const navItem1 = document.querySelector(".nav-item1");
const navItem2 = document.querySelector("#nav-item2");
const nav2 = document.querySelector(".nav-item2");
const navItem3 = document.querySelector(".nav-item3");

const openBar = () => {
    sideBar.style.flex = "0 0 33.333333%";
    sideBar.style.maxWidth = "33.333333%";
    chatSection.style.flex = "0 0 100%";
    chatSection.style.maxWidth = "100%";
    activeGroup.style.color = "#a8a4a4";
    for (let i = 0; i <= textArea.length; i++) {
        textArea[0].style.width = "60%";
        textArea[0].style.marginLeft = "36.6666667%";
    }
    sendIcon.style.display = "none";
    closeSideBar.style.display = 'block';
    closeIcon.style.display = 'block';
};

const closeBar = () => {
    sideBar.style.flex = "";
    sideBar.style.maxWidth = "";
    chatSection.style.flex = "";
    chatSection.style.maxWidth = "";
    activeGroup.style.color = "";
    for (let i = 0; i <= textArea.length; i++) {
        textArea[0].style.width = "";
        textArea[0].style.marginLeft = "";
    }
    sendIcon.style.display = "";
    sendIcon.style.left = "";
    closeSideBar.style.display = '';
    closeIcon.style.display = '';
};

const altCloseBar = () => {
    sideBar.style.maxWidth = "";
    sideBar.style.flex = "";
    activeGroup.style.color = "#fff";
    for (let i = 0; i <= textArea.length; i++) {
        textArea[0].style.width = "";
        textArea[0].style.marginLeft = "";
    }
    sendIcon.style.display = "";
    sendIcon.style.left = "";
};

const openSearch = () => {
    contactsSearchBarIcon.style.display = "none";
    contactsSearchBar.style.display = "block";
    navItem1.style.display = "none";
    navItem2.style.display = "none";
    navItem3.style.display = "none";
    contactsSearchBar.style.marginRight = "auto";
};

const closeSearch = () => {
    contactsSearchBarIcon.style.display = "";
    contactsSearchBar.style.display = "";
    navItem1.style.display = "";
    nav2.style.display = "";
    navItem3.style.display = "";
    contactsSearchBar.style.marginLeft = "";
};

const altCloseSearch = () => {
    contactsSearchBarIcon.style.display = "";
    contactsSearchBar.style.display = "";
    navItem1.style.display = "";
    nav2.style.display = "";
    navItem3.style.display = "";
    contactsSearchBar.style.marginLeft = "";
};

const displayDynamicElements = () => {
    contactsSearchBarIcon.addEventListener("click", openSearch);
    contactsSearchBar.addEventListener("blur", closeSearch);
    chatSection.addEventListener("click", altCloseBar);
    chatSection.addEventListener("click", altCloseSearch);
    activeGroup.addEventListener("click", openBar);
    closeSideBar.addEventListener("click", closeBar);
};

displayDynamicElements();
