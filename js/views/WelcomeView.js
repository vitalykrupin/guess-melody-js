import AbstractView from './AbstractView';

export default class WelcomeView extends AbstractView {
  constructor(rules) {
    super();
    this.rules = rules;
  }

  get template() {
    return `
      <section class="welcome">
        <div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
        <button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
        <h2 class="welcome__rules-title">Правила игры</h2>
        <p class="welcome__text">Правила просты:</p>
        <ul class="welcome__rules-list">
          ${this.getRulesTemplate}
        </ul>
        <p class="welcome__text">Удачи!</p>
      </section>
    `;
  }

  get getRulesTemplate() {
    return this.rules.map((it) => `<li>${it}</li>`).join(``);
  }

  bind(element) {
    const welcomeButton = element.querySelector(`.welcome__button`);
    welcomeButton.addEventListener(`click`, this.onWelcomeButtonClick);
  }

  onWelcomeButtonClick() {}
}
