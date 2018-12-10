import {showScreen} from './utils';
import WelcomeScreen from './screens/welcome-screen';
import GameScreen from './screens/game-screen';
import GameModel from './data/game-model';
import {initialState} from './data/game-data';
import ErrorView from './views/ErrorView';
import adaptServerData from './data/data-adapter';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const GET_URL = `https://es.dump.academy/guess-melody/questions`;


export default class App {

  static start() {
    App.showWelcome();
    fetch(GET_URL).
      then(checkStatus).
      then((response) => response.json()).
      then((data) => adaptServerData(data)).
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
    showScreen(result.element);
  }

  static showError(error) {
    const errorView = new ErrorView(error);
    errorView.showModal();
  }

  static startGame(data) {
    data.forEach((el) => initialState.questions.push(el));
    App.showWelcome().screen.play();
  }
}
