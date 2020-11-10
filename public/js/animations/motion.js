export const initMotion = () => {
  const containers = document.querySelectorAll(".section");

  containers.forEach(container => {
    // * Moving elements
    const svg = container.querySelector("svg");
    const circles = container.querySelectorAll("circle");

    // * Animate In

    container.addEventListener("mouseenter", e => {
      // svg.style.width = "150%";

      circles.forEach(circle => {
        circle.style.transform = "scale(1.2)";
        // console.log(circle.style.transform, svg.style.width);
      });
    });

    // * Animate Out

    container.addEventListener("mouseleave", e => {
      // svg.style.width = "75%";
      svg.style.transition = "all .5s ease";

      circles.forEach(circle => {
        circle.style.transform = "scale(1)";
        circle.style.transition = "all .5s ease";
      });
    });
  });
};
