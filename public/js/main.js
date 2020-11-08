// import { startAnimation, scrollAnimation } from "./pages/home.js";
// import { formValidation } from "./pages/contact.js";
// import { pageTransition } from "./transitions.js";

// const lightbox = new SimpleLightbox(".project-img");

const toggleMenuAnimation = () => {
  const hamburger = document.querySelector(".menu");
  const hamburgerLines = document.querySelectorAll(".menu line");
  const navOpen = document.querySelector(".nav-open");
  const logo = document.querySelector(".logo");
  const navItem = navOpen.querySelectorAll("li");

  const tl = gsap.timeline({ reversed: true });

  tl.to(navOpen, 0.5, { y: 0 }).fromTo(
    navItem,
    0.5,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, stagger: 0.1 },
    "-=0.1"
  );
  // .fromTo(logo, 0.2, { color: "white" }, { color: "black" }, "-=1")
  // .fromTo(
  //   hamburgerLines,
  //   0.2,
  //   { stroke: "white" },
  //   { stroke: "black" },
  //   "-=1"
  // );

  hamburger.addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse();
  });
};

const hideNavpage = () => {
  const navbar = document.querySelector(".nav-page");

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;
  };
};

// Call functions
toggleMenuAnimation();
hideNavpage();
