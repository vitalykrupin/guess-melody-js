import {InitialState} from '../data/game-data';

const getScreenQuestion = (state) => state.questions[state.level];

export default class GameModel {
  state: any

  constructor() {
    this.restart();
  }

  // get state() {
  //   return this.state;
  // }

  screenQuestion() {
    return getScreenQuestion(this.state);
  }

  changeLevel() {
    return this.state.level++;
  }

  restart() {
    this.state = Object.assign({}, InitialState, {answers: []});
  }

  fail() {
    return this.state.lives === 0 || this.state.time <= 0;
  }

  win() {
    return this.state.answers.length === this.state.questions.length;
  }

  getAnswerTime() {
    return InitialState.time - this.state.time;
  }

  getAnswers(answer) {
    const correct = Object.keys(this.screenQuestion().answers).every((key) => this.screenQuestion().answers[key].correct === answer.includes(key));
    if (!correct) {
      this.state.lives--;
    }
    this.state.answers.push({correct, time: this.getAnswerTime()});
  }

  tick() {
    this.state.time--;
  }
}
