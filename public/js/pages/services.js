export const enableTabs = () => {
  const introTabItems = document.querySelectorAll(".tabs .container .tab-item");
  const introTabContentItems = document.querySelectorAll(
    ".tabs .container .tab-content-item"
  );
  const websiteTabItems = document.querySelectorAll("#website-dev .tab-item");
  const websiteTabContentItems = document.querySelectorAll(
    "#website-dev .process"
  );

  const selectIntroItem = event => {
    introTabItems.forEach(item => item.classList.remove("active"));
    introTabContentItems.forEach(item => item.classList.remove("show"));
    event.currentTarget.classList.add("active");
    document
      .querySelector(`#${event.currentTarget.id}-content`)
      .classList.add("show");
  };

  const selectWebsiteItem = event => {
    websiteTabItems.forEach(item => item.classList.remove("active"));
    websiteTabContentItems.forEach(item => item.classList.remove("show"));
    event.currentTarget.classList.add("active");
    document
      .querySelector(`#${event.currentTarget.id}-content`)
      .classList.add("show");
  };

  // Listen for tab click
  introTabItems.forEach(item =>
    item.addEventListener("click", selectIntroItem)
  );
  websiteTabItems.forEach(item =>
    item.addEventListener("click", selectWebsiteItem)
  );
};

// export const scaleStandardCard = () => {
//   const premium = document.querySelector(".premium");
//   const standard = document.querySelector(".standard");
//   const basic = document.querySelector(".basic");

//   premium.addEventListener("mouseover", () => {
//     standard.style.transform = "scale(1)";
//   });

//   premium.addEventListener("mouseout", () => {
//     standard.style.transform = "scale(1.1)";
//   });

//   basic.addEventListener("mouseover", () => {
//     standard.style.transform = "scale(1)";
//   });

//   basic.addEventListener("mouseout", () => {
//     standard.style.transform = "scale(1.1)";
//   });

//   standard.addEventListener("mouseover", () => {
//     event.currentTarget.style.transform = "scale(1.2)";
//   });

//   standard.addEventListener("mouseout", () => {
//     event.currentTarget.style.transform = "scale(1.1)";
//   });
// };
