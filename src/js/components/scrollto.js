import {HTMLBODY} from '../constants';

$('[data-scrollto-control]').each((i, control) => {
  control = $(control);
  const container = $(`[data-scrollto-container="${control.data('scrollto-control')}"]`);

  control.on('click', e => {
    e.preventDefault();
    HTMLBODY.animate({
      scrollTop: container.offset().top
    }, 600);
  });
});
