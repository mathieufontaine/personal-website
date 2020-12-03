import { initTextTyper } from "../animations/textTyper.js";

// * get language functions

let language;
function getLanguage() {
  localStorage.getItem("language") == null ? setLanguage("fr") : false;
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
const main = document.querySelector("main");

const translate = () => {
  const navbar = document.querySelector("nav .nav-open ul");
  // const page = document.querySelector(".page");

  // * navbar
  // navbar.querySelector(".logo h3).innerText = language.logoText;
  navbar.querySelector("li:nth-child(1) a").innerText = language.nav1;
  navbar.querySelector("li:nth-child(2) a").innerText = language.nav2;
  navbar.querySelector("li:nth-child(3) a").innerText = language.nav3;
  navbar.querySelector("li:nth-child(4) a").innerText = language.nav4;
  navbar.querySelector("li:nth-child(5) a").innerText = language.nav5;
  // navbar.querySelector("li:nth-child(6) a").innerText = language.nav6;

  // * footer
  document.querySelector("footer .span1").innerText = language.footerSpan1;

  // * home
  if (main.classList.contains("home-page")) {
    document.querySelector(".headers .title").innerHTML = language.homeTitle;
    document.querySelector(".headers .subtitle").innerHTML = language.homeJob;
    document.querySelector("#showcase .btn").innerText = language.ctaBtn;
    // main.querySelector(".headers h1").innerText = language.homeTitle;
    // main.querySelector(".showcase-btn .btn").innerText =
    //   language.homeShowcaseBtn;
    main.querySelector("#work h1 .text").innerText = language.workTitle;
    main.querySelector("#work h2 .text").innerText = language.workSubtitle;
    main.querySelector("#work h4 .text").innerText = language.workText;
    main.querySelector("#work .btn").innerText = language.sectionBtn;
    main.querySelector("#about h1 .text").innerText = language.aboutTitle;
    main.querySelector("#about h2 .text").innerText = language.aboutSubtitle;
    main.querySelector("#about h4 .text").innerText = language.aboutText;
    main.querySelector("#about .btn").innerText = language.sectionBtn2;
    main.querySelector("#services h1 .text").innerText = language.servicesTitle;
    main.querySelector("#services h2 .text").innerText =
      language.servicesSubtitle;
    // main.querySelector("#services h4 .text").innerText = language.servicesText;
    main.querySelector("#services .btn").innerText = language.sectionBtn;
    // main.querySelector("#contact h1 .text").innerText = language.contactTitle;
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
    main.querySelector(".page-description p:nth-child(1)").innerText =
      language.workDescription1;
    main.querySelector(".page-description p:nth-child(2)").innerText =
      language.workDescription2;
    main.querySelector(".clients-projects-section .title h3").innerText =
      language.workProjectSection1Title;
    main.querySelector(".personal-projects-section .title h3").innerText =
      language.workProjectSection2Title;
    main.querySelector(
      ".personal-projects-section .websites-section .sm-header"
    ).innerText = language.workWebsitesTitle;
    main.querySelector(
      ".personal-projects-section .apps-section .sm-header"
    ).innerText = language.workAppsTitle;
    main.querySelector("#la-ruee .project-type").innerText =
      language.larueeType;
    main.querySelector("#la-ruee .project-text p:nth-of-type(2)").innerText =
      language.larueeText1;
    main.querySelector("#la-ruee .project-text p:nth-of-type(3)").innerText =
      language.larueeText2;
    main.querySelector("#cabinet .project-type").innerText =
      language.cabinetType;
    main.querySelector("#cabinet .project-text p:nth-of-type(2)").innerText =
      language.cabinetText1;
    main.querySelector("#cabinet .project-text p:nth-of-type(3)").innerText =
      language.cabinetText2;
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
    main.querySelector(
      "#portfolio_examples .project-text p:nth-child(2)"
    ).innerText = language.sitePortfoliosText;
    main.querySelector("#soundwave .project-text p:nth-child(2)").innerText =
      language.siteSoundwaveText;
    main.querySelector("#ziko .project-text p:nth-child(2)").innerText =
      language.siteZikoText;
    main.querySelector("#easybank .project-text p:nth-child(2)").innerText =
      language.siteEasybankText;
    main.querySelector("#mountain .project-text p:nth-child(2)").innerText =
      language.siteMountainText;
    main.querySelector("#interface .project-text p:nth-child(2)").innerText =
      language.siteInterfaceText;
    main.querySelector(".cta-section .cta").innerText =
      language.servicesCtaText;
    main.querySelector(".cta-section .btn").innerText = language.ctaBtn;
  }

  // * about
  else if (main.classList.contains("about-page")) {
    main.querySelector(".details h1 .text").innerText = language.aboutTitle;
    // main.querySelector(".details h2 .text").innerText = language.aboutJob;
    main.querySelector(".details h3 .text").innerText = language.aboutJob;
    main.querySelector(".quote .container div span").innerText =
      language.quoteText;
    main.querySelector("#web-dev h2").innerText = language.webdevTitle;
    main.querySelector("#frontend h2").innerText = language.frontendTitle;
    main.querySelector("#ux h2").innerText = language.uxTitle;
    main.querySelector("#marketing h2").innerText = language.marketingTitle;
    main.querySelector("#remote h2").innerText = language.remoteTitle;
    main.querySelector("#web-dev p").innerText = language.webdevText;
    main.querySelector("#frontend p").innerText = language.frontendText;
    main.querySelector("#ux p").innerText = language.uxText;
    main.querySelector("#marketing p").innerText = language.marketingText;
    main.querySelector("#remote p").innerText = language.remoteText;
    main.querySelector(".cta h2").innerText = language.ctaTitle;
    main.querySelector(".cta h4").innerText = language.ctaText;
    main.querySelector(".cta .btn").innerText = language.ctaBtn;
    main.querySelector("#experience h3").innerText =
      language.experienceBeforeTitle;
    main.querySelector("#experience h1 .text").innerText =
      language.experienceTitle;
    main.querySelector("#experience h2 .text").innerText =
      language.experienceSubtitle;
    main.querySelector("#experience h4 .text").innerText =
      language.experienceText;
    main.querySelector("#experience .btn").innerText = language.sectionBtn;
  }

  // * experience
  else if (main.classList.contains("experience-page")) {
    main.querySelector(".details h1 .text").innerText =
      language.experienceTitle;
    main.querySelector(".details h2 .text").innerText =
      language.experienceSubtitle;
    main.querySelector(".details h4 .text").innerText = language.experienceText;
    main.querySelector(".page-description p:nth-child(1)").innerText =
      language.experienceDescription1;
    main.querySelector(".page-description p:nth-child(2)").innerText =
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
    main.querySelector(".cta-section .cta").innerText =
      language.servicesCtaText;
    main.querySelector(".cta-section .btn").innerText = language.ctaBtn;
  }

  // * services
  else if (main.classList.contains("services-page")) {
    main.querySelector(".details h1 .text").innerText = language.servicesTitle;
    main.querySelector(".details h2 .text").innerText =
      language.servicesSubtitle;
    main.querySelector(".details h4 .text").innerText = language.servicesText;
    main.querySelector(".service-description-section .title h2").innerHTML =
      language.servicesDescriptionTitle;
    main.querySelector(
      ".service-description-section .service-description div"
    ).innerHTML = language.servicesDescriptionText;
    main.querySelector(".tabs .title h2").innerText = language.servicesTitle;
    main.querySelector(".tabs #tab-1 h4").innerText = language.servicesTab1;
    main.querySelector(".tabs #tab-2 h4").innerText = language.servicesTab2;
    main.querySelector(".tabs #tab-3 h4").innerText = language.servicesTab3;
    main.querySelector(".tabs #tab-4 h4").innerText = language.servicesTab4;
    main.querySelector(".tabs #tab-1-content .problem").innerHTML =
      language.servicesTab1Problem;
    main.querySelector(".tabs #tab-2-content .problem").innerHTML =
      language.servicesTab2Problem;
    main.querySelector(".tabs #tab-3-content .problem").innerHTML =
      language.servicesTab3Problem;
    main.querySelector(".tabs #tab-4-content .problem").innerHTML =
      language.servicesTab4Problem;
    main.querySelector(".tabs #tab-1-content .solution").innerHTML =
      language.servicesTab1Solution;
    main.querySelector(".tabs #tab-2-content .solution").innerHTML =
      language.servicesTab2Solution;
    main.querySelector(".tabs #tab-3-content .solution").innerHTML =
      language.servicesTab3Solution;
    main.querySelector(".tabs #tab-4-content .solution").innerHTML =
      language.servicesTab4Solution;
    main.querySelector(".tabs #tab-1-content .showcase-btn p").innerText =
      language.servicesTabBtn;
    main.querySelector(".tabs #tab-2-content .showcase-btn p").innerText =
      language.servicesTabBtn;
    main.querySelector(".tabs #tab-3-content .showcase-btn p").innerText =
      language.servicesTabBtn;
    main.querySelector(".tabs #tab-4-content .showcase-btn p").innerText =
      language.servicesTabBtn;
    main.querySelector(".tabs .btn").innerText = language.ctaBtn;
    main.querySelector("#website-dev .header .text h3").innerHTML =
      language.servicesTab1;
    main.querySelector("#website-dev .solution").innerHTML =
      language.servicesTab1Solution;
    main.querySelector("#website-dev .explanations .intro .text").innerHTML =
      language.servicesWebsiteIntro;
    main.querySelector("#website-dev .explanations .offer h4").innerHTML =
      language.servicesWebsiteOffer;
    main.querySelector(
      "#website-dev .explanations .content-intro h3"
    ).innerHTML = language.servicesWebsiteProcessTitle;
    main.querySelector(
      "#website-dev .explanations .content-intro .container div"
    ).innerHTML = language.servicesWebsiteProcessIntro;
    main.querySelector(
      "#website-dev .explanations .steps .row1 .field h4"
    ).innerText = language.servicesWebsiteStep1Title;
    main.querySelector(
      "#website-dev .explanations .steps .row2 .field h4"
    ).innerText = language.servicesWebsiteStep2Title;
    main.querySelector(
      "#website-dev .explanations .steps .row3 .field h4"
    ).innerText = language.servicesWebsiteStep3Title;
    main.querySelector(
      "#website-dev .explanations .steps .row4 .field h4"
    ).innerText = language.servicesWebsiteStep4Title;
    main.querySelector(
      "#website-dev .explanations .steps .row1 .text"
    ).innerHTML = language.servicesWebsiteStep1Text;
    main.querySelector(
      "#website-dev .explanations .steps .row2 .text"
    ).innerHTML = language.servicesWebsiteStep2Text;
    main.querySelector(
      "#website-dev .explanations .steps .row3 .text"
    ).innerHTML = language.servicesWebsiteStep3Text;
    main.querySelector(
      "#website-dev .explanations .steps .row4 .text"
    ).innerHTML = language.servicesWebsiteStep4Text;
    main.querySelector("#website-dev .explanations .update h4").innerHTML =
      language.servicesWebsiteUpdateTitle;
    main.querySelector(
      "#website-dev .explanations .update .container div"
    ).innerHTML = language.servicesWebsiteUpdateText;
    main.querySelector("#website-dev .explanations .tools h3").innerHTML =
      language.servicesWebsiteToolsTitle;
    main.querySelector("#website-dev .explanations .tools .tool1 p").innerHTML =
      language.servicesWebsiteTool1Text;
    main.querySelector("#website-dev .explanations .tools .tool2 p").innerHTML =
      language.servicesWebsiteTool2Text;
    main.querySelector("#website-dev .explanations .tools .tool3 p").innerHTML =
      language.servicesWebsiteTool3Text;
    main.querySelector("#website-dev .explanations .tools .tool4 p").innerHTML =
      language.servicesWebsiteTool4Text;
    main.querySelector("#website-dev .explanations .tools .tool5 p").innerHTML =
      language.servicesWebsiteTool5Text;
    main.querySelector("#website-dev .explanations .tools .tool6 p").innerHTML =
      language.servicesWebsiteTool6Text;
    // main.querySelector("#website-dev .explanations .tools .text").innerHTML =
    //   language.servicesWebsiteToolsText;
    main.querySelector("#website-dev .cta").innerText =
      language.servicesCtaText;
    main.querySelector("#website-dev .btn").innerText = language.ctaBtn;
    main.querySelector("#website-dev .cta-faq").innerHTML =
      language.servicesCtaFaq;
    main.querySelector("#web-integration .header .text h3").innerHTML =
      language.servicesTab2;
    main.querySelector("#web-integration .solution").innerHTML =
      language.servicesTab2Solution;
    main.querySelector("#web-integration .explanations .intro").innerHTML =
      language.servicesIntegrationIntro;
    main.querySelector(
      "#web-integration .explanations .integration-process h3"
    ).innerHTML = language.servicesIntegrationProcessTitle;
    main.querySelector(
      "#web-integration .explanations .integration-process .text"
    ).innerHTML = language.servicesIntegrationProcessList;
    main.querySelector(
      "#web-integration .explanations .integration-how h3"
    ).innerHTML = language.servicesIntegrationHowTitle;
    main.querySelector(
      "#web-integration .explanations .integration-how .text"
    ).innerHTML = language.servicesIntegrationHowList;
    main.querySelector("#web-integration .cta").innerText =
      language.servicesCtaText;
    main.querySelector("#web-integration .btn").innerText = language.ctaBtn;
    main.querySelector("#app-dev .header .text h3").innerHTML =
      language.servicesTab3;
    main.querySelector("#app-dev .solution").innerHTML =
      language.servicesTab3Solution;
    main.querySelector("#app-dev .explanations .content").innerHTML =
      language.servicesAppContent;
    main.querySelector("#app-dev .cta").innerText = language.servicesCtaText;
    main.querySelector("#app-dev .btn").innerText = language.ctaBtn;
    main.querySelector("#marketing .header .text h3").innerHTML =
      language.servicesTab4;
    main.querySelector("#marketing .solution").innerHTML =
      language.servicesTab4Solution;
    main.querySelector("#marketing .explanations .content").innerHTML =
      language.servicesMarketingContent;
    main.querySelector("#marketing .cta").innerText = language.servicesCtaText;
    main.querySelector("#marketing .btn").innerText = language.ctaBtn;
    main.querySelector("#faq .title p").innerText = language.servicesFAQIntro;
    main.querySelector("#faq #q1 p").innerText = language.servicesFAQq1;
    main.querySelector("#faq #a1").innerHTML = language.servicesFAQa1;
    main.querySelector("#faq #q2 p").innerText = language.servicesFAQq2;
    main.querySelector("#faq #a2").innerHTML = language.servicesFAQa2;
    main.querySelector("#faq #q3 p").innerText = language.servicesFAQq3;
    main.querySelector("#faq #a3").innerHTML = language.servicesFAQa3;
    main.querySelector("#faq #q4 p").innerText = language.servicesFAQq4;
    main.querySelector("#faq #a4").innerHTML = language.servicesFAQa4;
    main.querySelector("#faq #q5 p").innerText = language.servicesFAQq5;
    main.querySelector("#faq #a5").innerHTML = language.servicesFAQa5;
    main.querySelector("#faq #q6 p").innerText = language.servicesFAQq6;
    main.querySelector("#faq #a6").innerHTML = language.servicesFAQa6;
    main.querySelector("#faq #q7 p").innerText = language.servicesFAQq7;
    main.querySelector("#faq #a7").innerHTML = language.servicesFAQa7;
    main.querySelector("#faq #q8 p").innerText = language.servicesFAQq8;
    main.querySelector("#faq #a8").innerHTML = language.servicesFAQa8;
    main.querySelector("#faq #q9 p").innerText = language.servicesFAQq9;
    main.querySelector("#faq #a9").innerHTML = language.servicesFAQa9;
    main.querySelector("#faq #q10 p").innerText = language.servicesFAQq10;
    main.querySelector("#faq #a10").innerHTML = language.servicesFAQa10;
    main.querySelector("#faq #q11 p").innerText = language.servicesFAQq11;
    main.querySelector("#faq #a11").innerHTML = language.servicesFAQa11;
    main.querySelector("#faq #q12 p").innerText = language.servicesFAQq12;
    main.querySelector("#faq #a12").innerHTML = language.servicesFAQa12;
    main.querySelector("#faq #q13 p").innerText = language.servicesFAQq13;
    main.querySelector("#faq #a13").innerHTML = language.servicesFAQa13;
    main.querySelector("#faq #q14 p").innerText = language.servicesFAQq14;
    main.querySelector("#faq #a14").innerHTML = language.servicesFAQa14;
    main.querySelector("#faq #q15 p").innerText = language.servicesFAQq15;
    main.querySelector("#faq #a15").innerHTML = language.servicesFAQa15;
    main.querySelector("#faq #q16 p").innerText = language.servicesFAQq16;
    main.querySelector("#faq #a16").innerHTML = language.servicesFAQa16;
    main.querySelector("#faq .btn").innerText = language.ctaBtn;
  }

  // * contact
  else if (main.classList.contains("contact-page")) {
    main.querySelector(".page-info h2").innerText = language.contactHeader1;
    main.querySelector(".page-info h4").innerText = language.contactHeader2;
    main.querySelector(".page-info p").innerText = language.contactHeader3;
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
    if (main.classList.contains("about-page")) {
      initTextTyper();
    }
  });
});

const frenchBtns = document.querySelectorAll(".fr");

frenchBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    setLanguage("fr");
    getLanguage();
    translate();
    showLanguage();
    if (main.classList.contains("about-page")) {
      initTextTyper();
    }
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
