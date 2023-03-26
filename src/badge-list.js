import { LitElement, html, css } from 'lit';


const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;
const logo2 = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

// this is a comment testing commit from command line 

class BadgeList extends LitElement {
    static get properties() {
      return {
        name: {
          type: String,
          reflect: true
        },
        fname: { type: String},
        position: {
          type: String,
        },
        top: { type: String},
        titleWelcome: { type: String, attribute: 'title-welcome'},
        opened: {type: Boolean, reflect: true},  
        accentColor: {
          type: String,
          reflect: true,
          attribute: 'accent-color'
      }
    }

  };

    static get styles() {
      return css`
    
    
  .card {
    width: 95%;
    margin: 30px auto;
    border-radius: 10px;
    background-color: #bde5f4;
    flex-direction: row;
    float: center;
  }
  
  div {
    padding: 10px;
  }

  .details {
    background-color: white;
  }
  
  .card img {
    float: left;
    width: 50px;
    height: 50px;
    margin-right: 10px; 
  }
  
  .card h2 {
    position: relative;
    margin: 4px;
    font-size: 18px;
    text-align: left;
  }
  
  .card p {
    margin: 20px;
    font-size: 18px;
    text-align: center;
  }
  
  @media (max-width: 800px) and (min-width: 500px) {
    .card button {
      display: block;
    }
  }
  
  @media (max-width: 500px) {
    .card {
      width: 90%;
    }
  }
  
  `;
    }

    constructor() {
      super();
      this.name = "Amazon Cognito";
      this.opened = false;
      this.yourPhoto = new URL ("https://badgesapp.psu.edu/uploads/badge/image/623/Cognito.png").href;
      this.altText = "Your card";
      this.badgeDescription = "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools";
      this.tutorialLink = new URL ("https://docs.aws.amazon.com/cognito/latest/developerguide/tutorials.html").href;
    }
  
    toggleEvent(e) {
      const state = this.shadowRoot.querySelector('details').getAttribute('open') === '' ? true : false;
      this.opened = state;
      console.log(this.opened);
    }
  
    updated(changedProperties) { 
      changedProperties.forEach((oldValue, propName) => {
        if (propName === 'opened') {
          this.dispatchEvent(new CustomEvent('opened-changed',
          {
            composed: true, 
            bubbles: true,
            cancelable: false,
            detail: {
            value: this[propName] 
            } 
           }
          ))
       console.log(`${propName} changed. oldValue: ${oldValue}`);
        }
      });
    }


    render() {
      return html`
      <div class="card">
    
      <img src="${this.yourPhoto}" alt="${this.altText}" />
      <h2>${this.name}</h2>
    
     <details class="details" .open="${this.opened}" @toggle="${this.toggleEvent}" @click="${this.clickEvent}">

        <div class="dropdwnDescrip">${this.badgeDescription}</div>
        <div class="tutorialLink">${this.tutorialLink}</div>

    </details>

    </div>
      `;
    }
  }

customElements.define('badge-list', BadgeList);
