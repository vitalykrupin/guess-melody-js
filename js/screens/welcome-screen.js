import {InitialState} from '../data/game-data';
import WelcomeView from '../views/WelcomeView';
import App from '../App';

export default class WelcomeScreen {
  constructor() {
    this.screen = new WelcomeView(InitialState);
    this.bind();
  }

  get element() {
    return this.screen.element;
  }

  bind() {
    this.screen.playButtonClickHandler = () => App.showGame();
  }
}
