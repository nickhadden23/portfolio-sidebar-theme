import { LitElement, html, css } from "lit";
import "@haxtheweb/scroll-button/scroll-button.js";
import "@haxtheweb/simple-cta/simple-cta.js";

class PortfolioSidebarTheme extends LitElement {
  static get tag() {
    return "portfolio-sidebar-theme";
  }

  static get properties() {
    return {
      activeScreen: { type: String },
      screens: { type: Array },
      scrolled: { type: Boolean, reflect: true }
    };
  }

  constructor() {
    super();
    this.activeScreen = "about";
    this.scrolled = false;
    this.screenOrder = {
      about: 1,
      projects: 2,
      skills: 3,
      coursework: 4,
      contact: 5
    };
    this.screens = [
      { id: "about", title: "About" },
      { id: "projects", title: "Projects" },
      { id: "skills", title: "Skills" },
      { id: "coursework", title: "Coursework" },
      { id: "contact", title: "Contact" }
    ];
    this.handleScroll = this.handleScroll.bind(this);
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --sidebar-width: 250px;
        --sidebar-bg: #2c3e50;
        --sidebar-text: #ffffff;
        --sidebar-hover: #34495e;
        --transition-speed: 0.3s;
      }

      .container {
        display: flex;
        min-height: 100vh;
      }

      .sidebar {
        width: var(--sidebar-width);
        background-color: var(--sidebar-bg);
        color: var(--sidebar-text);
        padding: 2rem 1rem;
        position: fixed;
        height: 100vh;
        box-sizing: border-box;
        z-index: 100;
        transition: transform var(--transition-speed) ease;
      }

      .sidebar-header {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        text-align: center;
        font-weight: bold;
      }

      .nav-links {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .nav-link {
        margin-bottom: 1rem;
      }

      .nav-link a {
        color: var(--sidebar-text);
        text-decoration: none;
        display: block;
        padding: 0.75rem;
        border-radius: 4px;
        transition: background-color var(--transition-speed);
      }

      .nav-link a:hover,
      .nav-link a.active {
        background-color: var(--sidebar-hover);
      }

      .content {
        margin-left: var(--sidebar-width);
        flex: 1;
      }

      scroll-button {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 99;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      :host([scrolled]) scroll-button {
        opacity: 1;
      }

      @media (max-width: 768px) {
        .sidebar {
          width: 100%;
          height: auto;
          position: relative;
          padding: 1rem;
        }

        .content {
          margin-left: 0;
        }

        :host([mobile-menu-hidden]) .sidebar {
          transform: translateX(-100%);
        }
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("scroll", this.handleScroll);
  }

  disconnectedCallback() {
    window.removeEventListener("scroll", this.handleScroll);
    super.disconnectedCallback();
  }

  firstUpdated() {
    this.setupScrollBehavior();
    this.checkHash();
    this.setupIntersectionObserver();
    this.setupContactForm();
    this.setupLabelClickHandlers();
    this.enforceHashFormat();
  }

  enforceHashFormat() {
    if (window.location.hash && !window.location.hash.startsWith('#/screen-')) {
      const screenId = window.location.hash.substring(1);
      if (this.screenOrder[screenId]) {
        history.replaceState(null, null, this.getScreenHash(screenId));
      }
    }
  }

  getScreenNumber(screenId) {
    return this.screenOrder[screenId] || 0;
  }

  getScreenHash(screenId) {
    return `#/screen-${this.getScreenNumber(screenId)}`;
  }

  setupLabelClickHandlers() {
    this.querySelectorAll('portfolio-screen label').forEach(label => {
      label.addEventListener('click', (e) => {
        const screen = e.target.closest('portfolio-screen');
        if (screen) {
          const screenId = screen.getAttribute('screen-id');
          if (screenId) {
            history.replaceState(null, null, this.getScreenHash(screenId));
          }
        }
      });
    });
  }

  handleScroll() {
    this.scrolled = window.scrollY > 100;
  }

  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const screenId = entry.target.getAttribute("screen-id");
          this.activeScreen = screenId;
          history.replaceState(null, null, this.getScreenHash(screenId));
        }
      });
    }, options);

    this.querySelectorAll("portfolio-screen").forEach(screen => {
      observer.observe(screen);
    });
  }

  setupScrollBehavior() {
    this.querySelectorAll("portfolio-screen").forEach((screen) => {
      screen.addEventListener("click", (e) => {
        if (e.target.tagName === "A" && e.target.getAttribute("href")?.startsWith("#")) {
          e.preventDefault();
          const targetId = e.target.getAttribute("href").substring(1);
          this.scrollToScreen(targetId);
        }
      });
    });
  }

  setupContactForm() {
    const form = this.querySelector("#contactForm");
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const responseElement = this.querySelector("#formResponse");
        
        try {
          const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });
          
          if (response.ok) {
            responseElement.textContent = "Thank you for your message! I'll get back to you soon.";
            responseElement.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
            responseElement.style.color = "var(--ddd-theme-default-green)";
            form.reset();
          } else {
            throw new Error('Form submission failed');
          }
        } catch (error) {
          responseElement.textContent = "There was a problem sending your message. Please try again later.";
          responseElement.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
          responseElement.style.color = "var(--ddd-theme-default-red)";
        } finally {
          responseElement.style.padding = "1rem";
          responseElement.style.borderRadius = "4px";
          responseElement.style.marginTop = "1rem";
          setTimeout(() => {
            responseElement.textContent = "";
            responseElement.style.backgroundColor = "transparent";
            responseElement.style.padding = "0";
            responseElement.style.marginTop = "0";
          }, 5000);
        }
      });
    }
  }

  checkHash() {
    if (window.location.hash) {
      const hash = window.location.hash;
      let targetId = '';
      
      if (hash.startsWith('#/screen-')) {
        const screenNum = parseInt(hash.replace('#/screen-', ''));
        targetId = Object.keys(this.screenOrder).find(
          key => this.screenOrder[key] === screenNum
        ) || 'about';
      } else {
        targetId = hash.substring(1);
        if (this.screenOrder[targetId]) {
          history.replaceState(null, null, this.getScreenHash(targetId));
        }
      }

      if (targetId) {
        setTimeout(() => {
          this.scrollToScreen(targetId);
        }, 100);
      }
    }
  }

  scrollToScreen(screenId) {
    const screen = this.querySelector(`portfolio-screen[screen-id="${screenId}"]`);
    if (screen) {
      this.activeScreen = screenId;
      history.replaceState(null, null, this.getScreenHash(screenId));
      screen.scrollIntoView({ behavior: "smooth" });
    }
  }

  handleNavClick(e, screenId) {
    e.preventDefault();
    history.replaceState(null, null, this.getScreenHash(screenId));
    this.scrollToScreen(screenId);
  }

  render() {
    return html`
      <div class="container">
        <div class="sidebar">
          <div class="sidebar-header">My Portfolio</div>
          <ul class="nav-links">
            ${this.screens.map(
              (screen) => html`
                <li class="nav-link">
                  <a
                    href="${this.getScreenHash(screen.id)}"
                    class="${this.activeScreen === screen.id ? "active" : ""}"
                    @click="${(e) => this.handleNavClick(e, screen.id)}"
                    >${screen.title}</a
                  >
                </li>
              `
            )}
          </ul>
        </div>
        <div class="content">
          <slot></slot>
          <scroll-button ?hidden="${!this.scrolled}"></scroll-button>
        </div>
      </div>
    `;
  }
}

customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);