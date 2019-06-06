import {LitElement, html, css, customElement, property} from 'lit-element';

@customElement('results-list')
export class ResultsList extends LitElement {

    @property({ type: Array}) results: Array<any> = [];

    constructor() {
        super();
    }

    static get styles() {
        return css`
        `;
        
    }

    render() {
        return html`
            <div class="results">I am a result</div>
        `;
    }

}