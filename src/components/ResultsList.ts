import {LitElement, html, css, customElement, property} from 'lit-element';

@customElement('results-list')
export class ResultsList extends LitElement {

    @property({ type: Array}) results: Array<any> = [];

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
        `;
        
    }

    render() {
        return html`
            <div class="slider">
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
            </div>
            
            `)}
        `;
    }

}