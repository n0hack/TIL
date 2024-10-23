import { DaumAddress } from '../types';
import template from './address-field.template';

type Props = {
  id: string;
  label: string;
  require?: boolean;
};

const defaultProps: Props = {
  id: '',
  label: 'label',
  require: false,
};

export default class AddressField {
  private template = template;
  private container: string;
  private data: Props;

  private address1?: string;
  private zipcode?: string;

  constructor(container: string, data: Props) {
    this.container = container;
    this.data = { ...defaultProps, ...data };
  }

  get isValid() {
    return true;
  }

  get name() {
    return this.data.id;
  }

  get value() {
    const container = document.querySelector(this.container) as HTMLElement;
    const address2 = (container.querySelector('#address2') as HTMLInputElement)?.value;

    return `${this.zipcode}|${this.address1} ${address2 || ''}`;
  }

  /**
   * @param append 컨테이너에 붙일 것인지 여부
   */
  render = (append: boolean = false) => {
    const container = document.querySelector(this.container) as HTMLElement;

    if (append) {
      const divFragment = document.createElement('div');

      divFragment.innerHTML = this.template({ ...this.data });
      container.append(divFragment.firstElementChild as HTMLElement);
    } else {
      container.innerHTML = this.template({
        ...this.data,
      });
    }

    container.querySelector('#search-address')?.addEventListener('click', (e) => {
      e.preventDefault();

      new window.daum.Postcode({
        oncomplete: (data: DaumAddress) => {
          this.address1 = data.roadAddress;
          this.zipcode = data.sigunguCode;

          (container.querySelector('#address1') as HTMLInputElement).value = `(${this.zipcode}) ${this.address1}`;
        },
      }).open();
    });
  };
}
