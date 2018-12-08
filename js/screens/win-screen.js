import {showScreen} from '../utils';
import welcomeScreen from './welcome-screen';
import {initialState} from '../data/game-data';
import WinView from '../views/WinView';

export default (state) => {
  const screen = new WinView(state);

  screen.replayButtonClickHandler = () => {
    showScreen(welcomeScreen(initialState));
  };

  return screen.element;
};
