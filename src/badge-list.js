import { LitElement, html, css } from 'lit';


const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

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
    :host([accent-color="blue"]) .card {
      background-color: var(--badge-list-accent-color, blue);
      color: white;
    }
    :host([accent-color="red"]) .card {
      background-color: var(--badge-list-accent-color, red);
      color: white;
    }
    :host([accent-color="yellow"]) .card {
      background-color: var(--badge-list-accent-color, yellow);
      color: white;
    }
    :host([accent-color="green"]) .card {
      background-color: var(--badge-list-accent-color, green);
      color: white;
    }
    
  .card {
    width: 300px;
    margin: 30px auto;
    border-radius: 10px;
    box-shadow: 2px 2px 8px #ccc;
    background-color: #f9f9f9;
    overflow: scroll;
    flex-direction: row;
    float: left;
  }
  
  
  div {
    padding: 10px;
  }
  
  .card img {
    display: block;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 18px;
  
    object-fit: cover;
    transition: all 0.2s ease-in-out;
  }
  
  img:hover {
    transform: scale(1.3);
  }
  
  
  .card h2 {
    margin: 4px;
    font-size: 21px;
    font-weight: bold;
    text-align: center;
  }
  
  .card p {
    margin: 20px;
    font-size: 18px;
    text-align: center;
  }
  
  .cool-button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    display: block;
    margin: auto;
    text-decoration: none;
  }
  
  .cool-button:hover {
    background-color: red;
    color: black;
    transform: scale(1.1);
    text-decoration: none;
  }
  #duplicate {
    background-color: pink;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    display: block;
    margin: auto;
    text-decoration: none;
    position: absolute;
    top: 5%;
    left: 70%;
    transform: translate(-50%, -50%);
    font-weight: bold;
  }
  #duplicate:hover,
  #duplicate:focus {
    background-color: white;
    color: pink;
  }
  
  #change-color {
    background-color: pink;
    color: white;
    padding: 10px 30px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    display: block;
    margin: auto;
    position: absolute;
    top: 11%;
    left: 70%;
    transform: translate(-50%, -50%);
    font-weight: bold;
  }
  
  #change-color:hover,
  #change-color:focus {
    background-color: white;
    color: pink;
  }
  
  #change-text {
    background-color: pink;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    display: block;
    margin: auto;
    text-decoration: none;
    position: absolute;
    top: 17%;
    left: 70%;
    transform: translate(-50%, -50%);
    font-weight: bold;
  }
  
  #change-text:hover,
  #change-color:focus {
    background-color: white;
    color: pink;
  
    text-decoration: none;
  }
  
  .delete {
    background-color: pink;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    display: block;
    margin: auto;
    text-decoration: none;
    position: absolute;
    top: 23%;
    left: 70%;
    transform: translate(-50%, -50%);
    font-weight: bold;
  }
  
  .delete:hover,
  .delete:focus {
    background-color: white;
    color: pink;
  
    text-decoration: none;
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
      this.accentColor = null;
      this.header = 'My app';
      this.name = "Welcome";
      this.opened = false;
      this.yourPhoto = new URL ("https://images-prod.dazeddigital.com/592/azure/dazed-prod/1060/8/1068776.jpg").href;
      this.altText = "Your card";
  
  
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
      <summary>Le Details</summary>
      <slot>
    
  
      </slot>
    </details>
  
    </div>
  
      `;
    }
  }

customElements.define('badge-list', BadgeList);
