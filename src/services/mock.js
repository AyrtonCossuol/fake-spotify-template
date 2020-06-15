import slides from './slides.json';

export default {
    async fetchSlides() {
        return await slides;
    }
};