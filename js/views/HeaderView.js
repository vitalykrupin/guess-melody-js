import AbstractView from './AbstractView';
import content from '../data/game-content';
import {InitialState} from '../data/game-data';

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.min = Math.floor(this.state.time / 60);
    this.sec = Math.floor(this.state.time % 60);
  }

  get template() {
    return `
      <header class="game__header">
        <a class="game__back" href="#">
          <span class="visually-hidden">${content.buttons.replay}</span>
          <img class="game__logo" src="img/melody-logo-ginger.png" alt="${content.header.logo}">
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
          <circle class="timer__line" cx="390" cy="390" r="370"
              style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
        </svg>
        <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer__mins">0${this.min}</span>
          <span class="timer__dots">:</span>
          <span class="timer__secs">${(this.sec < 10) ? `0${this.sec}` : this.sec}</span>
        </div>
        <div class="game__mistakes">
          ${new Array(InitialState.lives - this.state.lives)
          .fill(`<div class="wrong"></div>`)
          .join(``)}
        </div>
      </header>
    `;
  }
}
