export const enableTabs = () => {
  const introTabItems = document.querySelectorAll(".desktop .tab-item");
  const introTabContentItems = document.querySelectorAll(
    ".desktop .tab-content-item"
  );
  const mobileTabs = document.querySelectorAll(".mobile .tab-item");
  const mobileTabsTitles = document.querySelectorAll(
    ".mobile .tab-item .tab-title"
  );
  const mobileTabsBtn = document.querySelectorAll(
    ".mobile .tab-item .showcase-btn"
  );

  //* Display the right tab
  const selectIntroItem = event => {
    introTabItems.forEach(item => item.classList.remove("active"));
    introTabContentItems.forEach(item => item.classList.remove("show"));
    event.currentTarget.classList.add("active");
    document
      .querySelector(`#${event.currentTarget.id}-content`)
      .classList.add("show");
  };

  const selectTabItem = e => {
    if (e.target.parentElement.classList.contains("active")) {
      mobileTabs.forEach(item => item.classList.remove("active"));
    } else {
      mobileTabs.forEach(item => item.classList.remove("active"));
      e.target.parentElement.classList.add("active");
    }
  };

  //* Listen for tab click
  introTabItems.forEach(item =>
    item.addEventListener("click", selectIntroItem)
  );
  mobileTabsTitles.forEach(item =>
    item.addEventListener("click", selectTabItem)
  );

  mobileTabsBtn.forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
    });
  });
};

$(".box .question").click(function() {
  $(this)
    .toggleClass("open")
    .next()
    .slideToggle("fast");
});

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
