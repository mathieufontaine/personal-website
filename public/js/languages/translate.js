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
  const navbar = document.querySelector("nav .nav-open ul");
  // const page = document.querySelector(".page");

  // * navbar
  // navbar.querySelector(".logo h3).innerText = language.logoText;
  navbar.querySelector("li:nth-child(1) a").innerText = language.nav1;
  navbar.querySelector("li:nth-child(2) a").innerText = language.nav2;
  navbar.querySelector("li:nth-child(3) a").innerText = language.nav3;
  navbar.querySelector("li:nth-child(4) a").innerText = language.nav4;
  navbar.querySelector("li:nth-child(5) a").innerText = language.nav5;
  navbar.querySelector("li:nth-child(6) a").innerText = language.nav6;

  // * footer
  document.querySelector("footer .span1").innerText = language.footerSpan1;

  // * home
  if (main.classList.contains("home-page")) {
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

  // * work
  else if (main.classList.contains("work-page")) {
    main.querySelector(".details h1 .text").innerText = language.workTitle;
    main.querySelector(".details h2 .text").innerText = language.workSubtitle;
    main.querySelector(".details h4 .text").innerText = language.workText;
    main.querySelector(".page-description h4:nth-child(1)").innerText =
      language.workDescription1;
    main.querySelector(".page-description h4:nth-child(2)").innerText =
      language.workDescription2;
    main.querySelector("#weather-app .project-text p:nth-child(2)").innerText =
      language.appText1;
    main.querySelector("#weather-app .project-text p:nth-child(3)").innerText =
      language.appWeatherText2;
    main.querySelector("#weather-app .project-text p:nth-child(4)").innerText =
      language.appWeatherText3;
    main.querySelector("#games-app .project-text p:nth-child(2)").innerText =
      language.appText1;
    main.querySelector("#games-app .project-text p:nth-child(3)").innerText =
      language.appGamesText2;
    main.querySelector("#games-app .project-text p:nth-child(4)").innerText =
      language.appGamesText3;
    main.querySelector("#movie-app .project-text p:nth-child(2)").innerText =
      language.appText1;
    main.querySelector("#movie-app .project-text p:nth-child(3)").innerText =
      language.appMovieText2;
    main.querySelector("#ip-app .project-text p:nth-child(2)").innerText =
      language.appText2;
    main.querySelector("#ip-app .project-text p:nth-child(3)").innerText =
      language.appIpText2;
    main.querySelector("#breath-app .project-text p:nth-child(2)").innerText =
      language.appText2;
    main.querySelector("#breath-app .project-text p:nth-child(3)").innerText =
      language.appBreathText2;
    main.querySelector("#breath-app .project-text p:nth-child(4)").innerText =
      language.appBreathText3;
    main.querySelector("#soundwave .project-text p:nth-child(2)").innerText =
      language.siteText1;
    main.querySelector("#soundwave .project-text p:nth-child(3)").innerText =
      language.siteSoundwaveText2;
    main.querySelector("#ziko .project-text p:nth-child(2)").innerText =
      language.siteText1;
    main.querySelector("#ziko .project-text p:nth-child(3)").innerText =
      language.siteZikoText2;
    main.querySelector("#easybank .project-text p:nth-child(2)").innerText =
      language.siteText2;
    main.querySelector("#easybank .project-text p:nth-child(3)").innerText =
      language.siteZikoText2;
    main.querySelector("#mountain .project-text p:nth-child(2)").innerText =
      language.siteText2;
    main.querySelector("#mountain .project-text p:nth-child(3)").innerText =
      language.siteZikoText2;
    main.querySelector("#interface .project-text p:nth-child(2)").innerText =
      language.siteInterfaceText1;
  }

  // * about
  else if (main.classList.contains("about-page")) {
    main.querySelector(".details h1 .text").innerText = language.aboutTitle;
    main.querySelector(".details h2 .text").innerText = language.aboutSubtitle;
    main.querySelector(".details h4 .text").innerText = language.aboutText;
    main.querySelector(".quote h3").innerText = language.quoteText;
    main.querySelector("#web-dev h2").innerText = language.webdevTitle;
    main.querySelector("#frontend h2").innerText = language.frontendTitle;
    main.querySelector("#ux h2").innerText = language.uxTitle;
    main.querySelector("#remote h2").innerText = language.remoteTitle;
    main.querySelector("#web-dev p").innerText = language.webdevText;
    main.querySelector("#frontend p").innerText = language.frontendText;
    main.querySelector("#ux p").innerText = language.uxText;
    main.querySelector("#remote p").innerText = language.remoteText;
    main.querySelector(".cta h2").innerText = language.ctaTitle;
    main.querySelector(".cta h4").innerText = language.ctaText;
    main.querySelector(".cta .btn").innerText = language.ctaBtn;
  }

  // * experience
  else if (main.classList.contains("experience-page")) {
    main.querySelector(".details h1 .text").innerText =
      language.experienceTitle;
    main.querySelector(".details h2 .text").innerText =
      language.experienceSubtitle;
    main.querySelector(".details h4 .text").innerText = language.experienceText;
    main.querySelector(".page-description h4:nth-child(1)").innerText =
      language.experienceDescription1;
    main.querySelector(".page-description h4:nth-child(2)").innerText =
      language.experienceDescription2;
    main.querySelector("#toulouse .card .secondary-text").innerText =
      language.toulouseTitle;
    main.querySelector("#toulouse .card .p1").innerText =
      language.toulouseText1;
    main.querySelector("#toulouse .card .p2 .span1").innerText =
      language.toulouseText2span1;
    main.querySelector("#toulouse .card .p2 .span2").innerText =
      language.toulouseText2span2;
    main.querySelector("#toulouse .card .p2 .span3").innerText =
      language.toulouseText2span3;
    main.querySelector("#singapore .headings h2").innerText =
      language.singaporeName;
    main.querySelector("#singapore .card .secondary-text").innerText =
      language.singaporeTitle;
    main.querySelector("#singapore .card .p1 .span1").innerText =
      language.singaporeText1span1;
    main.querySelector("#singapore .card .p1 .span2").innerText =
      language.singaporeText1span1;
    main.querySelector("#singapore .card .p2").innerText =
      language.singaporeText2;
    main.querySelector("#bangkok .card .p1 span").innerText =
      language.bangkokText1span1;
    main.querySelector("#bangkok .card .p2").innerText = language.bangkokText2;
    main.querySelector("#paris .card .p1 .span1").innerText =
      language.parisText1span1;
    main.querySelector("#paris .card .p1 .span2").innerText =
      language.parisText1span2;
    main.querySelector("#paris .card .p2").innerText = language.parisText2;
    main.querySelector("#lisbon .headings h2").innerText = language.lisbonName;
    main.querySelector("#lisbon .card .p1").innerText = language.lisbonText1;
    main.querySelector("#lisbon .card .p2 .span1").innerText =
      language.lisbonText2span1;
    main.querySelector("#lisbon .card .p2 .span2").innerText =
      language.lisbonText2span2;
    main.querySelector("#lisbon .card .p3").innerText = language.lisbonText3;
  }

  // * services
  else if (main.classList.contains("services-page")) {
    main.querySelector(".details h1 .text").innerText = language.servicesTitle;
    main.querySelector(".details h2 .text").innerText =
      language.servicesSubtitle;
    main.querySelector(".details h4 .text").innerText = language.servicesText;
  }

  // * contact
  else if (main.classList.contains("contact-page")) {
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
    showLanguage();
  });
});

const frenchBtns = document.querySelectorAll(".fr");

frenchBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    setLanguage("fr");
    getLanguage();
    translate();
    showLanguage();
  });
});

// * show language

const enFlags = document.querySelectorAll(".en");
const frFlags = document.querySelectorAll(".fr");

const showLanguage = () => {
  if (localStorage.getItem("language") == "fr") {
    frFlags.forEach(flag => flag.classList.add("active"));
    enFlags.forEach(flag => flag.classList.remove("active"));
  } else {
    enFlags.forEach(flag => flag.classList.add("active"));
    frFlags.forEach(flag => flag.classList.remove("active"));
  }
};

// * Apply right language on load

getLanguage();
translate();
showLanguage();
