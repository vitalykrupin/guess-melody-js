import AbstractView from './AbstractView';
import content from '../data/game-content';
import {InitialState} from '../data/game-data';
import {getRadius} from '../game/get-radius';

const FINISHED = 30;
const RADIUS = 370;
const SIXTY_SEC = 60;
const TEN_SEC = 10;

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.min = Math.floor(this.state.time / SIXTY_SEC);
    this.sec = Math.floor(this.state.time % SIXTY_SEC);
    this.line = getRadius(RADIUS, this.state.time);
  }

  get template() {
    return `
      <header class="game__header">
        <a class="game__back" href="#">
          <span class="visually-hidden">${content.buttons.replay}</span>
          <img class="game__logo" src="img/melody-logo-ginger.png" alt="${content.header.logo}">
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
          <circle class="timer__line" cx="390" cy="390" r="${RADIUS}"
                  style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"
                  stroke-dasharray="${this.line.stroke}" stroke-dashoffset="${this.line.offset}"/>
        </svg>
        <div class="timer__value ${this.state.time < FINISHED ? `timer__value--finished` : ``}" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer__mins">0${this.min}</span>
          <span class="timer__dots">:</span>
          <span class="timer__secs">${(this.sec < TEN_SEC) ? `0${this.sec}` : this.sec}</span>
        </div>
        <div class="game__mistakes">
          ${`<div class="wrong"></div>`.repeat(InitialState.lives - this.state.lives)}
        </div>
      </header>
    `;
  }
}
