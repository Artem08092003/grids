// Burger menu
const burgerBtn = document.querySelector('.header__burger--menu');
const menu = document.querySelector('.header__nav');
const menuLinks = menu.querySelectorAll('.header__item a');

burgerBtn.addEventListener('click',
    function () {
        burgerBtn.classList.toggle('header__burger--line--active');
        menu.classList.toggle('header__nav--active');
        document.body.classList.toggle('header__stop--scroll');
    });

menuLinks.forEach(function (el) {
    el.addEventListener('click',
        function () {
            burgerBtn.classList.remove('header__burger--line--active');
            menu.classList.remove('header__nav--active');
            document.body.classList.remove('header__stop--scroll');
        });
});