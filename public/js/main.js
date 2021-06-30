import { showcaseAnimation, scrollAnimation } from "./pages/home.js";
import { formValidation } from "./pages/contact.js";
import { initMotion } from "./animations/motion.js";
import { pageAnimation } from "./animations/page.js";
import { toggleMenuAnimation, hideNavbar, colorMenu } from "./pages/navbar.js";
import { enableTabs } from "./pages/services.js";
import { initTextTyper } from "./animations/textTyper.js";
// import { pageTransition } from "./transitions.js";

// * Start plugin
// const swup = new Swup();
AOS.init();
// const lightbox = new SimpleLightbox(".project-img");

// * Global functions

const main = document.querySelector("main");

// * Pages functions
if (!main.classList.contains("home-page" || "contact-page")) {
  pageAnimation();
}

// * Navbar functions
toggleMenuAnimation();
if (!main.classList.contains("home-page")) {
  hideNavbar();
}

// * About function
if (main.classList.contains("about-page")) {
  initTextTyper();
}

// * Services function
if (main.classList.contains("services-page")) {
  enableTabs();
  // scaleStandardCard();
}

// * Contact function
if (main.classList.contains("contact-page")) {
  formValidation();
}

// * Home function
if (main.classList.contains("home-page")) {
  showcaseAnimation();
  pageAnimation();

  // startAnimation();
  // initTextTyper();
  initMotion();
  scrollAnimation();
  colorMenu();
  // scrollDown();
}
