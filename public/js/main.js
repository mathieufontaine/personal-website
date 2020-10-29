import { validate } from "./formValidation.js";

// Select DOM items
const submit = document.querySelector("#submit");
const inputs = document.querySelectorAll(".input");

// Call Functionss
AOS.init();
const lightbox = new SimpleLightbox(".project-img");

// Event Listener

// submit.addEventListener("click", validate);
inputs.forEach(input =>
  input.addEventListener("focus", function() {
    error_message.style.display = "none";
    input.classList.remove("redShadow");
  })
);

inputs.forEach(input => input.addEventListener("blur", validate));

const startAnimation = () => {
  let tl = gsap.timeline({
    defaults: {
      duration: 2,
      ease: "power2.inOut"
    }
  });

  tl.from(".showcase h2", { x: "-100vw" });
  tl.from(".showcase h3", { x: "100vw" }, "-=2");
  tl.from(".navbar", { x: "-100vw" }, "-=2");
  tl.from([".showcase .headers", ".showcase img"], {
    opacity: 0
  });
  tl.to(".nav-item", { x: 0, stagger: 0.1 }, "-=2");
};

const contactAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".form-container",
      start: "center 50%",
      end: "bottom 20%",
      toggleActions: "play none none reset",

      defaults: {
        ease: "power2.inOut"
      }
    }
  });

  tl.from(".form-container", { duration: 1, scale: 0 });
};

startAnimation();
// contactAnimation();
