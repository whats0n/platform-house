import 'select2';
import autosize from 'autosize';
import {ACTIVE, FOCUS} from '../constants';

const onChange = props => {
  const {field, control} = props;
  const val = control.val();
  if (val && val.length) field.addClass(ACTIVE);
};

const onBlur = props => {
  const {field, control} = props;
  const val = control.val();
  field.removeClass(FOCUS);
  if (!val || !val.length) field.removeClass(ACTIVE);
};

const formatState = state => {
  if (!state.id) return state.text;
  const option = $(state.element);
  return $(`<span class="field__select-item ${option.data('color')}"><img src="${option.data('icon')}" alt="${state.text}" />${state.text}</span>`);
};

$('.js-field').each((i, field) => {
  field = $(field);
  //controls
  const input = field.find('.js-field-input');
  const textarea = field.find('.js-field-textarea');
  const select = field.find('.js-field-select');
  const control = select.length ? select : textarea.length ? textarea : input;

  if (input.length || textarea.length) {
    control.on({
      input() { onChange({ control, field }); },
      focus() { field.addClass(FOCUS); },
      blur() { onBlur({ control, field }); }
    });
    textarea.length && autosize(textarea);
    onChange({ control, field });
  } 

  select.length && select.select2({
    templateSelection: formatState,
    templateResult: formatState,
    minimumResultsForSearch: -1,
    dropdownParent: select.parent()
  }).on({
    'select2:open'() {
      field.addClass(ACTIVE);
    },
    'select2:close'() {
      field.removeClass(ACTIVE);
    }
  });


});

const regex = /^[\d ()+-]+$/;

$('.js-input-phone').each((i, input) => {
  input = $(input);
  let val = '';
  input.on('input', () => {
    const currentVal = input.val();
    if (currentVal) {
      const newVal = currentVal.match(regex);
      val = newVal ? newVal : val;
      input.val(val);
    }
  });
});
