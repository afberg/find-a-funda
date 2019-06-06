import "./SearchField";
import "./ResultsList";
import search from "../services/Search";
import { debounce } from "debounce";

import {LitElement, html, css, customElement, property} from 'lit-element';

@customElement('funda-search')
export class FundaSearch extends LitElement {

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
            <search-field @update="${debounce(this.searchUpdated, 500)}"></search-field>
            <results-list .results="${this.results}"></search-field>
        `;
    }
    searchUpdated(event: CustomEvent) {
        search(event.detail.value);
    }

}