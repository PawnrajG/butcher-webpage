let menuIcon = document.getElementById('#menu-icon');
let navList = document.getElementsByClassName('.navList');
function showMenu(){
  menuIcon.classList.toggle("bx-x");
  navList.classList.toggle("open");
}

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