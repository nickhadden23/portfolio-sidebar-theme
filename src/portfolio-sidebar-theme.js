import { LitElement, html, css } from "lit";
import "@haxtheweb/scroll-button/scroll-button.js";

class PortfolioSidebarTheme extends LitElement {
  static get tag() {
    return "portfolio-sidebar-theme";
  }

  static get properties() {
    return {
      activeScreen: { type: String },
      screens: { type: Array },
      showScrollButton: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.activeScreen = "about";
    this.showScrollButton = false;
    this.screens = [
      { id: "about", title: "About" },
      { id: "projects", title: "Projects" },
      { id: "skills", title: "Skills" },
      { id: "coursework", title: "Coursework" },
      { id: "contact", title: "Contact" }
    ];
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --sidebar-width: 250px;
        --sidebar-bg: #2c3e50;
        --sidebar-text: #ffffff;
        --sidebar-hover: #34495e;
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
        transition: background-color 0.3s ease;
      }

      .nav-link a:hover,
      .nav-link a.active {
        background-color: var(--sidebar-hover);
      }

      .main-content {
        margin-left: var(--sidebar-width);
        width: calc(100% - var(--sidebar-width));
        height: 100vh;
        overflow-y: auto;
        scroll-snap-type: y mandatory;
      }

      
      scroll-button {
        position: fixed;
        right: 30px;
        bottom: 30px;
        --scroll-button-bg: #FFD700;
        --scroll-button-bg-hover: #FFA500;
        --scroll-button-text: #000000;
        --scroll-button-size: 50px;
        --scroll-button-border-radius: 50%;
        --scroll-button-shadow: 0 2px 10px rgba(0,0,0,0.3);
        --scroll-button-icon: "↑";
        --scroll-button-font-size: 24px;
        z-index: 999;
        transition: all 0.3s ease;
      }

      scroll-button:hover {
        transform: scale(1.1);
      }

      @media (max-width: 768px) {
        .sidebar {
          width: 100%;
          height: auto;
          position: relative;
          padding: 1rem;
        }

        .main-content {
          margin-left: 0;
          width: 100%;
        }

        scroll-button {
          right: 20px;
          bottom: 20px;
          --scroll-button-size: 40px;
          --scroll-button-font-size: 20px;
        }
      }
    `;
  }

  firstUpdated() {
    const mainContent = this.shadowRoot.querySelector('.main-content');
    mainContent.addEventListener('scroll', () => {
      this.showScrollButton = mainContent.scrollTop > 300;
    });
  }

  render() {
    return html`
      <div class="sidebar">
        <div class="sidebar-header">My Portfolio</div>
        <ul class="nav-links">
          ${this.screens.map((screen, index) => html`
            <li class="nav-link">
              <a href="#screen-${index + 1}"
                 @click="${(e) => this.handleNavClick(e, screen.id, index + 1)}"
                 class="${this.activeScreen === screen.id ? 'active' : ''}">
                ${screen.title}
              </a>
            </li>
          `)}
        </ul>
      </div>
      
      <div class="main-content">
        <slot></slot>
      </div>
      
    
      <scroll-button 
        ?hidden="${!this.showScrollButton}"
        icon="arrow-up"
        aria-label="Scroll to top"
        @click="${this.scrollToTop}">
      </scroll-button>
    `;
  }

  handleNavClick(e, screenId, screenNumber) {
    e.preventDefault();
    this.activeScreen = screenId;
    const screen = this.querySelector(`portfolio-screen[screen-id="${screenId}"]`);
    if (screen) {
      screen.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop() {
    const mainContent = this.shadowRoot.querySelector('.main-content');
    mainContent.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.activeScreen = "about";
  }
}

customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);