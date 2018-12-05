import {renderScreen} from './utils';
import WelcomePresenter from './presenters/WelcomePresenter';
import GamePresenter from './presenters/GamePresenter';
import GameModel from './GameModel';
import ResultsPresenter from './presenters/ResultsPresenter';

export default class App {

  static showWelcomeScreen() {
    const welcomePresenter = new WelcomePresenter(App.showGameScreen);
    renderScreen(welcomePresenter.element);
  }

  static showGameScreen() {
    const gameModel = new GameModel();
    const gamePresenter = new GamePresenter(gameModel);
    gamePresenter.showWelcome = App.showWelcomeScreen;
    gamePresenter.showResults = App.showResultsScreen;
    renderScreen(gamePresenter.element);
    gamePresenter.startGame();
  }

  static showResultsScreen(model) {
    const resultsPresenter = new ResultsPresenter(model);
    renderScreen(resultsPresenter.element);
  }
}
