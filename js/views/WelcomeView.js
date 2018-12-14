import content from '../data/game-content';
import AbstractView from '../views/AbstractView';

export default class WelcomeView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
      <section class="welcome">
        <div class="welcome__logo"><img src="img/melody-logo.png" alt="${content.header.logo}" width="186" height="83"></div>
        <button class="welcome__button" disabled><span class="visually-hidden">${content.buttons.play}</span></button>
        <h2 class="welcome__rules-title">${content.welcome.title}</h2>
        <p class="welcome__text">${content.welcome.rulesTitle}</p>
        <ul class="welcome__rules-list">
          <li>${content.welcome.ruleOne}</li>
          <li>${content.welcome.ruleTwo}</li>
        </ul>
        <p class="welcome__text">${content.welcome.text}</p>
      </section>
    `;
  }

  play() {
    this.element.querySelector(`.welcome__button`).removeAttribute(`disabled`);
  }

  playButtonClickHandler() {}

  bind() {
    const playButton = this.element.querySelector(`.welcome__button`);

    playButton.addEventListener(`click`, () => {
      this.playButtonClickHandler();
    });
  }
}
