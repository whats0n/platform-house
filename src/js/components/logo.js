import {WIN, ACTIVE} from '../constants';

const logo = $('.js-logo');

WIN.on('load scroll', () => WIN.scrollTop() > 0 ? logo.addClass(ACTIVE) : logo.removeClass(ACTIVE));
