import {showScreen} from './utils';
import WelcomeScreen from './screens/welcome-screen';
import GameScreen from './screens/game-screen';
import GameModel from './game/GameModel';
import ErrorView from './views/ErrorView';
import {InitialState, Time} from './data/game-data';
import Loader from './Loader';

export default class App {

  static start() {
    App.showWelcome();
    Loader.loadData().
      then((data) => App.startGame(data)).
      catch(App.showError);
  }

  static showWelcome() {
    const welcomeScreen = new WelcomeScreen();
    showScreen(welcomeScreen.element);
    return welcomeScreen;
  }

  static showGame() {
    const screen = new GameScreen(new GameModel());
    showScreen(screen.element);
  }

  static showResult(result) {
    result.replayButtonClickHandler = () => {
      this.showGame();
    };
    if (result.result.lives > 0 && result.result.time < Time.MAX) {
      Loader.loadResults().
          then((data) => {
            showScreen(result.element);
            result.showStats(data);
          }).
          then(() => Loader.saveResults(result.result)).
          catch(App.showError);
    } else {
      showScreen(result.element);
    }
  }

  static showError(error) {
    const errorView = new ErrorView(error);
    errorView.showModal();
  }

  static startGame(data) {
    data.forEach((el) => InitialState.questions.push(el));
    App.showWelcome().screen.play();
  }
}
