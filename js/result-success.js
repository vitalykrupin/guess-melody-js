import {getElementFromTemplate, renderScreen, showStats, getFastPoints, getScorePoints} from './utils';
import getWelcomeScreenElement from './welcome';

const getTemplate = (state) => `
  <section class="result">
      <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
      <h2 class="result__title">Вы настоящий меломан!</h2>
      <p class="result__total">За 3 минуты и 25 секунд вы набрали ${getScorePoints(state.answers)} баллов (${getFastPoints(state.answers)} быстрых), совершив ${state.mistake} ошибки</p>
      <p class="result__text">${showStats(state)}</p>
      <button class="result__replay" type="button">Сыграть ещё раз</button>
    </section>
`;

export default (state) => {
  const element = getElementFromTemplate(getTemplate(state));
  const backButton = element.querySelector(`.result__replay`);
  backButton.addEventListener(`click`, () => renderScreen(getWelcomeScreenElement()));

  return element;
};
