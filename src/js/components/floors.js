import {TimelineMax} from 'gsap';
import {WIN, ACTIVE, DISABLED} from '../constants';

let shown = false;
let active = false;
const duration = 400;
const figuresParent = $('.js-floors-figures');

$('.js-floors').each((i, parent) => {
  parent = $(parent);
  const items = parent.find('.js-floors-item');
  const figures = parent.find('.js-floors-figure');
  const containers = parent.find('.js-floors-container');

  items.each((i, item) => {
    item = $(item);
    const control = item.find('.js-floors-control');
    const container = item.find('.js-floors-container');
    const target = control.data('target');
    const figure = figures.filter(`[data-figure="${target}"]`);

    const otherItems = items.not(item);
    const otherContainers = containers.not(container);
    const otherFigures = figures.not(figure);

    control.on('click', e => {
      e.preventDefault();
      if (!window.matchMedia('(max-width: 1023px)').matches && !active) return;
      item.toggleClass(ACTIVE);
      container.stop(true,true,true).slideToggle(duration);

      if (item.hasClass(ACTIVE)) {
        otherFigures
          .removeClass(ACTIVE)
          .addClass(DISABLED);
        figure
          .removeClass(DISABLED)
          .addClass(ACTIVE);
        figuresParent.attr('data-active', target);
      } else {
        figures.removeClass(DISABLED);
        figure.removeClass(ACTIVE);
        figuresParent.attr('data-active', false);
      }

      otherItems.removeClass(ACTIVE);
      otherContainers.slideUp(duration);
    });
  });
});

const show = () => {
  const offsetTop = figuresParent.offset().top;
  const height = figuresParent.outerHeight();
  const scrollTop = WIN.scrollTop();
  if (shown || offsetTop + height > scrollTop + WIN.outerHeight() || offsetTop < scrollTop) return;
  shown = true;
  const duration = 0.7;
  const delay = duration*0.35;
  const containers = $('.js-floors-figure-container').toArray().reverse();

  new TimelineMax()
    .staggerTo(containers, duration, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut
    }, delay)
    .eventCallback('onComplete', () => {
      figuresParent.addClass(ACTIVE);
      active = true;
    });
};

WIN.on('load scroll', () => {
  show();
});
