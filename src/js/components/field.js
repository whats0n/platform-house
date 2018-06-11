import 'select2';
import {ACTIVE} from '../constants';

const onChange = props => {
  const {field, control} = props;
  const val = control.val();
  if (val && val.length) field.addClass(ACTIVE);
};

const onBlur = props => {
  const {field, control} = props;
  const val = control.val();
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
  const select = field.find('.js-field-select');
  const control = select.length ? select : input;

  if (input.length) {
    input.on({
      input() { onChange({ control, field }); },
      focus() { field.addClass(ACTIVE); },
      blur() { onBlur({ control, field }); }
    });
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
