const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.getElementsByClassName.animation) {
                link.getElementsByClassName.animation = ''
            } else {
                link.getElementsByClassName.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }

        });
    });



}

this.navSlide();