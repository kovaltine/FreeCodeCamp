// this is for the burger menu

//navigation slides from the right to the left
const navSlide = () => {
    const burger = document.querySelector('.burger');
    //when we click nav-links, we want it to get nav-active
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //toggle nav
    burger.addEventListener('click', () => {
        //switches to a different class
        nav.classList.toggle('nav-active');
        //animate links
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`
        });
        burger.classList.toggle('toggle');
    });
}

navSlide();