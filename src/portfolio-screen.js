import { LitElement, html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class PortfolioScreen extends I18NMixin(DDD) {
  static get tag() {
    return 'portfolio-screen';
  }

  static get properties() {
    return {
      ...super.properties,
      screenTitle: { 
        type: String, 
        attribute: 'screen-title',
        reflect: true
      },
      screenId: { 
        type: String, 
        attribute: 'screen-id',
        reflect: true
      },
      screenNumber: {
        type: Number,
        attribute: 'screen-number',
        reflect: true
      }
    };
  }

  constructor() {
    super();
    this.screenTitle = "";
    this.screenId = "";
    this.screenNumber = 0;
  }

  firstUpdated() {
    this.applyScreenStyles();
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('screenNumber')) {
      this.applyScreenStyles();
    }
  }

  applyScreenStyles() {
    const colorMap = {
      1: '--ddd-theme-primary',
      2: '--ddd-theme-secondary',
      3: '--ddd-theme-tertiary', 
      4: '--ddd-theme-quaternary',
      5: '--ddd-theme-quinary'
    };

    if (this.screenNumber && colorMap[this.screenNumber]) {
      this.style.cssText = `
        background-color: var(${colorMap[this.screenNumber]}) !important;
        color: var(--ddd-theme-default-emailFont) !important;
        background-image: linear-gradient(
          to bottom right,
          var(${colorMap[this.screenNumber]}),
          var(--ddd-theme-default-emailBackground)
        ) !important;
      `;
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          height: 100vh;
          width: 100%;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          scroll-snap-align: start;
          transition: background-color 0.5s ease;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 2rem;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          padding: 2rem;
          box-sizing: border-box;
          text-align: center;
        }

        .profile-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .project-link {
          color: white;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          color: #ffd700;
          text-decoration: underline;
        }

        .skills-container {
          display: flex;
          justify-content: center;
        }

        .skills-list {
          list-style-type: none;
          padding: 0;
          text-align: left;
        }

        .skills-list li {
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          margin: 0.5rem 0;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .skills-list li:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateX(5px);
        }

        .coursework-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .coursework-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 8px;
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
        }

        .coursework-card:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px);
        }

        .contact-form {
          max-width: 500px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 8px;
          backdrop-filter: blur(5px);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        input, textarea {
          width: 100%;
          padding: 0.75rem;
          border: none;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.9);
        }

        .submit-btn {
          background: white;
          color: #001e44;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background: #ffd700;
          transform: scale(1.05);
        }

        .social-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 2rem;
          gap: 0.5rem;
        }

        .social-links a {
          color: white;
          text-decoration: none;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: rgba(255, 255, 255, 0.3);
          color: #ffd700;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          
          .coursework-grid {
            grid-template-columns: 1fr;
          }
          
          .content-wrapper {
            padding: 1rem;
          }
        }
      `
    ];
  }

  render() {
    return html`
      <div class="content-wrapper">
        <slot></slot>
      </div>
    `;
  }
}

globalThis.customElements.define(PortfolioScreen.tag, PortfolioScreen);