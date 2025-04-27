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
      }
    };
  }

  constructor() {
    super();
    this.screenTitle = "";
    this.screenId = "";
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('screenId')) {
      this.updateScreenColors();
    }
  }

  updateScreenColors() {
    const colors = {
      about: ['#6a11cb', '#2575fc'],
      projects: ['#11998e', '#38ef7d'],
      skills: ['#f46b45', '#eea849'],
      coursework: ['#4568dc', '#b06ab3'], // Changed from experience to coursework
      contact: ['#0575e6', '#021b79']
    };
    
    if (colors[this.screenId]) {
      this.style.setProperty('--screen-bg', colors[this.screenId][0]);
      this.style.setProperty('--screen-bg-secondary', colors[this.screenId][1]);
      this.style.setProperty('--screen-text', '#ffffff');
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          min-height: 100vh;
          padding: 2rem;
          box-sizing: border-box;
          background: linear-gradient(135deg, var(--screen-bg, #6a11cb) 0%, var(--screen-bg-secondary, #2575fc) 100%);
          color: var(--screen-text, white);
          transition: all 0.3s ease;
          scroll-snap-align: start;
        }

        .content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 2rem;
          text-align: center;
          font-weight: 700;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
        }

        .profile-section {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .profile-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid white;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .project-link {
          color: inherit;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .project-link:hover {
          text-decoration: underline;
        }

        .skills-container {
          display: flex;
          gap: 2rem;
          justify-content: center;
        }

        .skills-column {
          flex: 1;
          max-width: 400px;
        }

        .skills-list {
          list-style-type: none;
          padding: 0;
        }

        .skills-list li {
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .coursework-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .coursework-card {
          background: rgba(255,255,255,0.1);
          padding: 1.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .coursework-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .coursework-card h3 {
          margin-top: 0;
          color: white;
          border-bottom: 2px solid rgba(255,255,255,0.2);
          padding-bottom: 0.5rem;
        }

        .contact-form {
          max-width: 600px;
          margin: 0 auto;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
        }

        input, textarea {
          width: 100%;
          padding: 0.75rem;
          border: none;
          border-radius: 4px;
          background: rgba(255,255,255,0.9);
        }

        .submit-btn {
          background: white;
          color: var(--screen-bg);
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.2s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .social-links h3 {
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }

        .social-links a {
          color: inherit;
          text-decoration: none;
          padding: 0.5rem 0;
          transition: all 0.2s ease;
          display: block;
        }

        .social-links a:hover {
          text-decoration: underline;
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .content {
            padding: 1rem;
          }
          
          h1 {
            font-size: 2rem;
          }

          .profile-section {
            flex-direction: column;
          }

          .skills-container {
            flex-direction: column;
          }

          .coursework-grid {
            grid-template-columns: 1fr;
          }
        }
      `
    ];
  }

  render() {
    return html`
      <div class="content" id="${this.screenId}">
        ${this.screenTitle ? html`<h1>${this.screenTitle}</h1>` : ''}
        <slot></slot>
      </div>
    `;
  }
}

globalThis.customElements.define(PortfolioScreen.tag, PortfolioScreen);