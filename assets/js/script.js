
const hemburger_icon = document.querySelector('.hemburger_icon');
const side_nav = document.querySelector('.side-nav');
const menu_close = document.querySelector('.menu_close');

hemburger_icon.addEventListener('click', () => {
    side_nav.style.right = '0%'
});

menu_close.addEventListener('click', () => {
    side_nav.style.right = '-100%'
});
