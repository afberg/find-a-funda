
export function getActiveSlide(slider: Element, slides: HTMLElement[]): number{
    const scrolled = slider.scrollLeft;
    const slideWidth = slides[0].getBoundingClientRect().width;
    return slides.findIndex( (slide, ix) => ix * slideWidth === scrolled);
}