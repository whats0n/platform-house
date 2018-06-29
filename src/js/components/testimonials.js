import {OWL, ACTIVE} from '../constants';

const prev = `<svg viewBox="0 0 53.4 14.8">
    <path d="M2.4 6.4h51v2h-51z"/>
    <path d="M.01 7.444L1.424 6.03l7.425 7.425-1.414 1.414z"/>
    <path d="M.01 7.384L7.435-.041l1.414 1.415-7.425 7.424z"/>
</svg>`;
const next = `<svg viewBox="0 0 53.4 14.8">
    <path d="M0 6.4h51v2H0z"/>
    <path d="M44.606 13.374L52.03 5.95l1.414 1.414-7.424 7.424z"/>
    <path d="M44.606 1.435L46.02.02l7.424 7.425-1.414 1.414z"/>
</svg>`;

const update = props => {
  const {thumbs, pictures, slider} = props;

  const currentSlide = slider.find('.owl-item.active');
  const currentSlideIndex = currentSlide.find('.js-testimonials-slide').data('index');
  const currentThumb = thumbs.filter(`[data-index="${currentSlideIndex}"]`);
  const currentPicture = pictures.filter(`[data-index="${currentSlideIndex}"]`);
  
  pictures.removeClass(ACTIVE);
  currentPicture.addClass(ACTIVE);
  // thumbs
  //   .add(pictures)
  //   .removeClass(ACTIVE);
  // currentThumb
  //   .add(currentPicture)
  //   .addClass(ACTIVE);
};

$('.js-testimonials').each((i, container) => {
  container = $(container);
  const slider = container.find('.js-testimonials-slider');
  const thumbs = container.find('.js-testimonials-thumb');
  const pictures = container.find('.js-testimonials-picture');
  let play = true;

  slider
    .addClass(OWL)
    .owlCarousel({
      items: 1,
      nav: true,
      navText: [ prev, next ],
      navContainerClass: 'testimonials__nav',
      navClass: [ 'testimonials__arrow testimonials__prev', 'testimonials__arrow testimonials__next' ],
      dots: false,
      autoplay: true,
      autoplayTimeout: 8000,
      loop: true,
      autoHeight: true,
      onTranslated: () => update({ slider, thumbs, pictures }),
      onInitialized: () => update({ slider, thumbs, pictures })
    });

  $('.testimonials__arrow').on('click', e => {
    if (play) {
      play = false;
      slider.trigger('stop.owl.autoplay');
    }
  });

  // thumbs.each((i, thumb) => {
  //   thumb = $(thumb);
  //   const currentIndex = thumb.data('index');
  //   const currentPicture = pictures.filter(`[data-index="${currentIndex}"]`);
  //   const otherThumbs = thumbs.not(thumb);
    
  //   thumb.click(e => {
  //     e.preventDefault();

  //     otherThumbs
  //       .add(pictures)
  //       .removeClass(ACTIVE);

  //     thumb
  //       .add(currentPicture)
  //       .addClass(ACTIVE);

  //     slider.trigger('to.owl.carousel', currentIndex - 1);
  //   });
  // });
});
