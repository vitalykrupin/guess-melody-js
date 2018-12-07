import {playerGenre} from '../screens/player';
import AbstractView from '../views/AbstractView';
import string from '../data/string-data';
import header from '../screens/header';

const DEBUG = true;
const DEBUG_STYLE = `style="border:1px solid red;"`;

export default class GenreView extends AbstractView {

  constructor(state, questions) {
    super();
    this.state = state;
    this.questions = questions;
  }

  get template() {
    return `
      <section class="game game--genre">
        ${header(this.state)}
        <section class="game__screen">
          <h2 class="game__title">${this.questions.question}</h2>
          <form class="game__tracks">
            ${[...Object.entries(this.questions.answers)]
              .map(([id, answer]) => {
                return `
                  ${playerGenre(answer.song.src)}
                  <div class="game__answer">
                    <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="${id}">
                    <label class="game__check" ${DEBUG && answer.correct ? DEBUG_STYLE : ``} for="${id}">Отметить</label>
                  </div>
                `;
              })
              .join(` `)}
            <button class="game__submit button" type="submit">${string.buttons.answerSend}</button>
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
    answerButton.disabled = true;

    const answersChangeHandler = () => {
      if (answers.some((element) => element.checked)) {
        answerButton.disabled = false;
      } else {
        answerButton.disabled = true;
      }
    };

    answers.forEach((item) => {
      item.addEventListener(`change`, answersChangeHandler);
    });

    answerButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const checkedAnswer = answers.filter((input) => input.checked).map((element) => element.id);
      this.answerButtonClickHandler(checkedAnswer);
    });

    const players = Array.from(this.element.querySelectorAll(`div.track`));
    const playerButtons = players.map((element) => element.querySelector(`.track__button`));
    const audio = Array.from(this.element.querySelectorAll(`audio`));

    const playAudio = (evt) => {
      if (audio.paused) {
        evt.target.classList.replace(`track__button--play`, `track__button--pause`);
        audio.play();
      } else {
        evt.target.classList.replace(`track__button--pause`, `track__button--play`);
        audio.pause();
      }
    };

    playerButtons.forEach((item) => {
      item.addEventListener(`click`, playAudio);
    });

    this.element.querySelector(`.game__back`).addEventListener(`click`, () => {
      this.replayButtonClickHandler();
    });
  }
}
