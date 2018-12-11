import {showScreen} from '../utils';
import welcomeScreen from './welcome-screen';
import {InitialState} from '../data/game-data';
import WinView from '../views/WinView';

export default (state) => {
  const screen = new WinView(state);

  screen.replayButtonClickHandler = () => {
    showScreen(welcomeScreen(InitialState));
  };

  return screen.element;
};
