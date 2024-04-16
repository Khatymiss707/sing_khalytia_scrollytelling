//ANIMATION TIMER
let scrollTimer; 

window.addEventListener("scroll", function() {

  document.body.classList.add('is-scrolling');

  clearTimeout(scrollTimer); 

  scrollTimer = setTimeout(function() {
    document.body.classList.remove('is-scrolling'); 
  }, 100);  
  
});

//ANIMATION FLECHE
gsap.from('.arrow', { 
  repeat: -1,
  yoyo: true,
  y: '4%',
});

let animChapitre01 = gsap.timeline()
.to(".yeux", {duration: 0.5, opacity: 1})
.to(".yeux", {duration: 0.25, opacity: 0}, "+=3")
.to(".ghost", {duration: 0.5, opacity: 1})
.to(".ghost", {duration: 0.25, opacity: 0}, "+=3")
.to(".yeux_fille_fermee", {duration: 1, opacity: 1}, "-=0.05")
.to(".sueur_01", { duration: 2, y: "35vh", opacity: 1, repeat: -1}, "<")
.to(".sueur_02", { duration: 3, y: "40vh", opacity: 1, repeat: -1}, "<")
.to(".sueur_03", { duration: 1.5, y: "20vh", opacity: 1, repeat: -1}, "<")
.to(".sueur_04", { duration: 3.5, y: "25vh", opacity: 1, repeat: -1}, "<")
.to(".yeux_fille_fermee", {duration: 0.5, opacity: 0}, "+=0.5")
.to(".yeux_fille_ouvert", {duration: 0.5, opacity: 1}, "-=0.05"); 


