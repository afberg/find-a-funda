import "./SearchField";
import "./ResultsList";
import search from "../services/Search";
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
        img{
            display: block;

        }
        `;
        
    }

    render() {
        return html`
            <search-field @update="${debounce(this.searchUpdated, 1000)}" placeholder="Amsterdam" label="Search for a city"></search-field>
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
        console.log(this.results);
        this.loading = false;
    }

}