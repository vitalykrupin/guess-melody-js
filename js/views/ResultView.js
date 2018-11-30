import AbstractView from './AbstractView';
import {getStats, getTotal, rivalsMock} from '../data/results';

const Titles = {
  FAIL_TIME: `Увы и ах!`,
  FAIL_TRIES: `Какая жалость!`,
  WIN: `Вы настоящий меломан!`
};

const Buttons = {
  FAIL: `Попробовать ещё раз`,
  WIN: `Сыграть ещё раз`
};

export default class ResultsView extends AbstractView {
  constructor(state) {
    super();
    this.isFailed = (state.notes >= 3);
    this.result = getTotal(state);
    this.title = this.isFailed ? Titles.FAIL_TRIES : Titles.WIN;
    this.button = this.isFailed ? Buttons.FAIL : Buttons.WIN;
    this.stats = getStats(rivalsMock, state);
  }

  get template() {
    return `
      <section class="result">
        <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
        <h2 class="result__title">${this.title}</h2>
        <p class="result__total ${this.isFailed ? `result__total--fail` : ``}">${this.result}</p>
        ${!this.isFailed ? `<p class="result__text">${this.stats}</p>` : ``}
        <button class="result__replay" type="button">${this.button}</button>
      </section>
    `;
  }
}
