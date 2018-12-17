import content from '../data/game-content';
import {showResults} from '../game/show-results';
import AbstractView from '../views/AbstractView';
import {InitialState} from '../data/game-data';

export default class FailView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;

    this.result = {
      userPoint: null,
      time: InitialState.time - this.state.time,
      lives: this.state.lives
    };
    this.replic = this.state.lives <= 0 ? `${content.result.loseReplic}` : `${content.result.timeLoseReplic}`;
  }

  get template() {
    return `
      <section class="result">
      <div class="result__logo"><img src="img/melody-logo.png" alt="${content.header.logo}" width="186" height="83"></div>
      <h2 class="result__title">${this.replic}</h2>
      <p class="result__total result__total--fail">${showResults([], this.result)}</p>
      <button class="result__replay" type="button">${content.buttons.loseReplay}</button>
      </section>
    `;
  }

  replayButtonClickHandler() {}

  bind() {
    this.element.querySelector(`.result__replay`).addEventListener(`click`, () => {
      this.replayButtonClickHandler();
    });
  }
}
