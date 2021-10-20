// This file is for reference, we're not using it and will have to be removed

console.log('This is working');

const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');
const menuNav = document.querySelector('.menu-mobile-nav');
const navItems = document.querySelectorAll('.nav-item');
const closeBtn = document.querySelector('.menu-mobile-close-btn');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', showMenuFunction);
closeBtn.addEventListener('click', closeMenu);

function showMenuFunction() {
  if (!showMenu) {
    menuBtn.classList.add('hide');
    menuMobile.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));
    // Set menu State
    showMenu = true;
  }
}

function closeMenu() {
  if (showMenu) {
    menuBtn.classList.remove('hide');
    menuMobile.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

gsap.from('.animate-01', {
  duration: 0.5,
  y: -30,
  opacity: 0,
  ease: 'power1',
  stagger: 0.4
});

gsap.from('.animate-02', {
  duration: 1,
  x: 60,
  opacity: 0,
  ease: 'power2'
});
