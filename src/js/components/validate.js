import 'jquery-form-validator';
import {ERROR, VALID} from '../constants';

$('.js-validate').each((i, form) => {
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
      console.log('error');
    },
    onSuccess($form) {
      $form.addClass(VALID);
      console.log('valid');
    }
  });

  $(form).submit(e => e.preventDefault());
});
