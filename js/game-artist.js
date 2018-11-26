import {getElementFromTemplate, renderScreen, renderNextScreen, checkAnswerCorrect, setAnswerTime} from './utils';
import {MAX_QUESTIONS} from './constants';
import getSuccessScreenElement from './result-success';
import getHeaderElement from './header';
import controller from './controller';


const getTemplate = (question) => `
  <section class="game game--artist">
    <section class="game__screen">
      <h2 class="game__title">${question.title}</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio src="${question.question.src}"></audio>
      </div>
      <form class="game__artist">
        ${question.answers.map((it) => `
          <div class="artist">
            <input class="artist__input visually-hidden" type="radio" name="answer" value="${it.artist}" id="answer-${it.src}">
            <label class="artist__name" for="answer-${it.src}">
              <img class="artist__picture" src="${it.image}" alt="${it.artist}">
              ${it.artist}
            </label>
          </div>
        `).join(``)}
      </form>
    </section>
  </section>
`;

export default (question) => {
  const element = getElementFromTemplate(getTemplate(question));
  element.insertAdjacentElement(`afterbegin`, getHeaderElement());

  const btnPlayMusic = element.querySelector(`.track__button`);
  const audio = element.querySelector(`audio`);
  const form = element.querySelector(`.game__artist`);

  btnPlayMusic.addEventListener(`click`, () => {
    btnPlayMusic.classList.toggle(`track__button--pause`);
    if (btnPlayMusic.classList.contains(`track__button--pause`)) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  form.addEventListener(`change`, () => {
    const answerEls = [...form.elements.answer];
    if (controller.state.answers.length < MAX_QUESTIONS) {
      const currentAnswer = checkAnswerCorrect(answerEls, question.question.artist);
      controller.state.answers.push({
        correct: currentAnswer,
        time: setAnswerTime()
      });

      if (currentAnswer === false) {
        controller.state.mistake += 1;
      }
      renderNextScreen();
      form.reset();
    } else {
      renderScreen(getSuccessScreenElement(controller.state));
      form.reset();
    }
  });

  return element;
};
