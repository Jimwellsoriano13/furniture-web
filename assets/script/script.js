
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener('click', (e) => {
  navLinks.classList.toggle('open');

  const isOpen = navLinks.classList.contains('open');
  menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});

navLinks.addEventListener('click', (e) => {
  navLinks.classList.remove('open');
  menuBtnIcon.setAttribute('class', 'ri-menu-line');
});

const navSearch = document.getElementById('nav-search');

navSearch.addEventListener('click', (e) => {
  navSearch.classList.toggle('open');
});

const scrollRevealOption = {
  distance: "500px",
  origin: "bottom",
  duration: "1000"
};

ScrollReveal().reveal(".header-image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header-content div", {
  duration: 1000,
  delay: 500,
});

ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header-content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".deals-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about-image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".about-card", {
  interval: 500,
  duration: 1000,
  delay: 500,
});


ScrollReveal().reveal(".about-header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".product-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".section-header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".section-description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".client-card", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".footer-col", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".footer-bar", {
  ...scrollRevealOption,
});

    // SWIPER SECTION


const swiper = new Swiper('.swiper',{
  loop: true,
  autoplay:{
    delay: 3000,
    effect: 'slide',
    disableOnInteraction:false,
  }
})