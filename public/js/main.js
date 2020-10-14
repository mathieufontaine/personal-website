import { validate } from "./formValidation.js";

// Select DOM items
const submit = document.querySelector("#submit");
const inputs = document.querySelectorAll(".input");

// Call Functionss
AOS.init();
const rellax = new Rellax(".rellax");
const lightbox = new SimpleLightbox(".project-img");

// Event Listener

// submit.addEventListener("click", validate);
inputs.forEach(input =>
  input.addEventListener("focus", function() {
    error_message.style.display = "none";
    input.classList.remove("redShadow");
  })
);

inputs.forEach(input => input.addEventListener("blur", validate));
