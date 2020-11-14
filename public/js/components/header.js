class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = /*html*/ `
      <header class="nav-page">
      <nav>
          <a href="/public/index.html" class="logo">
              <img src="img/arrow.png" alt="back-arrow">
              <h3>Home</h3>
          </a>
          <div class="nav-right">
              <div class="languages">
                  <a href="#" class="en"><img src="img/english.png" alt="english"></a>
                  <a href="#" class="fr"><img src="img/france.png" alt="français"></a>
              </div>
              <svg class="menu" width="43" height="23" viewBox="0 0 43 23" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <line class="line1" y1="1.5" x2="43" y2="1.5" stroke="white" stroke-width="3" />
                  <line class="line2" y1="11.5" x2="28" y2="11.5" stroke="white" stroke-width="3" />
                  <line class="line3" y1="21.5" x2="16" y2="21.5" stroke="white" stroke-width="3" />
              </svg>
          </div>
          <div class="nav-open">
              <ul>
                  <li><a href="/public/index.html">Home</a></li>
                  <li><a href="/public/work.html">Work</a></li>
                  <li class="active"><a href="/public/about.html">About Me</a></li>
                  <li><a href="/public/experience.html">My Path</a></li>
                  <li><a href="/public/contact.html">Contact</a></li>
              </ul>
              <div class="logos">
                  <a href="https://www.linkedin.com/in/mathieu-fontaine/" target="_blank"><i
                          class="fa fa-linkedin" aria-hidden="true"></i></a>
                  <a href="https://github.com/mathieufontaine" target="_blank"><i class="fa fa-github"
                          aria-hidden="true"></i></a>
              </div>
          </div>
      </nav>
  </header>
      `;
  }
}

customElements.define("header-component", Header);
