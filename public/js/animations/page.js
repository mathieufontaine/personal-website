export const pageAnimation = () => {
  const details = document.querySelectorAll(".details");
  const hero = document.querySelectorAll(".hero");

  gsap.to([hero, details], {
    duration: 1.5,
    opacity: 1,
    x: 0,
    ease: "power1.inOut"
  });
};

// let tl = gsap.timeline({
//   defaults: {
//     duration: 1,
//     ease: "back.out(1.7)"
//   }
// });
