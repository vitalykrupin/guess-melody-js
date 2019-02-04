import content from '../data/game-content';
import {calculatePoints} from '../game/calc-points';
import {showResults} from '../game/show-results';
import {formatWord} from '../utils';
import {InitialState} from '../data/game-data';
import AbstractView from '../views/AbstractView';

export default class WinView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    const {points, pointFast} = calculatePoints(this.state);
    this.points = points;
    this.pointFast = pointFast;
    this.result = {
      userPoint: points,
      time: InitialState.time - state.time,
      lives: state.lives
    };
    this.min = Math.floor(this.result.time / 60);
    this.sec = Math.floor(this.result.time % 60);
  }

  get template() {
    return `
      <section class="result">
        <div class="result__logo"><img src="img/melody-logo.png" alt="${content.header.logo}" width="186" height="83"></div>
        <h2 class="result__title">${content.result.win}</h2>
        <p class="result__total">За 0${this.min}&#160${formatWord((this.min), `min`)} и ${this.sec}&#160${formatWord((this.sec), `sec`)} вы набрали ${this.points}&#160${formatWord(this.points, `point`)} (${this.pointFast}&#160${formatWord(this.pointFast, `fast`)}), совершив ${InitialState.lives - this.result.lives}&#160${formatWord(InitialState.lives - this.result.lives, `note`)}</p>
        <p class="result__text"></p>
        <button class="result__replay" type="button">${content.buttons.replay}</button>
      </section>
    `;
  }

  replayButtonClickHandler() {}

  showStats(results) {
    const stats = this.element.querySelector(`.result__text`);
    stats.textContent = showResults(results, this.result);
  }

  bind() {
    this.element.querySelector(`.result__replay`).addEventListener(`click`, () => {
      this.replayButtonClickHandler();
    });
  }

}
