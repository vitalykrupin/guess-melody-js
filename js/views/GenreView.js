import {playerGenre} from '../screens/player';
import AbstractView from '../views/AbstractView';
import content from '../data/game-content';

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
        <section class="game__screen">
          <h2 class="game__title">${this.questions.question}</h2>
          <form class="game__tracks">
            ${[...Object.entries(this.questions.answers)]
              .map(([id, answer]) =>{
                return `
                  ${playerGenre(answer.song.src)}
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
    const playerButtons = Array.from(form.querySelectorAll(`.track__button`));
    const audio = Array.from(form.querySelectorAll(`audio`));
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

    playerButtons[0].classList.replace(`track__button--play`, `track__button--pause`);
    audio[0].setAttribute(`autoplay`, true);

    const pauseAudio = (element) => {
      element.querySelector(`audio`).pause();
    };

    const playAudio = (element) => {
      element.querySelector(`audio`).play();
    };

    const playAudioHandler = (evt) => {
      if (evt.target.classList.contains(`track__button--play`)) {
        evt.target.classList.replace(`track__button--play`, `track__button--pause`);
        playAudio(evt.target.nextElementSibling);
      } else {
        evt.target.classList.replace(`track__button--pause`, `track__button--play`);
        pauseAudio(evt.target.nextElementSibling);
      }
    };

    playerButtons.forEach((item) => {
      item.addEventListener(`click`, playAudioHandler);
    });

    this.element.addEventListener(`click`, (evt) => {
      if (evt.target.classList.contains(`game__back`) || evt.target.classList.contains(`game__logo`)) {
        evt.preventDefault();
        this.replayButtonClickHandler();
      }
    });

  }
}
