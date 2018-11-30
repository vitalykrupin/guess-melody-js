import AbstractView from './AbstractView';

export default class ArtistView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `
      <section class="game__screen">
        <h2 class="game__title">Кто исполняет эту песню?</h2>
        <div class="game__track">
          <button class="track__button track__button--play" type="button"></button>
          <audio src ="${this.level.audio}" autoplay></audio>
        </div>
          <form class="game__artist">
            ${this.level.answers.map((answer, index) => `
              <div class="artist">
                <input class="artist__input visually-hidden" type="radio" name="answer" value="${answer.correct}" id="answer-${index}">
                  <label class="artist__name" for="answer-${index}">
                    <img class="artist__picture" src="${answer.img}" alt="${answer.artist}">
                      ${answer.artist}
                  </label>
              </div>`).join(``)}
          </form>
      </section>
    `;
  }

  bind(element) {
    const playerButton = element.querySelector(`.track__button`);
    const audio = element.querySelector(`audio`);
    playerButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      if (playerButton.classList.contains(`track__button--pause`)) {
        audio.play();
      } else {
        audio.pause();
      }
      playerButton.classList.toggle(`track__button--pause`);
    });

    const artistButtons = element.querySelectorAll(`.artist`);
    artistButtons.forEach((button) => {
      button.addEventListener(`click`, () => {
        const isCorrect = button.querySelector(`input`).value === `true`;
        this.onAnswerClick(isCorrect);
      });
    });
  }

  onAnswerClick() {}
}
