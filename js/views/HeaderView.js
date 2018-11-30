import AbstractView from './AbstractView';
import {getFormatedTime} from '../utils';

const TIME_RED = `style="color: red;"`;

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.time = this.state.time;
  }

  get template() {
    const time = getFormatedTime(this.time);
    const initTime = this.time;
    return `
      <header class="game__header">
        <a class="game__back" href="#">
          <span class="visually-hidden">Сыграть ещё раз</span>
          <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
          <circle class="timer__line" cx="390" cy="390" r="370" style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
        </svg>
        <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span ${initTime <= 30 ? TIME_RED : ``} class="timer__mins">${time.minutes}</span>
          <span ${initTime <= 30 ? TIME_RED : ``} class="timer__dots">:</span>
          <span ${initTime <= 30 ? TIME_RED : ``} class="timer__secs">${time.seconds}</span>
        </div>
        <div class="game__mistakes">
          ${new Array(this.state.notes).fill(`<div class="wrong"></div>`).join(``)}
        </div>
      </header>
    `;
  }

  bind(element) {
    const backButton = element.querySelector(`.game__back`);
    backButton.addEventListener(`click`, this.onBackButtonClick);
  }

  onBackButtonClick() {}
}
