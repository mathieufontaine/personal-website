// * get language functions

let language;

function getLanguage() {
  localStorage.getItem("language") == null ? setLanguage("en") : false;
  $.ajax({
    url: "js/languages/" + localStorage.getItem("language") + ".json",
    dataType: "json",
    async: false,
    dataType: "json",
    success: function(lang) {
      language = lang;
    }
  });
}

function setLanguage(lang) {
  localStorage.setItem("language", lang);
}

// * translations selectors

const translate = () => {
  const main = document.querySelector("main");
  // const page = document.querySelector(".page");

  // * home
  if (main.classList.contains("home-page")) {
    // const home = document.querySelector(".home");
    main.querySelector(".headers h1").innerText = language.homeTitle;
    main.querySelector(".showcase-btn .btn").innerText =
      language.homeShowcaseBtn;
    main.querySelector("#work h1 .text").innerText = language.workTitle;
    main.querySelector("#work h2 .text").innerText = language.workSubtitle;
    main.querySelector("#work h4 .text").innerText = language.workText;
    main.querySelector("#work .btn").innerText = language.sectionBtn;
    main.querySelector("#about h1 .text").innerText = language.aboutTitle;
    main.querySelector("#about h2 .text").innerText = language.aboutSubtitle;
    main.querySelector("#about h4 .text").innerText = language.aboutText;
    main.querySelector("#about .btn").innerText = language.sectionBtn;
    main.querySelector("#experience h1 .text").innerText =
      language.experienceTitle;
    main.querySelector("#experience h2 .text").innerText =
      language.experienceSubtitle;
    main.querySelector("#experience h4 .text").innerText =
      language.experienceText;
    main.querySelector("#experience .btn").innerText = language.sectionBtn;
    main.querySelector("#contact h1 .text").innerText = language.contactTitle;
    main.querySelector("#contact h2 .text").innerText =
      language.contactSubtitle;
    main.querySelector("#contact h4 .text").innerText = language.contactText;
    main.querySelector("#contact .btn").innerText = language.contactBtn;
  }

  // * contact
  else if (main.classList.contains("contact-page")) {
    // const contact = document.querySelector(".contact");
    main.querySelector(".page-info h2").innerText = language.contactHeader1;
    main.querySelector(".page-info h4").innerText = language.contactHeader2;
    main.querySelector(".first label").innerText = language.labelFirst;
    main.querySelector(".last label").innerText = language.labelLast;
    main.querySelector(".subject label").innerText = language.labelSubject;
    main.querySelector(".subject input").placeholder =
      language.placeholderSubject;
    main.querySelector(".message textarea").placeholder =
      language.placeholderMessage;
    main.querySelector("#submit").value = language.formSubmit;
  } else {
    return;
  }
};

// console.log(document.querySelector(".page").classList.contains("contact"));
//* Listeners

const englishBtns = document.querySelectorAll(".en");

englishBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    setLanguage("en");
    getLanguage();
    translate();
  });
});

const frenchBtns = document.querySelectorAll(".fr");

frenchBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    setLanguage("fr");
    getLanguage();
    translate();
  });
});

// * Apply right language on load

getLanguage();
translate();
