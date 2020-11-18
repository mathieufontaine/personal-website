export const initTextTyper = () => {
  // List of sentences
  const SENTENCES = [
    "I build beatiful Websites.",
    "I build useful Applications.",
    "I build amazing Web Experiences."
  ];

  // Current sentence being processed
  let counter = 0;

  // Character number of the current sentence being processed
  let counterIndex = 0;

  // Holds the handle returned from setInterval
  let interval;

  // Element that holds the text
  const header = document.querySelector("#home-sections #showcase .headers h1");
  console.log(header);

  // Implements typing effect
  function Type() {
    let text = SENTENCES[counter].substring(0, counterIndex + 1);
    header.innerHTML = text;
    counterIndex++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === SENTENCES[counter]) {
      clearInterval(interval);
      if (counter !== 2) {
        setTimeout(function() {
          interval = setInterval(Delete, 50);
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
      setTimeout(function() {
        interval = setInterval(Type, 100);
      }, 200);
    }
  }

  // Start the typing effect on load
  interval = setInterval(Type, 100);
};
