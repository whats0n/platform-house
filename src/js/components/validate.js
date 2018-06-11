import 'jquery-form-validator';
import {ERROR} from '../constants';

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
    }
  });
});
