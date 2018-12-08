import data from '../data/data';
import AbstractView from '../views/AbstractView';

export default class WelcomeView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
      <section class="welcome">
        <div class="welcome__logo"><img src="img/melody-logo.png" alt="${data.header.logo}" width="186" height="83"></div>
        <button class="welcome__button"><span class="visually-hidden">${data.buttons.play}</span></button>
        <h2 class="welcome__rules-title">${data.welcome.title}</h2>
        <p class="welcome__text">${data.welcome.rulesTitle}</p>
        <ul class="welcome__rules-list">
          <li>${data.welcome.ruleOne}</li>
          <li>${data.welcome.ruleTwo}</li>
        </ul>
        <p class="welcome__text">${data.welcome.welcomText}</p>
      </section>
    `;
  }

  playButtonClickHandler() {}

  bind() {
    const playButton = this.element.querySelector(`.welcome__button`);

    playButton.addEventListener(`click`, () => {
      this.playButtonClickHandler();
    });
  }
}
