
export function getActiveSlide(slider: Element, slides: HTMLElement[]): number{
    const scrolled = slider.scrollLeft;
    if(slides.length > 0){
        const slideWidth = slides[0].getBoundingClientRect().width;
        return slides.findIndex( (slide, ix) => ix * slideWidth === scrolled);
    } else {
        return 0;
    }
}