import { startAnimation, scrollAnimation } from "./pages/home.js";
import { formValidation } from "./pages/contact.js";
import { initMotion } from "./animations/motion.js";
import { pageAnimation } from "./animations/page.js";
import { showcaseAnimation } from "./pages/home.js";
import { toggleMenuAnimation, hideNavbar } from "./pages/navbar.js";
// import { pageTransition } from "./transitions.js";

const main = document.querySelector("main");

// * Start plugin
// const swup = new Swup();
AOS.init();
// const lightbox = new SimpleLightbox(".project-img");

// * Global functions

// * Pages functions
if (!main.classList.contains("home-page" || "contact-page")) {
  pageAnimation();
}

// * Navbar functions
toggleMenuAnimation();
if (!main.classList.contains("home-page")) {
  hideNavbar();
}

// * Contact function
if (main.classList.contains("contact-page")) {
  formValidation();
}

// * Home function
if (main.classList.contains("home-page")) {
  showcaseAnimation();
  startAnimation();
  initMotion();
  scrollAnimation();
}
