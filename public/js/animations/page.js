export const pageAnimation = () => {
  const details = document.querySelectorAll(".details");
  const hero = document.querySelector(".hero");

  gsap.to(details, 1, { delay: 0.5, x: 0, opacity: 1, ease: "power4.out" });
  //   gsap.to(hero, 1, { delay: 0.5, opacity: 1, ease: "power4.out" });
};

// let tl = gsap.timeline({
//   defaults: {
//     duration: 1,
//     ease: "back.out(1.7)"
//   }
// });
