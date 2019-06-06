import {LitElement, html, css, customElement, property} from 'lit-element';

@customElement('search-field')
export class SearchField extends LitElement {
    @property({ type: String, attribute: false }) inputId = "input-" + (Math.random()*1000%1).toString();
    @property({ type: String}) label = "";
    constructor() {
        super();
        setTimeout(() => this.searchChanged("Amsterdam"), 10);
        ;
    }

    static get styles() {
        return css`
        `;
        
    }

    render() {
        return html`
            <label for="${this.inputId}">${this.label}</label>
            <input @input="${(ev) => this.searchChanged(ev.target.value)}"/>
        `;
    }

    searchChanged(value: string){
        this.dispatchEvent(new CustomEvent('update', {
            detail: {
              value
            }
        }));
    }
}