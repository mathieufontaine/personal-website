// * contact
import { getLanguage } from "./translate.js";

let language;

const translate = () => {
  const contact = document.querySelector(".contact");
  contact.querySelector(".page-info h2").innerText = language.contactTitle;
  contact.querySelector(".page-info h4").innerText = language.contactSubtitle;
  contact.querySelector(".first label").innerText = language.labelFirst;
  contact.querySelector(".last label").innerText = language.labelLast;
  contact.querySelector(".subject label").innerText = language.labelSubject;
  contact.querySelector(".subject input").placeholder =
    language.placeholderSubject;
  contact.querySelector(".message textarea").placeholder =
    language.placeholderMessage;
  contact.querySelector("#submit").value = language.formSubmit;
};

const english = document.querySelector(".en");

english.addEventListener("click", () => {
  //   setLanguage("en");
  //   getLanguage();
  getLanguage("en");
  language = languageValue;
  translate();
});

const french = document.querySelector(".fr");

french.addEventListener("click", () => {
  //   setLanguage("fr");
  //   getLanguage();
  getLanguage("fr");
  language = languageValue;

  translate();
});
