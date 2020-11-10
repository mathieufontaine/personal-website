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
  const body = document.querySelector("body");
  const page = document.querySelector(".page");

  // * home
  if (body.classList.contains("home")) {
    const home = document.querySelector(".home");
    home.querySelector(".headers h1").innerText = language.homeTitle;
    home.querySelector(".showcase-btn .btn").innerText =
      language.homeShowcaseBtn;
    home.querySelector("#work h1 .text").innerText = language.workTitle;
    home.querySelector("#work h2 .text").innerText = language.workSubtitle;
    home.querySelector("#work h4 .text").innerText = language.workText;
    home.querySelector("#work .btn").innerText = language.sectionBtn;
    home.querySelector("#about h1 .text").innerText = language.aboutTitle;
    home.querySelector("#about h2 .text").innerText = language.aboutSubtitle;
    home.querySelector("#about h4 .text").innerText = language.aboutText;
    home.querySelector("#about .btn").innerText = language.sectionBtn;
    home.querySelector("#experience h1 .text").innerText =
      language.experienceTitle;
    home.querySelector("#experience h2 .text").innerText =
      language.experienceSubtitle;
    home.querySelector("#experience h4 .text").innerText =
      language.experienceText;
    home.querySelector("#experience .btn").innerText = language.sectionBtn;
    home.querySelector("#contact h1 .text").innerText = language.contactTitle;
    home.querySelector("#contact h2 .text").innerText =
      language.contactSubtitle;
    home.querySelector("#contact h4 .text").innerText = language.contactText;
    home.querySelector("#contact .btn").innerText = language.contactBtn;
  }

  // * contact
  else if (page.classList.contains("contact")) {
    const contact = document.querySelector(".contact");
    contact.querySelector(".page-info h2").innerText = language.contactHeader1;
    contact.querySelector(".page-info h4").innerText = language.contactHeader2;
    contact.querySelector(".first label").innerText = language.labelFirst;
    contact.querySelector(".last label").innerText = language.labelLast;
    contact.querySelector(".subject label").innerText = language.labelSubject;
    contact.querySelector(".subject input").placeholder =
      language.placeholderSubject;
    contact.querySelector(".message textarea").placeholder =
      language.placeholderMessage;
    contact.querySelector("#submit").value = language.formSubmit;
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
