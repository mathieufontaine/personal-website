import { throttle } from "../modules/throttle.js";

// Home Animations

const startAnimation = () => {
  const computer = document.querySelector("svg #Computer");
  const picture = document.querySelector("svg #picture");
  const mobile = document.querySelector("svg #mobile");

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

const slidesAnimation = () => {
  const slides = document.querySelectorAll(".slide");
  const pages = document.querySelectorAll(".page");
  // const backgrounds = [
  //   `radial-gradient(#2b3760, #0b1023)`,
  //   `radial-gradient(#4E3022, #161616)`,
  //   `radial-gradient(#4E4342, #0b1023)`
  // ];

  let current = 0;
  let scrollSlide = 0;

  slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
      changeDots(slide);
      nextSlide(index);
      scrollSlide = index;
    });
  });

  const changeDots = dot => {
    slides.forEach(slide => {
      slide.classList.remove("active");
    });
    dot.classList.add("active");
  };

  const nextSlide = pageNumber => {
    const nextPage = pages[pageNumber];
    const currentPage = pages[current];
    const nextImg = nextPage.querySelector(".hero img");
    const nextOverlay = nextPage.querySelector(".hero .overlay");

    // const nextRight = nextPage.querySelector(".hero .model-right");
    const currentImg = currentPage.querySelector(".hero img");
    const currentOverlay = currentPage.querySelector(".hero .overlay");

    // const currentRight = currentPage.querySelector(".hero .model-right");
    const nextText = nextPage.querySelector(".details");
    const content = document.querySelector(".content");

    const tl = new TimelineMax({
      onStart: function() {
        slides.forEach(slide => {
          slide.style.pointerEvents = "none";
        });
      },
      onComplete: function() {
        slides.forEach(slide => {
          slide.style.pointerEvents = "all";
        });
        slides[current].style.pointerEvents = "none";
      }
    });

    // tl.fromTo(currentOverlay, 0.5, { opacity: 0 }, { opacity: 1 }, "-=.5");
    // tl.fromTo(currentRight, 0.3, { y: "10%" }, { y: "-100%" }, "-=0.2");
    // tl.to(content, 0.3, { backgroundImage: backgrounds[pageNumber] });
    tl.fromTo(currentImg, 0.3, { x: "0" }, { x: "100%" });

    tl.fromTo(
      currentPage,
      0.3,
      { opacity: 1, pointerEvents: "all" },
      { opacity: 0, pointerEvents: "none" }
    )
      .fromTo(
        nextPage,
        0.3,
        { opacity: 0, pointerEvents: "none" },
        { opacity: 1, pointerEvents: "all" },
        "-=0.6"
      )
      .fromTo(nextImg, 0.5, { x: "100%" }, { x: "0%" })
      // .to(nextOverlay, 0.5, { opacity: 0 }, "-=.5")
      .fromTo(nextText, 0.3, { opacity: 0, y: -30 }, { opacity: 1, y: 0 })
      .set(nextImg, { clearProps: "all" });

    current = pageNumber;
  };

  const switchDots = dotNumber => {
    const activeDot = document.querySelectorAll(".slide")[dotNumber];
    slides.forEach(slide => {
      slide.classList.remove("active");
    });
    activeDot.classList.add("active");
  };

  const scrollChange = e => {
    if (e.deltaY > 0) {
      scrollSlide += 1;
    } else {
      scrollSlide -= 1;
    }
    if (scrollSlide > 4) {
      scrollSlide = 0;
    }
    if (scrollSlide < 0) {
      scrollSlide = 4;
    }
    switchDots(scrollSlide);
    nextSlide(scrollSlide);
    console.log(scrollSlide);
  };
  document.addEventListener("wheel", throttle(scrollChange, 1500));
  document.addEventListener("touchmove", throttle(scrollChange, 1500));
};

// Call Functions
startAnimation();
slidesAnimation();
