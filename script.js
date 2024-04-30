const initApp = () =>{
const hamburgerBtn = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('menu-items');

const toggleMenu = () =>{
    hamburgerBtn.classList.toggle('bx-x');
    if(mobileMenu.style.display === 'flex'){
      mobileMenu.style.display = 'none';
    }
    else{
      mobileMenu.style.display = 'flex';
    }
    console.log(mobileMenu);
}

hamburgerBtn.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp)

const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});

sr.reveal('.hero-text',{delay:150, origin:'bottom'});
sr.reveal('.navList',{delay:300, origin:'top'});
sr.reveal('.icons',{delay:150, origin:'left'});
sr.reveal('.logo',{delay:300, origin:'right'});