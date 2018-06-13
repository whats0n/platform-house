import {BODY} from '../constants';

const FORM = 'is-form';

$('.js-form-open').click(e => {
  e.preventDefault();
  BODY.addClass(FORM);
});

$('.js-form-close').click(e => {
  e.preventDefault();
  BODY.removeClass(FORM);
});
