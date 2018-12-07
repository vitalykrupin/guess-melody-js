import {playerArtist} from '../screens/player';
import AbstractView from '../views/AbstractView';
import header from '../screens/header';

const DEBUG = true;
const DEBUG_STYLE = `style="color:red;"`;

export default class ArtistView extends AbstractView {

  constructor(state, questions) {
    super();
    this.state = state;
    this.questions = questions;
  }

  get template() {
    return `
      <section class="game game--artist">
      ${header(this.state)}
        <section class="game__screen">
          <h2 class="game__title">${this.questions.question}</h2>
          ${playerArtist(this.questions.src)}
          <form class="game__artist">
            ${[...Object.entries(this.questions.answers)]
              .map(([value, answer], i) => {
                return `
                  <div class="artist">
                    <input class="artist__input visually-hidden" type="radio" name="answer" value="${value}" id="answer-${i + 1}">
                    <label class="artist__name" ${DEBUG && answer.correct ? DEBUG_STYLE : ``} for="answer-${i + 1}">
                      <img class="artist__picture" src="${answer.song.image}" alt="${answer.song.name}">
                        ${answer.song.name}
                    </label>
                  </div>
                `;
              })
              .join(``)}
          </form>
        </section>
      </section>
    `;
  }

  answerButtonClickHandler() {}

  replayButtonClickHandler() {}

  bind() {
    const form = this.element.querySelector(`.game__artist`);
    const answerButton = Array.from(form.querySelectorAll(`.artist__input`));

    answerButton.forEach((item) => {
      item.addEventListener(`click`, () => {
        const checkedAnswer = answerButton.filter((input) => input.checked).map((element) => element.value);
        this.answerButtonClickHandler(checkedAnswer);
      });
    });

    const playerButton = this.element.querySelector(`.track__button`);
    const audio = this.element.querySelector(`audio`);

    const playAudio = () => {
      if (audio.paused) {
        playerButton.classList.replace(`track__button--play`, `track__button--pause`);
        audio.play();
      } else {
        playerButton.classList.replace(`track__button--pause`, `track__button--play`);
        audio.pause();
      }
    };
    playerButton.addEventListener(`click`, playAudio);

    this.element.querySelector(`.game__back`).addEventListener(`click`, () => {
      this.replayButtonClickHandler();
    });
  }
}
