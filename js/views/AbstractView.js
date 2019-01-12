import {getElementFromTemplate} from '../utils';

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
  }

  get template() {
    throw new Error(`Template is required`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }

  render() {
    return getElementFromTemplate(this.template);
  }

  bind() {}
}
// import {getElementFromTemplate} from '../utils';

// export default abstract class AbstractView {

//   private _element: ChildNode

//   abstract get template(): string

//   get element() {
//     if (this._element) {
//       return this._element;
//     }
//     this._element = this.render();
//     this.bind(this._element);
//     return this._element;
//   }

//   private render(): ChildNode {
//     return getElementFromTemplate(this.template);
//   }

//   bind(element: ChildNode): void {}
// }
