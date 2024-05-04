gsap.registerPlugin(ScrollTrigger);

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

//ANIMATION CHAPITRE 1
let animChapitre01 = gsap.timeline( {scrollTrigger: {
  markers: true,
  pin: true, 
  scrub: true,
  toggleActions: 'restart complete reverse reset',
  start: 'top top',
  end: '2500% top',
  trigger: '#chapter01',
}
})
.to(".texte01", {duration: 3, opacity: 1})
.to(".yeux", {duration: 0.5, opacity: 1}, "-=2")
.to(".yeux", {duration: 0.25, opacity: 0}, "+=1")
.to(".ghost", {duration: 1, opacity: 1}, "-=0.5")
.to(".ghost", {duration: 0.25, opacity: 0}, "+=3")
.to(".yeux_fille_fermee", {duration: 1, opacity: 1}, "-=0.05")
.to(".sueur_01", { duration: 2, opacity: 1}, "<")
.to(".sueur_02", { duration: 3, opacity: 1}, "<")
.to(".sueur_03", { duration: 1.5, opacity: 1}, "<")
.to(".sueur_04", { duration: 3.5, opacity: 1}, "<")
.to(".yeux_fille_fermee", {duration: 0.5, opacity: 0})
.to(".yeux_fille_ouvert", {duration: 0.5, opacity: 1}, "-=0.05"); 

gsap.to(".sueur_01", { duration: 2, y: "35vh", repeat: -1}, "<")
gsap.to(".sueur_02", { duration: 3, y: "40vh", repeat: -1}, "<")
gsap.to(".sueur_03", { duration: 1.5, y: "20vh", repeat: -1}, "<")
gsap.to(".sueur_04", { duration: 3.5, y: "25vh", repeat: -1}, "<")

//ANIMATION CHAPITRE 2
let animChapitre02 = gsap.timeline( {scrollTrigger: {
  markers: true,
  pin: true, 
  scrub: true, 
  start: 'top top',
  end: '1000% top',
  toggleActions: 'restart complete reverse reset',
  trigger: '#chapter02',
}
}); 

animChapitre02.to(".texte02", {duration: 3, opacity: 1})
.to(".fille_couche", {duration: 1, opacity: 1}, "-=2")
.to(".train_wagon", {duration: 1, opacity: 1}, "<")
.to(".fille_couche", {duration: 0.25, opacity: 0}, "+=1")
.to(".fille_assise", {duration: 1, opacity: 1})
.to(".fille_assise", {duration: 0.25, opacity: 0}, "+=1")
.to(".fille_debout", {duration: 1, opacity: 1})
.to(".train_wagon", {duration: 0.25, opacity: 0}, "<")

//ANIMATION CHAPITRE 3
let animChapitre03 = gsap.timeline( {scrollTrigger: {
  markers: true,
  pin: true, 
  scrub: true,
  toggleActions: 'restart complete reverse reset',
  start: 'top top',
  end: '1500% top',
  trigger: '#chapter03',
}
}); 

animChapitre03.to(".texte03", {duration: 3, opacity: 1})
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

//ANIMATION CHAPITRE 4
let animChapitre04 = gsap.timeline( {scrollTrigger: {
  markers: true,
  pin: true, 
  scrub: true,
  toggleActions: 'restart complete reverse reset',
  start: 'top top',
  end: '1700% top',
  trigger: '#chapter04',
}
}); 

animChapitre04.to(".texte0601", {duration: 3, opacity: 1}, "+=1")
.to(".fille_08", {duration: 2, opacity: 1})
.to(".train_chambre", {duration: 2, opacity: 1}, "<")
.to(".mere_01", {duration: 2, opacity: 1}, "<")
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

//ANIMATION CHAPITRE 5
let animChapitre05 = gsap.timeline( {scrollTrigger: {
  markers: true,
  pin: true, 
  scrub: true,
  toggleActions: 'restart complete reverse reset',
  start: 'top top',
  end: '3000% top',
  trigger: '#chapter06',
}
}); 

animChapitre05.to(".bulle_train", {duration: 2, opacity: 0.5})
.to(".bulle01", {duration: 2, opacity: 0.5}, "<")
.to(".bulle02", {duration: 2, opacity: 0.5}, "<")
.to(".bulle03", {duration: 2, opacity: 0.5}, "<")
.to(".bulle04", {duration: 2, opacity: 0.5}, "<")
.to(".texte0801", {duration: 3, opacity: 1})
.to(".baleine", {duration: 25, x: "-65vw", y: "65vh", rotate: -20}, "-=2")
.to(".fille_03", {duration: 2, opacity: 1}, "-=20")
.to(".mere_03", {duration: 2, opacity: 1}, "<")
.to(".poisson", {duration: 20, x: "65vw"}, "<")
.to(".fille_02", {duration: 7, opacity: 1}, "-=15")
.to(".fille_02", {duration: 9, x: "-60vw", y: "-130vh"}, "<")
.to(".fille_02", {duration: 4, rotate: 60}, "<")
.to(".texte0802", {duration: 3, opacity: 1}, "-=5") 
.to(".fille_01", {duration: 2, opacity: 1})
.to(".train_aquarium", {duration: 2, opacity: 1}, "<")
.to(".texte0803", {duration: 3, opacity: 1})
.to(".thud01", {duration: 0.5, x: "20vw", rotate: 20})
.to(".thud02", {duration: 0.5, x: "28vw", rotate: -10})
.to(".fille_03", {duration: 0.2, opacity: 0}, "<")
.to(".mere_03", {duration: 0.2, opacity: 0}, "<")
.to(".thud03", {duration: 0.5, x: "20vw", rotate: -5})
.to(".fille_01", {duration: 0.2, opacity: 0}, "<")
.to(".train_aquarium", {duration: 0.2, opacity: 0}, "<")
.to(".thud04", {duration: 0.5, x: "14vw", rotate: 10})
.to(".bulle_train", {duration: 0.2, opacity: 0}, "<")
.to(".bulle01", {duration: 0.2, opacity: 0}, "<")
.to(".bulle02", {duration: 0.2, opacity: 0}, "<")
.to(".bulle03", {duration: 0.2, opacity: 0}, "<")
.to(".bulle04", {duration: 0.2, opacity: 0}, "<")
.to(".thud01", {duration: 2, opacity: 0})
.to(".thud02", {duration: 2, opacity: 0}, "<")
.to(".thud03", {duration: 2, opacity: 0}, "<")
.to(".thud04", {duration: 2, opacity: 0}, "<")
.to(".girl", {duration: 5, x: "113vw"}, "<"); 

gsap.to(".bulle_train", {duration: 1.5, y: "1vh", yoyo: true, repeat: -1}, "<")
gsap.to(".bulle01", {duration: 1.5, y: "1vh", yoyo: true, repeat: -1}, "<")
gsap.to(".bulle02", {duration: 2.5, y: "2vh", yoyo: true, repeat: -1}, "<")
gsap.to(".bulle03", {duration: 2, y: "3vh", yoyo: true, repeat: -1}, "<")
gsap.to(".bulle04", {duration: 1, y: "1.5vh", yoyo: true, repeat: -1}, "<")
gsap.to(".fille_01", {duration: 2.5, y: "1vh", yoyo: true, repeat: -1}, "<") 
gsap.to(".train_aquarium", {duration: 2, y: "1.5vh", yoyo: true, repeat: -1}, "<")

//ANIMATION CHAPITRE 6
let animChapitre06 = gsap.timeline( {scrollTrigger: {
  markers: true,
  pin: true, 
  scrub: true,
  toggleActions: 'restart complete reverse reset',
  start: 'top top',
  end: '2300% top',
  trigger: '#chapter07',
}
}); 

animChapitre06.to(".porte02", {duration: 3, opacity: 1})
.to(".main_vide", {duration: 1, opacity: 1})
.to(".main_vide", {duration: 1, scale: 1.2, y: "-10vh"}, "-=0.5")
.to(".texte0901", {duration: 3, opacity: 1})
.to(".texte0902", {duration: 3, opacity: 1})
.to(".porte02", {duration: 2, opacity: 0})
.to(".main_vide", {duration: 1, opacity: 0}, "<")
.to(".main_vide", {duration: 1, opacity: 0}, "<")
.to(".train_jouet02", {duration: 3, opacity: 1})
.to(".main_etendu", {duration: 2, opacity: 1, scale: 0.95, x: "-5vw", y: "5vh"})
.to(".train_jouet02", {duration: 1, opacity: 0})
.to(".main_etendu", {duration: 1, opacity: 0}, "<")
.to(".texte0903", {duration: 3, opacity: 1})
.to(".ghost02", {duration: 0.5, opacity: 1, scale: 1.2})
.to(".ghost02", {duration: 1, opacity: 0})
.to(".texte0904", {duration: 3, opacity: 1}); 

//ANIMATION CHAPITRE 7
let animChapitre07 = gsap.timeline( {scrollTrigger: {
  markers: true,
  pin: true,
  scrub: true,
  toggleActions: 'restart complete reverse reset', 
  start: 'top top',
  end: '2300% top',
  trigger: '#chapter08',
}
});

animChapitre07.to(".yeux_fille", {duration: 3, opacity: 1})
.to(".un", {duration: 3, opacity: 1})
.to(".un", {duration: 3, opacity: 0})
.to(".yeux_fille", {duration: 3, opacity: 0},"<")
.to(".background_noir01", {duration: 3, opacity: 0}, "<")
.to(".railles", {duration: 3, opacity: 1, y: "-2vw"})
.to(".nuage", {duration: 2, opacity: 1, y: "-2vw"}, "<")
.to(".gazon", {duration: 3, opacity: 1, y: "-3vw"}, "<")
.to(".mere_de_dos", {duration: 2, opacity: 1})
.to(".deux", {duration: 3, opacity: 1})
.to(".deux", {duration: 2, opacity: 0})
.to(".trois", {duration: 3, opacity: 1}, "-=1")
.to(".trois", {duration: 3, opacity: 0})
.to(".railles", {duration: 2, opacity: 0})
.to(".nuage", {duration: 2, opacity: 0}, "<")
.to(".gazon", {duration: 2, opacity: 0}, "<")
.to(".mere_de_dos", {duration: 2, opacity: 0}, "<")
.to(".quatre", {duration: 2, opacity: 1})
.to(".quatre", {duration: 1, opacity: 0})
.to(".cinq", {duration: 2, opacity: 1}, "-=1")
.to(".bras_mere", {duration: 2, opacity: 1,  x: "-20vw"})
.to(".bras_fille", {duration: 2, opacity: 1, x: "10vw"})
.to(".cinq", {duration: 2, opacity: 0})
.to(".bras_mere", {duration: 2, opacity: 0}, "<")
.to(".bras_fille", {duration: 2, opacity: 0}, "<")
.to(".reunion", {duration: 3, opacity: 1})
.to(".six", {duration: 2, opacity: 1}, "-=1"); 

//ANIMATION CHAPITRE 8
let animChapitre08 = gsap.timeline( {scrollTrigger: {
  markers: true,
  pin: true,
  scrub: true,
  toggleActions: 'restart complete reverse reset', 
  start: 'top top',
  end: '1000% top',
  trigger: '#chapter09',
}
})

animChapitre08.to(".calin", {duration: 3, opacity: 1})
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