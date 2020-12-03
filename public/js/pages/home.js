// import { initMotion } from "../animations/motion.js";

// Home Animations
export const showcaseAnimation = () => {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const titles = document.querySelector(".headers");
  const svg = document.querySelector(".svg");
  const arrow = document.querySelector(".arrows-btn");

  let tl = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: "power1.easeIn"
    }
  });

  gsap.to(header, 1, { y: 0, ease: "back.out(1.7)" });
  gsap.to(titles, 1.5, {
    delay: 0.5,
    y: 0,
    opacity: 1,
    ease: "power4.out"
  });
  gsap.to(nav, 1.5, { delay: 0.5, opacity: 1 });
  tl.to(svg, 1.5, { delay: 0.5, y: 0, opacity: 1 });
  tl.to(arrow, 1.5, { delay: 0.5, opacity: 1 });
};

export const scrollAnimation = () => {
  if (document.querySelector("body").classList.contains("fp-enabled")) {
    fullpage_api.reBuild();
  }

  new fullpage("#home-sections", {
    autoScrolling: true,
    navigation: true,
    scrollingSpeed: 1600,
    slidesNavigation: true,
    keyboardScrolling: true,
    loopBottom: true,
    // fadingEffect: true,
    easing: "easeInOutCubic",
    onLeave: (origin, destination, direction) => {
      const section = destination.item;
      // console.log(destination);
      // const details = section.querySelector(".details");
      const text = section.querySelectorAll(".text");
      const img = section.querySelector(".hero img");
      const btn = section.querySelector(".details .btn");
      const imgHeader = section.querySelector(".headers-container img");
      const titles = document.querySelector(".headers");
      const arrow = document.querySelector(".arrows-btn");

      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(img, 0.8, { x: "150vw", opacity: 0 }, { x: 0, opacity: 1 });
      tl.fromTo(text, 1, { y: "100%" }, { y: 0, stagger: 0.2 }, "-=.2");
      tl.fromTo(btn, 0.5, { x: "-250vw" }, { x: 0 }, "-=2");

      const tl2 = gsap.timeline({ delay: 0.6 });
      tl2.fromTo(
        imgHeader,
        0.8,
        { x: "150vw", opacity: 0 },
        { x: 0, opacity: 1 }
      );
      tl2.fromTo(
        titles,
        1.2,
        { y: "100", opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.8"
      );
      tl2.fromTo(arrow, 1, { opacity: 0 }, { opacity: 1 }, "-=1");

      // document.querySelector("body").classList.add("fp-enabled");
    }
  });
};
// export const svgScaleAnimation = () => {

//   const computer = document.querySelector("svg #computer");
//   const picture = document.querySelector("svg #picture");
//   const mobile = document.querySelector("svg #mobile");

//   let tl2 = gsap.timeline({
//     defaults: {
//       duration: 2,
//       ease: "power1.easeIn"
//     }
//   });

//   let tl3 = gsap.timeline({

//     defaults: {
//       duration: 3,
//       ease: "power3.easeIn",
//       transformOrigin: "center",
//       yoyo: true,
//       repeat: -1
//     }
//   });

//   tl.from(".showcase h2", { x: "-100vw" });
//   tl.from(".showcase h3", { x: "100vw" }, "-=2");
//   tl.from(".navbar", { x: "-100vw" }, "-=2");
//   tl.to(".nav-item", { x: 0, stagger: 0.2 }, "-=2");
//   tl.from(
//     [".showcase .headers", ".showcase svg"],
//     {
//       opacity: 0
//     },
//     "-=2"
//   );

//   tl2
//     .to(computer, {
//       opacity: 1,
//       scale: 1,
//       transformOrigin: "center"
//     })
//     .to(picture, {
//       opacity: 1,
//       scale: 1,
//       transformOrigin: "center"
//     })
//     .to(
//       mobile,
//       {
//         opacity: 1,
//         scale: 1,
//         transformOrigin: "center"
//       },
//       "-=1"
//     );

//   tl3
//     .fromTo(
//       computer,
//       {
//         scale: 1
//       },
//       { scale: 0.7 },
//       "=5"
//     )
//     .fromTo(
//       picture,
//       {
//         scale: 1
//       },
//       { scale: 0.7 },
//       "-=1"
//     )
//     .fromTo(
//       mobile,
//       {
//         scale: 1
//       },
//       { scale: 0.7 },
//       "-=1"
//     );
// };

// const slidesAnimation = () => {
//   const slides = document.querySelectorAll(".slide");
//   const pages = document.querySelectorAll(".page");
//   // const backgrounds = [
//   //   `radial-gradient(#2b3760, #0b1023)`,
//   //   `radial-gradient(#4E3022, #161616)`,
//   //   `radial-gradient(#4E4342, #0b1023)`
//   // ];

//   let current = 0;
//   let scrollSlide = 0;

//   slides.forEach((slide, index) => {
//     slide.addEventListener("click", () => {
//       changeDots(slide);
//       nextSlide(index);
//       scrollSlide = index;
//     });
//   });

//   const changeDots = dot => {
//     slides.forEach(slide => {
//       slide.classList.remove("active");
//     });
//     dot.classList.add("active");
//   };

//   const nextSlide = pageNumber => {
//     const nextPage = pages[pageNumber];
//     const currentPage = pages[current];
//     const nextImg = nextPage.querySelector(".hero img");
//     const nextOverlay = nextPage.querySelector(".hero .overlay");

//     // const nextRight = nextPage.querySelector(".hero .model-right");
//     const currentImg = currentPage.querySelector(".hero img");
//     const currentOverlay = currentPage.querySelector(".hero .overlay");

//     // const currentRight = currentPage.querySelector(".hero .model-right");
//     const nextText = nextPage.querySelector(".details");
//     const content = document.querySelector(".content");

//     const tl = new TimelineMax({
//       onStart: function() {
//         slides.forEach(slide => {
//           slide.style.pointerEvents = "none";
//         });
//       },
//       onComplete: function() {
//         slides.forEach(slide => {
//           slide.style.pointerEvents = "all";
//         });
//         slides[current].style.pointerEvents = "none";
//       }
//     });

//     // tl.fromTo(currentOverlay, 0.5, { opacity: 0 }, { opacity: 1 }, "-=.5");
//     // tl.fromTo(currentRight, 0.3, { y: "10%" }, { y: "-100%" }, "-=0.2");
//     // tl.to(content, 0.3, { backgroundImage: backgrounds[pageNumber] });
//     tl.fromTo(currentImg, 0.3, { x: "0" }, { x: "100%" });

//     tl.fromTo(
//       currentPage,
//       0.3,
//       { opacity: 1, pointerEvents: "all" },
//       { opacity: 0, pointerEvents: "none" }
//     )
//       .fromTo(
//         nextPage,
//         0.3,
//         { opacity: 0, pointerEvents: "none" },
//         { opacity: 1, pointerEvents: "all" },
//         "-=0.6"
//       )
//       .fromTo(nextImg, 0.5, { x: "100%" }, { x: "0%" })
//       // .to(nextOverlay, 0.5, { opacity: 0 }, "-=.5")
//       .fromTo(nextText, 0.3, { opacity: 0, y: -30 }, { opacity: 1, y: 0 })
//       .set(nextImg, { clearProps: "all" });

//     current = pageNumber;
//   };

//   const switchDots = dotNumber => {
//     const activeDot = document.querySelectorAll(".slide")[dotNumber];
//     slides.forEach(slide => {
//       slide.classList.remove("active");
//     });
//     activeDot.classList.add("active");
//   };

//   const scrollChange = e => {
//     if (e.deltaY > 0) {
//       scrollSlide += 1;
//     } else {
//       scrollSlide -= 1;
//     }
//     if (scrollSlide > 4) {
//       scrollSlide = 0;
//     }
//     if (scrollSlide < 0) {
//       scrollSlide = 4;
//     }
//     switchDots(scrollSlide);
//     nextSlide(scrollSlide);
//     console.log(scrollSlide);
//   };
//   document.addEventListener("wheel", throttle(scrollChange, 1500));
//   document.addEventListener("touchmove", throttle(scrollChange, 1500));
// };

// export const scrollDown = () => {
//   document.querySelector(".test").addEventListener("click", () => {
//     window.scrollTo(0, 1000);
//   });
// };

// Call Functions

// startAnimation();
// slidesAnimation();
// scrollAnimation();
// initMotion();
