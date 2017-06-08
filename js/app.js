document.addEventListener('DOMContentLoaded', function () {

    const laptop = document.querySelector('.laptop');
    const mobile = document.querySelector('.mobile');
    const imac = document.querySelector('.imac');

    imac.classList.add('animate');

    window.addEventListener('scroll', function () {

        if (window.scrollY >= 350) {
            laptop.classList.add('animate');
            mobile.classList.add('animate');
        } else {
            laptop.classList.remove('animate');
            mobile.classList.remove('animate');
        }
    });
});