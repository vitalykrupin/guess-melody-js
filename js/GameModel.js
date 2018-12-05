import {levels} from './data/data';

const MAX_QUESTIONS = 10;

const initialGameState = Object.freeze({
  level: 1,
  notes: 0,
  time: 300,
  points: 0,
  fastPoints: 0,
  timeline: [],
  answers: [],
  levels
});

export default class GameModel {
  constructor() {
    this.resetState();
  }

  getCurrentLevel() {
    return this._state.levels[this._state.level];
  }

  getLevelType() {
    return this._state.levels[this._state.level].type;
  }

  resetState() {
    this._state = Object.assign({}, initialGameState);
  }

  hasNextLevel() {
    return this._state.notes < 3 && this._state.time > 0 && this._state.level <= MAX_QUESTIONS;
  }

  tick() {
    this._state.time -= 1;
  }

  get state() {
    return this._state;
  }

  answer(isCorrect) {
    let timeline = this._state.timeline;
    let answer;

    if (this._state.answers.length === 0) {
      answer = {isCorrect, time: initialGameState.time - this._state.time};
    } else {
      answer = {isCorrect, time: timeline[timeline.length - 1] - this._state.time};
    }

    if (isCorrect && answer.time < 30) {
      this._state.points = this._state.points + 2;
      this._state.fastPoints++;
    } else if (isCorrect && answer.time >= 30) {
      this._state.points++;
    } else if (!isCorrect) {
      this._state.points = this._state.points - 2;
    }

    this._state.answers.push(answer);
    timeline.push(this._state.time);
    this._state.level += 1;
    if (!isCorrect) {
      this.state.notes += 1;
    }
  }
}
