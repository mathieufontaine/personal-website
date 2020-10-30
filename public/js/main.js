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

// Animations

const computer = document.querySelector("svg #Computer");
const picture = document.querySelector("svg #picture");
const mobile = document.querySelector("svg #mobile");

const startAnimation = () => {
  let tl = gsap.timeline({
    defaults: {
      duration: 2,
      ease: "power2.inOut"
    }
  });

  const svgAnimation = () => {
    tl.to(computer, 0.5, { opacity: 1, scale: 1.5, transformOrigin: "center" });
    tl.to(computer, 0.5, { scale: 1 });
    tl.to(picture, 0.5, { opacity: 1, scale: 1.5, transformOrigin: "center" });
    tl.to(picture, 0.5, { scale: 1 });
    tl.to(mobile, 0.5, { opacity: 1, scale: 1.5, transformOrigin: "center" });
    tl.to(mobile, 0.5, { scale: 1 });
  };

  tl.to(computer, 0, { opacity: 0, scale: 0, transformOrigin: "center" });
  tl.to(mobile, 0, { opacity: 0, scale: 0, transformOrigin: "center" });
  tl.to(picture, 0, { opacity: 0, scale: 0, transformOrigin: "center" });
  tl.from(".showcase h2", { x: "-100vw" });
  tl.from(".showcase h3", { x: "100vw" }, "-=2");
  tl.from(".navbar", { x: "-100vw" }, "-=2");
  tl.to(".nav-item", { x: 0, stagger: 0.2 }, "-=2");
  tl.from(
    [".showcase .headers", ".showcase svg"],
    {
      opacity: 0
    },
    "-=2"
  );
  svgAnimation();

  setInterval(() => {
    svgAnimation();
  }, 10000);
};

startAnimation();

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
