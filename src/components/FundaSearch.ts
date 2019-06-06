import "./SearchField";
import "./ResultsList";
import search from "../services/Search";
import stroopwafel from "../img/stroopwafel-solid.svg";
import { debounce } from "debounce";

import {LitElement, html, css, customElement, property} from 'lit-element';

@customElement('funda-search')
export class FundaSearch extends LitElement {

    @property({ type: Array}) results: Array<any> = [];
    @property({ type: Boolean, attribute: false}) loading = false;

    constructor() {
        super();
    }

    static get styles() {
        return css`
        :host {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
        }
        search-field {
            margin-bottom: 10px;
            display: block;
            padding: 10px;
            box-sizing: border-box;
        }
        .spinner{
            animation: spin 1s linear infinite;
            width: 50px;
            height: 50px;
            display: none;
            margin: 10px auto;
        }
        .spinner.loading{
            display:block;
        }
        @keyframes spin {
            from {transform: rotate(0deg)}
            to {transform: rotate(360deg)}
        }
        `;
        
    }

    render() {
        return html`

            <search-field @update="${debounce(this.searchUpdated, 1000)}" placeholder="Amsterdam" label="Search for a city"></search-field>
            <img src="${stroopwafel}" class="spinner ${this.loading ? 'loading': ''}">
            ${this.results.length === 0  && !this.loading ? html`<span class="no-result">Sorry, we couldn't find anything</span>`: ''}
            <results-list .results="${this.results}"></search-field>
        `;
    }
    async searchUpdated(event: CustomEvent) {
        this.loading = true;
        this.results = [];
        this.results = (await search(event.detail.value)).Objects.map(
            object => ({
                foto: {
                    xl: object.FotoLargest,
                    l: object.FotoLarge,
                    m: object.FotoMedium,
                    s: object.Foto
                },
                price: object.Koopprijs,
                link: object.URL
            })
        );
        this.loading = false;
    }

}