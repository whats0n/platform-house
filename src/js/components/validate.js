import 'jquery-form-validator';
import {ERROR, VALID, ACTIVE} from '../constants';
import modal from './modal';

$('.js-validate').each((i, form) => {
  const formJQ = $(form);
  const fields = formJQ.find('.js-field');
  const select = formJQ.find('.js-field-select');

  $.validate({
    form: form,
    scrollToTopOnError: false,
    borderColorOnError: '',
    inputParentClassOnError: '',
    inputParentClassOnSuccess: '',
    errorElementClass: ERROR,
    inlineErrorMessageCallback() { return false; },
    onElementValidate(valid, control) {
      const field = control.closest('.js-validate-field');
      !valid ? field.addClass(ERROR) : field.removeClass(ERROR);
    },
    onError($form) {
      $form.removeClass(VALID);
    },
    onSuccess($form) {
      $form.addClass(VALID);
      setTimeout(() => {
        $form
          .removeClass(VALID)
          .get(0)
          .reset();
        select
          .find('option')
          .prop('selected', false)
          .first()
          .prop('selected', true)
          .change();
        fields.removeClass(ACTIVE);
        modal.hide('form');
      }, 2000);
    }
  });

  $(form).submit(e => e.preventDefault());
});
