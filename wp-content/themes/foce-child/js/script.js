const titles = document.querySelectorAll("h3, h2"); // Sélectionne tous les éléments h3, h2

window.addEventListener("scroll", function () { // Ajoute un écouteur d'événement sur le défilement
  titles.forEach((currentTitle) => { // Pour chaque titre
    
    if (!currentTitle.classList.contains("animated")) { // Vérifie si l'animation n'a pas déjà été appliquée
      let positionTop = // Calcule la position de défilement
        currentTitle.getBoundingClientRect().top - window.innerHeight / 2; // Récupère la position du titre par rapport au haut de la page
      if (positionTop < 0) { // Vérifie si le titre est visible
        currentTitle.classList.add("animate-title", "animated"); // Ajoute la classe "animate-title" et marque comme animé
        const words = currentTitle.querySelectorAll("span"); // Sélectionne tous les éléments span
        words.forEach((currentWord, index) => { // Pour chaque mot
          currentWord.classList.add("word-Animation"); // Ajoute la classe word au span
          currentWord.style.animationDelay = `${index * 0.2}s`; // Ajoute un délai d'animation
        });
      }
    }
  });
});

// Slide Swiper
const swiper = new Swiper(".mySwiper", { // Crée une nouvelle instance de Swiper
  // Optional parameters
  spaceBetween: 60,
  speed: 1000,
  autoplay: {
    delay: 1000,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 60,
    stretch: 0,
    depth: 100, // Profondeur
    modifier: 1, // Modificateur
    slideShadows: false,
  },
});

//Menu
document.addEventListener("DOMContentLoaded", function () { // Attend que le DOM soit chargé
  const menuBurger = document.getElementById("menu_burger"); // Sélectionne l'élément avec l'id menu_burger
  const openBtn = document.getElementById("openBtn"); //  Sélectionne l'élément avec l'id openBtn
  const closeBtn = document.getElementById("closeBtn"); // Sélectionne l'élément avec l'id closeBtn

  // Ouvrir le menu
  openBtn.addEventListener("click", function () { // Ajoute un écouteur d'événement sur le clic
    menuBurger.classList.add("active"); // Ajoute la classe active
    openBtn.classList.add("hidden"); // Cache le bouton d'ouverture
  });

  // Fermer le menu
  closeBtn.addEventListener("click", function () { // Ajoute un écouteur d'événement sur le clic
    menuBurger.classList.remove("active"); // Retire la classe active
    openBtn.classList.remove("hidden"); // Affiche le bouton d'ouverture
  });

  // Optionnellement, fermer le menu quand on clique sur un lien
  document.querySelectorAll(".lien_burger").forEach(function (link) { //  Sélectionne tous les éléments avec la classe lien_burger
    link.addEventListener("click", function () { // Ajoute un écouteur d'événement sur le clic
      menuBurger.classList.remove("active"); // Retire la classe active
      openBtn.classList.remove("hidden"); // Affiche le bouton d'ouverture
    });
  });
});

// accélération des fleurs au scroll
const flower = document.querySelector(".flower:before"); // Sélectionne l'élément avec la classe flower
let root = document.querySelector(":root"); // Sélectionne l'élément racine

window.addEventListener("scroll", () => { // Ajoute un écouteur d'événement sur le défilement
  root.style.setProperty("--rotate", "2s"); // Définit la propriété --rotate à 2s
});

window.addEventListener("scrollend", () => { // Ajoute un écouteur d'événement sur la fin du défilement
  root.style.setProperty("--rotate", "20s"); // Définit la propriété --rotate à 20s
});

// Défilement des nuages
// let lastScrollTop = 0; // Variable pour stocker la position de défilement précédente

// window.addEventListener("scroll", function () { // Ajoute un écouteur d'événement sur le défilement
//     let currentScroll =
//       window.pageYOffset || document.documentElement.scrollTop; // Récupère la position de défilement actuelle

//     let clouds = document.getElementById("big_cloud"); // Sélectionne l'élément avec l'id big_cloud
//     let clouds2 = document.getElementById("little_cloud"); // Sélectionne l'élément avec l'id little_cloud

//     // Déterminer la direction du défilement
//     if (currentScroll > lastScrollTop) {
//       // Défilement gauche
//       clouds.style.transform = "translateX(-300px)"; // Déplace les nuages de 300px vers la gauche
//       clouds2.style.transform = "translateX(-300px)"; // Déplace les nuages de 300px vers la gauche
//     } else {
//       // Défilement droite
//       clouds.style.transform = "translateX(300px)"; // Déplace les nuages de 300px vers la droite
//       clouds2.style.transform = "translateX(300px)"; // Déplace les nuages de 300px vers la droite
//     }

//     // Mise à jour de lastScrollTop
//     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Pour le support mobile
//   },
//   false
// ); 

// Défilement des nuages
document.addEventListener('DOMContentLoaded', function () { // Attend que le DOM soit chargé
  let lastScrollTop = 0; // Stocke la dernière position de défilement
  let lastTranslationX = 0; // Stocke la dernière translation utilisée

  function handleScroll() { // Fonction pour gérer le défilement
        const scrollPosition = window.scrollY || document.documentElement.scrollTop; // Récupère la position de défilement actuelle
        const placeSection = document.querySelector('#place'); // Sélectionne l'élément avec l'id place
        const sectionOffsetTop = placeSection.offsetTop; // Récupère la position de défilement de l'élément par rapport au haut de la page
        const clouds = document.getElementById('big_cloud'); // Sélectionne l'élément avec l'id big_cloud
        const clouds2 = document.getElementById('little_cloud'); // Sélectionne l'élément avec l'id little_cloud
        let translationX = 0; // Initialise la translation X
        if (scrollPosition >= sectionOffsetTop) { // Vérifie si la position de défilement est supérieure ou égale à la position de défilement de l'élément
          const parallaxDepth = 300; // Profondeur du parallaxe
          translationX = Math.min((scrollPosition - sectionOffsetTop) / 2.5, parallaxDepth); // Calcule la translation X
        }

      if (scrollPosition > lastScrollTop) { // Vérifie la direction du défilement
          // Scroll bas, déplacer les nuages vers la gauche
          clouds.style.transform = `translateX(${-translationX}px)`;
          clouds2.style.transform = `translateX(${-translationX}px)`;
      } else {
          // Scrolling haut, déplacer les nuages vers la droite
          clouds.style.transform = `translateX(${-translationX}px)`;
          clouds2.style.transform = `translateX(${-translationX}px)`;
      }

      lastTranslationX = translationX; // Met à jour la dernière translation X

      lastScrollTop = scrollPosition; // Met à jour la dernière position de défilement

      requestAnimationFrame(handleScroll); // Demande une nouvelle animation de trame
  }

  window.addEventListener('scroll', handleScroll, false); // Ajoute un écouteur d'événement sur le défilement
});

// parallax
var s = skrollr.init({
  // Initialise Skrollr
  smoothScrolling: false, // Désactive le défilement fluide
  forceHeight: false, // Désactive la force de hauteur
  mobileCheck: function () {
    // Désactive skrollr si la largeur de l'écran est inférieure à 768px
    return window.innerWidth < 768; // Retourne vrai si la largeur de l'écran est inférieure à 768px
  },
});
