import {InitialState} from '../data/game-data';

const getScreenQuestion = (state) => state.questions[state.level];

export default class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return this._state;
  }

  screenQuestion() {
    return getScreenQuestion(this._state);
  }

  changeLevel() {
    return this._state.level++;
  }

  restart() {
    this._state = Object.assign({}, InitialState, {answers: []});
  }

  fail() {
    return this._state.lives === 0 || this._state.time <= 0;
  }

  win() {
    return this._state.answers.length === this._state.questions.length;
  }

  getAnswerTime() {
    return InitialState.time - this._state.time;
  }

  getAnswers(answer) {
    const correct = Object.keys(this.screenQuestion().answers).every((key) => this.screenQuestion().answers[key].correct === answer.includes(key));
    if (!correct) {
      this._state.lives--;
    }
    this._state.answers.push({correct, time: this.getAnswerTime()});
  }

  tick() {
    this._state.time--;
  }
}
