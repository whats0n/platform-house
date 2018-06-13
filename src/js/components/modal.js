import {BODY, OPEN, WIN, FIXED, touchDetect} from '../constants';

const OVERFLOW_HIDDEN = 'is-overflow-hidden';
const modals = $('[data-modal]');
let scrollTop = null;

const show = (target) => {
  BODY.addClass(OVERFLOW_HIDDEN);
  modals
  	.filter(`[data-modal="${target}"]`)
  	.scrollTop(0)
  	.addClass(OPEN);

  if (touchDetect) {
  	scrollTop = WIN.scrollTop();
  	BODY
  		.addClass(FIXED)
  		.css('top', `-${scrollTop}px`);
  }
};

const hide = (target) => {
  BODY.removeClass(OVERFLOW_HIDDEN);
  modals
  	.filter(`[data-modal="${target}"]`)
  	.removeClass(OPEN);
  if (touchDetect) {
  	BODY
  		.removeClass(FIXED)
  		.removeAttr('style');
    WIN.scrollTop(scrollTop);
  }
};

$('[data-modal-open]').click(e => {
  e.preventDefault();
  show($(e.currentTarget).data('modal-open'));
});

$('[data-modal-close]').click(e => {
  e.preventDefault();
  hide($(e.currentTarget).data('modal-close'));
});

export default { hide, show };
