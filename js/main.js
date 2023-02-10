// menu mobile
let navBar = document.querySelector('.nav__mobile');
let btnMenu = document.querySelector('.btnmenu');


const menuMobile = () => {
    btnMenu.addEventListener('click', () => {
        navBar.classList.toggle('active');
        btnMenu.classList.toggle('active');

    });
    window.addEventListener('resize', () => {
        if(window.innerWidth > 768) {
            btnMenu.classList.remove('active');
            navBar.classList.remove('active');
        }
    })
}
menuMobile();

// slider
