import {LitElement, html, css, customElement, property} from 'lit-element';

@customElement('search-field')
export class SearchField extends LitElement {

    constructor() {
        super();
      }

    static get styles() {
        return css`
        `;
        
    }

    render() {
        return html`
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