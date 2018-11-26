import {getElementFromTemplate, renderScreen, checkAnswerCorrect, setAnswerTime, renderNextScreen} from './utils';
import {MAX_QUESTIONS} from './constants';
import getSuccessScreenElement from './result-success';
import getHeaderElement from './header';
import controller from './controller';

const getTemplate = (question) => `
    <section class="game game--genre">
      <section class="game__screen">
        <h2 class="game__title">${question.title}</h2>
        <form class="game__tracks">
          ${question.questions.map((it) => `
          <div class="track">
            <button class="track__button track__button--play" type="button"></button>
            <div class="track__status">
              <audio src="${it.src}"></audio>
            </div>
            <div class="game__answer">
              <input class="game__input visually-hidden" type="checkbox" name="answer" value="${it.genre}" id="answer-${it.src}">
              <label class="game__check" for="answer-${it.src}">Отметить</label>
            </div>
          </div>
          `).join(``)}
          <button class="game__submit button" type="submit" disabled>Ответить</button>
        </form>
      </section>
    </section>
  `;

export default (question) => {
  const element = getElementFromTemplate(getTemplate(question));
  element.insertAdjacentElement(`afterbegin`, getHeaderElement());
  const form = element.querySelector(`.game__tracks`);

  form.addEventListener(`click`, (evt) => {
    const trackControl = evt.target;
    if (trackControl.classList.contains(`track__button`)) {
      const trackEl = trackControl.closest(`.track`);
      const audioEl = trackEl.querySelector(`audio`);
      if (audioEl.paused) {
        audioEl.play();
        trackControl.classList.add(`track__button--pause`);
      } else {
        audioEl.pause();
        trackControl.classList.remove(`track__button--pause`);
      }
    }
  });

  const submitButton = element.querySelector(`.game__submit`);
  submitButton.addEventListener(`click`, () => {
    const answerEls = [...form.elements.answer];
    if (controller.state.answers.length < MAX_QUESTIONS) {
      const currentAnswer = checkAnswerCorrect(answerEls, question.answer);

      controller.state.answers.push({
        correct: currentAnswer,
        time: setAnswerTime()
      });

      if (!currentAnswer) {
        controller.state.mistake += 1;
      }

      renderNextScreen();
      submitButton.disabled = true;
      form.reset();
    } else {
      renderScreen(getSuccessScreenElement(controller.state));
      form.reset();
    }
  });

  const answers = Array.from(element.querySelectorAll(`input`));
  form.addEventListener(`change`, () => {
    submitButton.disabled = !answers.some((answer) => answer.checked);
  });

  return element;
};
