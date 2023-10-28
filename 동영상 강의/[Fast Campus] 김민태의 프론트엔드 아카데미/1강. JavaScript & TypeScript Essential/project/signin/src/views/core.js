
const DefaultProps = {
  id: '',
  text: '',
  label: 'label',
  type: 'text',
  placeholder: '',
  require: false,
};

export default class CoreField {
  template;
  container;
  data;
  validateRules = [];

  constructor(template, container, data) {
    this.template = template;
    this.container = container;
    this.data = { ...DefaultProps, ...data };
  }

  validate = () => {
    const target = this.data.text ? this.data.text.trim() : '';

    const invalidateRules = this.validateRules
      .filter(validateRule => validateRule.rule.test(target) !== validateRule.match);

    return (invalidateRules.length > 0) ? invalidateRules[0] : null;
  }

  addValidateRule = rule => {
    this.validateRules.push(rule);
  }

  get name() {
    return this.data.id;
  }

  get value() {
    return this.data.text || '';
  }

  render = (append = false) => {
    const container = document.querySelector(this.container);

    if (append) {
      const divFragment = document.createElement('div');
      divFragment.innerHTML = this.template(this.buildData());

      container.appendChild(divFragment.children[0]);
    } else {
      container.innerHTML = this.template(this.buildData());
    }
  }
}