import { nextTick } from '../utils';
import { RequireRule } from '../constant';
import template from './text-field.template';
import CoreField from './core';

export default class TextField extends CoreField {
  #updated = false;

  constructor(container, data) {
    super(template, container, data);

    if (this.data.require) {
      this.addValidateRule(RequireRule);
    }

    nextTick(this.#attachEventHandler);
  }

  #buildData = () => {
    const isInvalid = this.validate();

    if (this.#updated) {
      return {
        ...this.data, 
        updated: this.#updated,
        valid: !isInvalid,
        validateMessage: !!isInvalid ? isInvalid.message : ''
      }
    } else {
      return {
        ...this.data, 
        updated: this.#updated,
        valid: true,
        validateMessage: ''
      }
    }
  }

  #onChange = e => {
    const { value, id } = e.target;
  
    if (id === this.data.id) {
      this.#updated = true;
      this.data.text = value;
    }
  }

  #attachEventHandler = () => {
    document.querySelector(this.container).addEventListener('change', this.#onChange);
  }

  get isValid() {
    return !this.validate();
  }

  render = (append = false) => {
    const container = document.querySelector(this.container);

    if (append) {
      const divFragment = document.createElement('div');
      divFragment.innerHTML = this.template(this.#buildData());

      container.appendChild(divFragment.children[0]);
    } else {
      container.innerHTML = this.template(this.#buildData());
    }
  }
}
