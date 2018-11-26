import {questions} from './data/data';
import {InitialState} from './constants';

export default {
  state: {},
  reset() {
    this.state.mistake = InitialState.LIVES - 3;
    this.state.time = InitialState.TIME;
    this.state.answers = [];
    this.state.questions = questions.slice();
  },
  getNextQuestion() {
    return this.state.questions.shift();
  }
};
