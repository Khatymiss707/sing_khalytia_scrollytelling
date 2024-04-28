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
.to(".texte01", {duration: 3, opacity: 1})
.to(".yeux", {duration: 0.5, opacity: 1}, "-=2")
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

let animChapitre02 = gsap.timeline()
.to(".texte02", {duration: 3, opacity: 1})
.to(".fille_couche", {duration: 1, opacity: 1}, "-=2")
.to(".train_wagon", {duration: 1, opacity: 1}, "<")
.to(".fille_couche", {duration: 0.25, opacity: 0}, "+=1")
.to(".fille_assise", {duration: 1, opacity: 1})
.to(".fille_assise", {duration: 0.25, opacity: 0}, "+=1")
.to(".fille_debout", {duration: 1, opacity: 1})
.to(".train_wagon", {duration: 0.25, opacity: 0}, "<")

let animChapitre03 = gsap.timeline()
.to(".texte03", {duration: 3, opacity: 1})
.to(".fille_regarde_droite", {duration: 1, opacity: 1}, "-=2")
.to(".arriere_porte", {duration: 1, opacity: 1},  "+=0.5")
.to(".porte", {duration: 0.05, scale: 2})
.to(".porte", {duration: 1, opacity: 1})
.to(".fille_regarde_droite", {duration: 1, opacity: 0}, "<")
.to(".fantome_femme", {duration: 0.5, opacity: 1, scale: 1.8})
.to(".fantome_femme", {duration: 0.5, opacity: 0}, "+=1")
.to(".porte", {duration: 0.5, opacity: 0}, "<")
.to(".arriere_porte", {duration: 1, opacity: 0}, "<")
.to(".texte04", {duration: 3, opacity: 1})
.to(".fille_regarde_gauche", {duration: 1, opacity: 1}, "-=1")
.to(".porte", {duration: 0.05, scale: 1}, "+=1")
.to(".arriere_porte", {duration: 2, opacity: 1})
.to(".porte", {duration: 1.5, opacity: 1}, "-=0.5")
.to(".main_fille_pousse", {duration: 1, opacity: 1})
.to(".main_fille_pousse", {duration: 1, scale: 0.8, y: "-5vh"}, "-=0.5")
.to(".texte05", {duration: 3, opacity: 1})
.to(".arriere_plan_gris", {duration: 1, opacity: 1}, "-=2")
.to(".fille_tombe_01", {duration: 1.5, opacity: 1, y: "15vh", rotate: 10})
.to(".train_tombe_01", {duration: 1.2, opacity: 1, y: "70vh", rotate: -20}, "-=1"); 

let animChapitre04 = gsap.timeline()
.to(".texte0601", {duration: 3, opacity: 1}, "+=1")
.to(".fille_08", {duration: 2, opacity: 1})
.to(".texte0602", {duration: 3, opacity: 1})
.to(".fille_09", {duration: 2, opacity: 1})
.to(".texte0603", {duration: 3, opacity: 1})
.to(".fille_07", {duration: 2, opacity: 1})
.to(".texte0604", {duration: 3, opacity: 1})
.to(".arriere_plan_gris_02", {duration: 1, opacity: 1}, "+=1")
.to(".fille_tombe_02", {duration: 1.5, opacity: 1, y: "27vh", rotate: 15})
.to(".triangulaire", {duration: 1.2, opacity: 1, y: "30vh", rotate: 30}, "-=1")
.to(".jeu_mobile", {duration: 1, opacity: 1, y: "3vh"}, "-=0.5")
.to(".train_tombe_02", {duration: 1.2, opacity: 1, y: "45vh", rotate: 60}, "-=1")
.to(".triangulaire02", {duration: 1.2, opacity: 1, y: "70vh", rotate: -30}, "-=1")
.to(".ours_tombe", {duration: 1, opacity: 1, y: "75vh", rotate: 30}, "-=0.5")
.to(".texte0605", {duration: 3, opacity: 1}); 

let animChapitre09 = gsap.timeline()
.to(".calin", {duration: 3, opacity: 1})
.to(".texte1101", {duration: 3, opacity: 1})
.to(".texte1102", {duration: 3, opacity: 1})
.to(".texte1103", {duration: 3, opacity: 1})
.to(".texte1104", {duration: 3, opacity: 1})
.to(".texte1101", {duration: 3, opacity: 0})
.to(".texte1102", {duration: 3, opacity: 0}, "<")
.to(".texte1103", {duration: 3, opacity: 0}, "<")
.to(".texte1104", {duration: 3, opacity: 0}, "<")
.to(".calin", {duration: 3, opacity: 0})
.to(".background_noir", {duration: 3, opacity: 1})
.to(".train_jouet", {duration: 3, opacity: 1})