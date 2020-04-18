const group_navItem = document.querySelector("li.cancel");
const close = document.querySelector(".col-lg-4");
const chatSection = document.querySelector(".col-lg-8");
const cancel = document.querySelector("a.active");

const openBar = () => {
    close.style.flex = '0 0 33.333333%';
    close.style.maxWidth = '33.333333%';
    chatSection.style.flex = '0 0 66.666667%';
    chatSection.style.maxWidth = '66.666667%';
    cancel.style.color = '';
}

const closeBar = () => {
    close.style.flex = '';
    close.style.maxWidth = '';
    chatSection.style.flex = '';
    chatSection.style.maxWidth = '';
    cancel.style.color = '#fff';
}

cancel.addEventListener('click', openBar);
group_navItem.addEventListener('click', closeBar);
