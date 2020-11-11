export const toggleMenuAnimation = () => {
  const hamburger = document.querySelector(".menu");
  const line1 = document.querySelectorAll(".menu .line1");
  const line2 = document.querySelectorAll(".menu .line2");
  const line3 = document.querySelectorAll(".menu .line3");
  const navOpen = document.querySelector(".nav-open");
  const logo = document.querySelector(".logo");
  const navItem = navOpen.querySelectorAll("li");

  const tl = gsap.timeline({ reversed: true });

  tl.to(navOpen, 0.5, { y: 0 }, 0);
  tl.fromTo(
    navItem,
    0.5,
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, stagger: 0.1 },
    "-=.5"
  );
  tl.to(line1, 0.3, { rotation: 45, attr: { x2: 28, strokeWidth: 4 } }, "-=1");
  tl.to(line2, 0, { opacity: 0 }, "-=1");
  tl.to(
    line3,
    0.3,
    {
      transformOrigin: "left",
      attr: { x2: 28, strokeWidth: 4 },
      rotation: -45
    },
    "-=1"
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

export const hideNavbar = () => {
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
