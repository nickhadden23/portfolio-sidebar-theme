import { LitElement, html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class PortfolioScreen extends I18NMixin(DDD) {
  static get tag() {
    return 'portfolio-screen';
  }

  constructor() {
    super();
    this.screenTitle = "";
    this.screenId = "";
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
          color: white;
          transition: all 0.3s ease;
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
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .profile-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid white;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .profile-info {
          text-align: center;
        }

        .profile-info h2 {
          font-size: 2rem;
          margin: 0.5rem 0;
        }

        .tagline {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .social-icon {
          color: white;
          text-decoration: none;
          padding: 0.5rem 1rem;
          background-color: rgba(255,255,255,0.1);
          border-radius: 4px;
          transition: background-color 0.3s;
        }

        .social-icon:hover {
          background-color: rgba(255,255,255,0.2);
        }

        .bio-section {
          background-color: rgba(255,255,255,0.1);
          padding: 2rem;
          border-radius: 8px;
          max-width: 800px;
          margin: 0 auto;
        }

        .bio-section p {
          line-height: 1.6;
          font-size: 1.1rem;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          padding: 0;
          list-style: none;
        }

        .skills-list li {
          background-color: rgba(255,255,255,0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
        }

        @media (min-width: 768px) {
          .profile-section {
            flex-direction: row;
            text-align: left;
          }

          .profile-info {
            text-align: left;
          }

          .social-links {
            justify-content: flex-start;
          }
        }

        @media (max-width: 480px) {
          .content {
            padding: 1rem;
          }
          
          h1 {
            font-size: 2rem;
          }
        }
      `
    ];
  }

  render() {
    return html`
      <div class="content">
        ${this.screenTitle ? html`<h1>${this.screenTitle}</h1>` : ''}
        <slot></slot>
      </div>
    `;
  }
}

globalThis.customElements.define(PortfolioScreen.tag, PortfolioScreen);