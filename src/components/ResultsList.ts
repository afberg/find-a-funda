import "./CarouselIndicator";
import { debounce } from "debounce";
import { getActiveSlide } from "../services/ScrollSnap";
import { LitElement, html, css, customElement, property} from 'lit-element';

@customElement('results-list')
export class ResultsList extends LitElement {

    @property({ type: Array}) results: Array<any> = [];
    @property({ type: Number}) active = 0;

    constructor() {
        super();
    }

    static get styles() {
        return css`
        .container{
            display: block;
            position: relative;
            min-width: 100%;
            scroll-snap-align: start;
        }
        .slider{
            width: 100vw;
            scroll-snap-type: x mandatory;
            overflow-x: scroll;
            display: flex;
        }
        img {
            display: block;
            max-width: 100%;
            min-width: 100%;

        }
        .price{
            position: absolute;
            padding: 10px;
            top: 0;
            background-color: rgba(0,0,0,0.5);
            border-bottom-right-radius: 10px;
            color: white;
            font-size: 18px;
        }
        .price::before{
            content: "€";
        }
        carousel-indicator {
            justify-content: center;
            position: absolute;
            bottom: 10px;
            width: 100%;
        }
        .results{
            position: relative;
        }
        `;
        
    }

    render() {
        return html`
            <div class="results">
                <div class="slider" @scroll="${debounce(this.updateActiveSlide, 200)}">
                    ${this.results.map(result => html`
                    <a class="container" href="${result.link}">
                            <img  srcset="
                                    ${result.foto.s} 300w,
                                    ${result.foto.m} 500w,
                                    ${result.foto.l} 800w,
                                    ${result.foto.xl} 1000w
                                    "
                                sizes="
                                (max-width: 300px) 300px,
                                (max-width: 500px) 500px,
                                (max-width: 800px) 800px,
                                (max-width: 1000px) 1000px
                                "
                            >
                            <div class="price">${result.price}</div>
                            
                    </a>
                `)}
            </div>
            <carousel-indicator count="${this.results.length}" activeIx="${this.active}"></carousel-indicator>
        </div>
        `;
    }
    updateActiveSlide() {
        this.active = getActiveSlide(this.shadowRoot.querySelector(".slider"), [...this.shadowRoot.querySelectorAll(".container")].map(elem => elem as HTMLElement));
    }

}