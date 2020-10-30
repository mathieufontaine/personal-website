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
  let tl2 = gsap.timeline({
    defaults: {
      duration: 2,
      ease: "power1.easeIn"
    }
  });

  let tl3 = gsap.timeline({
    // yoyo: true,
    // delay: 2,
    // repeat: -1,
    defaults: {
      duration: 3,
      ease: "power3.easeIn",
      transformOrigin: "center",
      yoyo: true,
      repeat: -1
      // delay: 1
    }
  });

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

  tl2.to(computer, {
    opacity: 1,
    scale: 1.2,
    transformOrigin: "center"
  });
  tl2.to(picture, {
    opacity: 1,
    scale: 1.2,
    transformOrigin: "center"
  });
  tl2.to(
    mobile,
    {
      opacity: 1,
      scale: 1.2,
      transformOrigin: "center"
    },
    "-=1"
  );

  tl3.fromTo(
    computer,
    {
      scale: 1.2
    },
    { scale: 0.7 },
    "=5"
  );
  tl3.fromTo(
    picture,
    {
      scale: 1.2
    },
    { scale: 0.7 },
    "-=1"
  );
  tl3.fromTo(
    mobile,
    {
      scale: 1.2
    },
    { scale: 0.7 },
    "-=1"
  );
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
