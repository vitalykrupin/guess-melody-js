import {showScreen} from '../utils';
import welcomeScreen from './welcome-screen';
import {initialState} from '../data/game-data';
import FailView from '../views/FailView';

export default (state) => {
  const screen = new FailView(state);

  screen.replayButtonClickHandler = () => {
    showScreen(welcomeScreen(initialState));
  };

  return screen.element;
};
