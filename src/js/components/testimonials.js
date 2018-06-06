import {OWL, ACTIVE} from '../constants';

const update = props => {
  const {thumbs, pictures, slider} = props;

  const currentSlide = slider.find('.owl-item.active');
  const currentSlideIndex = currentSlide.find('.js-testimonials-slide').data('index');
  const currentThumb = thumbs.filter(`[data-index="${currentSlideIndex}"]`);
  const currentPicture = pictures.filter(`[data-index="${currentSlideIndex}"]`);

  thumbs
    .add(pictures)
    .removeClass(ACTIVE);
  currentThumb
    .add(currentPicture)
    .addClass(ACTIVE);
};

$('.js-testimonials').each((i, container) => {
  container = $(container);
  const slider = container.find('.js-testimonials-slider');
  const thumbs = container.find('.js-testimonials-thumb');
  const pictures = container.find('.js-testimonials-picture');

  slider
    .addClass(OWL)
    .owlCarousel({
      items: 1,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      loop: true,
      onTranslated: () => update({ slider, thumbs, pictures }),
      onInitialized: () => update({ slider, thumbs, pictures })
    });

  thumbs.each((i, thumb) => {
    thumb = $(thumb);
    const currentIndex = thumb.data('index');
    const currentPicture = pictures.filter(`[data-index="${currentIndex}"]`);
    const otherThumbs = thumbs.not(thumb);
    
    thumb.click(e => {
      e.preventDefault();

      otherThumbs
        .add(pictures)
        .removeClass(ACTIVE);

      thumb
        .add(currentPicture)
        .addClass(ACTIVE);

      slider.trigger('to.owl.carousel', currentIndex - 1);
    });
  });
});
