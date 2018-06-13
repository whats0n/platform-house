import {BODY, OPEN} from '../constants';

const OVERFLOW_HIDDEN = 'is-overflow-hidden';
const modals = $('[data-modal]');

const show = (target) => {
  BODY.addClass(OVERFLOW_HIDDEN);
  modals
  	.filter(`[data-modal="${target}"]`)
  	.scrollTop(0)
  	.addClass(OPEN);
};

const hide = (target) => {
  BODY.removeClass(OVERFLOW_HIDDEN);
  modals
  	.filter(`[data-modal="${target}"]`)
  	.removeClass(OPEN);
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
