export const formValidation = () => {
  //*  Select DOM items

  const submit = document.querySelector("#submit");
  const inputs = document.querySelectorAll(".input");

  const validate = event => {
    //   event.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const subject = document.getElementById("subject").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const fnameBox = document.getElementById("fname");
    const lnameBox = document.getElementById("lname");
    const subjectBox = document.getElementById("subject");
    const emailBox = document.getElementById("email");
    const messageBox = document.getElementById("message");
    const submit = document.querySelector("#submit");

    const error_message = document.getElementById("error_message");

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    let language = localStorage.getItem("language");

    error_message.style.display = "block";

    console.log(fname, lname, subject, email, message.length);

    // * input verification

    let text;
    if (fname.length < 1) {
      language == "en"
        ? (text = "Please enter your first name")
        : (text = "Veuillez entrer votre prénom");
      error_message.innerHTML = text;
      fnameBox.classList.add("redShadow");
      return false;
    }
    if (lname.length < 1) {
      language == "en"
        ? (text = "Please enter your last name")
        : (text = "Veuillez entrer votre nom de famille");
      error_message.innerHTML = text;
      lnameBox.classList.add("redShadow");
      return false;
    }
    if (!email.match(pattern)) {
      console.log("no match");
      language == "en"
        ? (text = "Please enter a valid email address")
        : (text = "Veuillez entrer une adresse email valide");
      error_message.innerHTML = text;
      emailBox.classList.add("redShadow");
      return false;
    }
    if (subject.length < 1) {
      console.log(subject);
      language == "en"
        ? (text = "Please enter a subject")
        : (text = "Veuillez renseigner le sujet");
      error_message.innerHTML = text;
      subjectBox.classList.add("redShadow");
      return false;
    }
    if (message.length < 10) {
      console.log(message.length);
      text = "Your message should include at least 10 characters";
      language == "en"
        ? (text = "Your message should include at least 10 characters")
        : (text = "Votre message doit inclure au moins 10 caractères");
      error_message.innerHTML = text;
      messageBox.classList.add("redShadow");
      return false;
    }

    error_message.style.display = "none";
    submit.style.pointerEvents = "initial";
    return true;
  };

  // * Event Listener

  // submit.addEventListener("click", validate);
  inputs.forEach(input =>
    input.addEventListener("focus", function() {
      error_message.style.display = "none";
      input.classList.remove("redShadow");
    })
  );

  inputs.forEach(input => input.addEventListener("blur", validate));
};

// const contactAnimation = () => {
//   gsap.registerPlugin(ScrollTrigger);

//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".form-container",
//       start: "center 50%",
//       end: "bottom 20%",
//       toggleActions: "play none none reset",

//       defaults: {
//         ease: "power2.inOut"
//       }
//     }
//   });

//   tl.from(".form-container", { duration: 1, scale: 0 });
// };
