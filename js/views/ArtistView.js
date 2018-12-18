import {getArtistPlayer, playTrack} from '../screens/player';
import {DEBUG, DEBUG_STYLE} from '../utils';
import AbstractView from '../views/AbstractView';

export default class ArtistView extends AbstractView {
  constructor(state, questions) {
    super();
    this.state = state;
    this.questions = questions;
  }

  get template() {
    return `
      <section class="game game--artist">
        <section class="game__screen">
          <h2 class="game__title">${this.questions.question}</h2>
          ${getArtistPlayer(this.questions.src)}
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
    const answers = Array.from(form.querySelectorAll(`.artist__input`));
    const tracks = Array.from(this.element.querySelectorAll(`.game__track`));

    answers.forEach((item) => {
      item.addEventListener(`click`, () => {
        const checkedAnswer = answers.filter((input) => input.checked).map((element) => element.value);
        this.answerButtonClickHandler(checkedAnswer);
      });
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
