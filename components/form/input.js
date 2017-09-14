export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    id: String,
    name: String,
    disabled: Boolean,
    readonly: Boolean,
    size: String,
    maxlength: [String, Number],
    placeholder: String,
    inputClass: [Array, String],
    autocomplete: Boolean,
    autofocus: Boolean,
    pattern: String,
    ariaLabel: String,
    ariaDescribedby: String
  }
}
