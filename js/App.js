import WelcomeScreen from './screens/welcome-screen';
import GameModel from './data/game-model';
import GameScreen from './screens/game-screen';
import ResultScreen from './screens/result-screen';


export default class App {

  static _showScreen(element) {
    const mainScreen = document.querySelector(`.main`);
    mainScreen.parentNode.replaceChild(element, mainScreen);
  }

  static showWelcome() {
    const welcome = new WelcomeScreen();
    this._showScreen(welcome.element);
  }

  static showGame() {
    const gameScreen = new GameScreen(new GameModel());
    this._showScreen(gameScreen.element);
    gameScreen.startGame();
  }

  static showStats(screenType, stats) {
    const resultScreen = new ResultScreen(screenType, stats);
    this._showScreen(resultScreen.element);
  }
}
