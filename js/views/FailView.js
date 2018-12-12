import content from '../data/game-content';
import {calculatePoints} from '../data/calc-points';
import {showResults} from '../data/show-results';
import AbstractView from '../views/AbstractView';

export default class FailView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    const {points} = calculatePoints(this.state);
    this.points = points;
    this.result = {
      UserPoint: points,
      time: state.time,
      lives: state.lives
    };
    this.results = [10, 5, 6, 7];
    this.replic = state.lives < 0 ? `${content.result.loseReplic}` : `${content.result.timeLoseReplic}`;
  }

  get template() {
    return `
      <section class="result">
        <div class="result__logo"><img src="img/melody-logo.png" alt="${content.header.logo}" width="186" height="83"></div>
        <h2 class="result__title">${this.replic}</h2>
        <p class="result__total result__total--fail">${showResults(this.results, this.result)}</p>
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
