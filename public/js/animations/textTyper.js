// export const initTextTyper = () => {
// List of sentences

// Holds the handle returned from setInterval
let interval;
let timeoutType;
let timeoutDelete;

export const initTextTyper = () => {
  // Current sentence being processed
  let counter = 0;

  // Character number of the current sentence being processed
  let counterIndex = 0;

  // Element that holds the text
  const header = document.querySelector("#home-sections #showcase .headers h2");

  const english = [
    "I build beatiful Websites.",
    "I develop useful Web Interfaces.",
    "I help businesses achieve their goals on the web."
  ];

  const french = [
    "Je crée des Sites web.",
    "Je développe des Applications Web.",
    "J’aide les entreprises à atteindre leurs objectifs sur le web."
  ];

  let SENTENCES = english;

  if (localStorage.getItem("language") == "fr") {
    clearInterval(interval);
    clearTimeout(timeoutType);
    clearTimeout(timeoutDelete);
    SENTENCES = french;
  } else if (localStorage.getItem("language") == "en") {
    clearInterval(interval);
    clearTimeout(timeoutType);
    clearTimeout(timeoutDelete);
    SENTENCES = english;
  }

  // Implements typing effect
  function Type() {
    let text = SENTENCES[counter].substring(0, counterIndex + 1);
    header.innerHTML = text;
    counterIndex++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === SENTENCES[counter]) {
      clearInterval(interval);
      if (counter !== 2) {
        timeoutType = setTimeout(function() {
          interval = setInterval(Delete, 20);
        }, 1000);
      }
    }
  }

  // Implements deleting effect
  function Delete() {
    let text = SENTENCES[counter].substring(0, counterIndex - 1);
    header.innerHTML = text;
    counterIndex--;

    // If sentence has been deleted then start to display the next sentence
    if (text === "") {
      clearInterval(interval);

      // If last sentence then display the first one, else move to the next

      // if (counter == SENTENCES.length - 1) counter = 0;
      // else
      counter++;
      counterIndex = 0;

      // Start to display the next sentence after some time
      timeoutDelete = setTimeout(function() {
        interval = setInterval(Type, 80);
      }, 200);
    }
  }

  // Start the typing effect on load
  interval = setInterval(Type, 100);
};
