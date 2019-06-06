import {LitElement, html, css, customElement, property} from 'lit-element';

@customElement('search-field')
export class SearchField extends LitElement {

    @property({ type: String}) searchText = '';

    constructor() {
        super();
      }

    static get styles() {
        return css`
        `;
        
    }

    render() {
        return html`
            <input .value="${this.searchText}"/>
        `;
    }

}