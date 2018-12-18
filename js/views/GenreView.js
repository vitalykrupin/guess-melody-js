import {getGenrePlayer, playTrack} from '../screens/player';
import {DEBUG, DEBUG_STYLE} from '../utils';
import AbstractView from '../views/AbstractView';
import content from '../data/game-content';

export default class GenreView extends AbstractView {
  constructor(state, questions) {
    super();
    this.state = state;
    this.questions = questions;
  }

  get template() {
    return `
      <section class="game game--genre">
        <section class="game__screen">
          <h2 class="game__title">${this.questions.question}</h2>
          <form class="game__tracks">
            ${[...Object.entries(this.questions.answers)]
              .map(([id, answer]) => {
                return `
                  ${getGenrePlayer(answer.song.src)}
                  <div class="game__answer">
                    <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="${id}">
                    <label class="game__check" ${DEBUG && answer.correct ? DEBUG_STYLE : ``} for="${id}">Отметить</label>
                  </div>
                  </div>
                `;
              })
              .join(` `)}
            <button class="game__submit button" type="submit">${content.buttons.answerSend}</button>
          </form>
        </section>
      </section>
    `;
  }

  answerButtonClickHandler() {}

  replayButtonClickHandler() {}

  bind() {
    const form = this.element.querySelector(`.game__tracks`);
    const answers = Array.from(form.querySelectorAll(`input`));
    const answerButton = form.querySelector(`.game__submit`);
    const tracks = Array.from(this.element.querySelectorAll(`.track`));

    answerButton.disabled = true;

    const answersChangeHandler = () => {
      answerButton.disabled = !answers.some((element) => element.checked);
    };

    answers.forEach((item) => {
      item.addEventListener(`change`, answersChangeHandler);
    });

    answerButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const checkedAnswer = answers.filter((input) => input.checked).map((element) => element.id);
      this.answerButtonClickHandler(checkedAnswer);
    });

    playTrack(tracks);

    this.element.addEventListener(`click`, (evt) => {
      if (evt.target.classList.contains(`game__back`) || evt.target.classList.contains(`game__logo`)) {
        evt.preventDefault();
        this.replayButtonClickHandler();
      }
    });

  }
}
