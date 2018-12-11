import {showScreen} from '../utils';
import welcomeScreen from './welcome-screen';
import {InitialState} from '../data/game-data';
import FailView from '../views/FailView';

export default (state) => {
  const screen = new FailView(state);

  screen.replayButtonClickHandler = () => {
    showScreen(welcomeScreen(InitialState));
  };

  return screen.element;
};
