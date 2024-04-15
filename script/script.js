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

gsap.set(".sueur_01", { x: "14vw", y: "0vh", opacity: 0});
gsap.to(".sueur_01", { duration: 2, y: "35vh", opacity: 1, repeat: -1});

gsap.set(".sueur_02", { x: "19vw", y: "-13vh", opacity: 0});
gsap.to(".sueur_02", { duration: 3, y: "40vh", opacity: 1, repeat: -1});

gsap.set(".sueur_03", { x: "70vw", y: "-7vh", opacity: 0});
gsap.to(".sueur_03", { duration: 1.5, y: "20vh", opacity: 1, repeat: -1});

gsap.set(".sueur_04", { x: "45vw", y: "-20vh", opacity: 0});
gsap.to(".sueur_04", { duration: 3.5, y: "25vh", opacity: 1, repeat: -1});

gsap.set(".fille_couche", {x: "30vw", y: "23vh", opacity: 0});
gsap.set(".fille_assise", {x: "30vw", y: "7vh", opacity: 0});
gsap.set(".fille_debout", {x: "36vw", y: "10vh", opacity: 0});

gsap.set(".train_wagon", {x: "50vw", y: "38vh"});


gsap.timeline()
  .from(".fille_couche", {duration: 1, opacity: 1})
  .from(".fille_couche", {duration: 1, opacity: 0})
  .from(".fille_assise", {duration: 1, opacity: 1})
  .from(".fille_assise", {duration: 1, opacity: 0})
  .from(".fille_debout", {duration: 1, opacity: 1})
  .from(".fille_debout", {duration: 1, opacity: 0})
  ;
