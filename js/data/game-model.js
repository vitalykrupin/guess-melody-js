import {InitialState, MAX_QUESTIONS} from './game-data';

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
    this._state = Object.assign({}, InitialState, {answersArr: []});
  }

  fail() {
    return this._state.lives === 0 || this._state.time <= 0;
  }

  win() {
    return this._state.answersArr.length === MAX_QUESTIONS;
  }

  getAnswers(answer) {
    const correct = Object.keys(this.screenQuestion().answers).every((key) => this.screenQuestion().answers[key].correct === answer.includes(key));
    if (!correct) {
      this._state.lives--;
    }
    this._state.answersArr.push({correct, time: InitialState.time - this._state.time});
  }

  tick() {
    this._state.time--;
  }
}
