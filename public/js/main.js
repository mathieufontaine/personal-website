import { startAnimation, scrollAnimation } from "./pages/home.js";
import { formValidation } from "./pages/contact.js";
import { initMotion } from "./animations/motion.js";
import { toggleMenuAnimation, hideNavbar } from "./pages/navbar.js";
// import { pageTransition } from "./transitions.js";

const main = document.querySelector("main");

// * Start plugin
// const swup = new Swup();
AOS.init();
// const lightbox = new SimpleLightbox(".project-img");

// * Navbar functions
// if (document.querySelector("body").classList.contains("fp-enabled")) {
//   fullpage_api.destroy("all");
// }

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
  // startAnimation();
  initMotion();
  scrollAnimation();
}
