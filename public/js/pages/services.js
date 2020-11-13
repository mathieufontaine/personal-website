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
