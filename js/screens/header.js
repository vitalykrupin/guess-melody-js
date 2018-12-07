import string from '../data/string-data';
import {initialState} from '../data/game-data';

export const getMin = (time) => {
  const result = Math.floor(time / 60);
  return result < 10 ? `0` + result : result;
};

export const getSec = (time)=> {
  const result = Math.floor(time % 60);
  return result < 10 ? `0` + result : result;
};

export default (state) => `
  <header class="game__header">
    <a class="game__back" href="#">
      <span class="visually-hidden">${string.buttons.replay}</span>
      <img class="game__logo" src="img/melody-logo-ginger.png" alt="${string.header.logo}">
    </a>
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle class="timer__line" cx="390" cy="390" r="370"
              style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
    </svg>
    <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer__mins">${getMin(state.time)}</span>
      <span class="timer__dots">:</span>
      <span class="timer__secs">${getSec(state.time)}</span>
    </div>
    <div class="game__mistakes">
      ${new Array(initialState.lives - state.lives)
        .fill(`<div class="wrong"></div>`)
        .join(``)}
    </div>
  </header>
`;
