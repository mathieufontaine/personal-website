export const enableTabs = () => {
  const tabItems = document.querySelectorAll(".tab-item");
  const tabContentItems = document.querySelectorAll(".tab-content-item");

  const selectItem = event => {
    removeBg();
    removeShow();
    event.currentTarget.classList.add("active");
    const tabContentItem = document.querySelector(
      `#${event.currentTarget.id}-content`
    );
    tabContentItem.classList.add("show");
  };

  const removeBg = () => {
    tabItems.forEach(item => item.classList.remove("active"));
  };

  const removeShow = () => {
    tabContentItems.forEach(item => item.classList.remove("show"));
  };

  // Listen for tab click
  tabItems.forEach(item => item.addEventListener("click", selectItem));
};

export const scaleStandardCard = () => {
  const premium = document.querySelector(".premium");
  const standard = document.querySelector(".standard");
  const basic = document.querySelector(".basic");

  premium.addEventListener("mouseover", () => {
    standard.style.transform = "scale(1)";
  });

  premium.addEventListener("mouseout", () => {
    standard.style.transform = "scale(1.1)";
  });

  basic.addEventListener("mouseover", () => {
    standard.style.transform = "scale(1)";
  });

  basic.addEventListener("mouseout", () => {
    standard.style.transform = "scale(1.1)";
  });

  standard.addEventListener("mouseover", () => {
    event.currentTarget.style.transform = "scale(1.2)";
  });

  standard.addEventListener("mouseout", () => {
    event.currentTarget.style.transform = "scale(1.1)";
  });
};
