import {WIN, ACTIVE} from '../constants';

const logo = $('.js-logo');

let start = WIN.scrollTop();

WIN.on('load scroll', () => {
  let current = WIN.scrollTop();
  start < current ? logo.addClass(ACTIVE) : logo.removeClass(ACTIVE);
  start = current;
});
