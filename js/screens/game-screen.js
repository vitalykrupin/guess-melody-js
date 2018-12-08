import {showScreen, getElementFromString} from "../utils";
import ArtistView from "../views/ArtistView";
import GenreView from "../views/GenreView";
import FailView from '../views/FailView';
import WinView from '../views/WinView';
import App from '../App';
import header from '../screens/header';

const ScreenView = {
  artist: ArtistView,
  genre: GenreView
};

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.ONE_SECOND = 1000;
    this.screen = new ScreenView[this.model.screenQuestion().type](this.model.state, this.model.screenQuestion());
    this.bind();
  }

  get element() {
    this.startTimer();
    this.updateHeader();
    return this.screen.element;
  }

  showNextGame() {
    this.model.changeLevel();
    showScreen(new GameScreen(this.model).element);
  }

  updateHeader() {
    const headerNode = getElementFromString(header(this.model.state));
    this.screen.element.replaceChild(headerNode, this.screen.element.firstElementChild);
  }

  startTimer() {
    this.timer = setTimeout(() => {
      this.model.tick();
      this.startTimer();
    }, this.ONE_SECOND);
  }

  stopTimer() {
    clearTimeout(this.timer);
  }

  bind() {
    this.screen.answerButtonClickHandler = (answer) => {
      this.stopTimer();
      this.model.getAnswers(answer);

      if (this.model.fail()) {
        App.showResult(new FailView(this.model.state));
      } else if (this.model.win()) {
        App.showResult(new WinView(this.model.state));
      } else {
        this.showNextGame();
      }
      this.updateHeader();
    };

    this.screen.replayButtonClickHandler = () => {
      App.showWelcome();
    };

  }
}
