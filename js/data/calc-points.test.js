import {assert} from 'chai';
import {calculatePoints} from './calc-points';

describe(`Calculate Points`, () => {
  it(`should return -1 when answers < 10`, () => {
    assert.equal(calculatePoints({answersArr: [
      {correct: true, time: 30},
      {correct: true, time: 30},
      {correct: true, time: 30}
    ]}), -1);
  });

  it(`should return {points: 12, pointFast: 16} when 8 answers are correct and time of correct answer < 30 seconds`, () => {
    assert.deepEqual(calculatePoints({answersArr: [
      {correct: true, time: 26},
      {correct: true, time: 17},
      {correct: true, time: 25},
      {correct: true, time: 10},
      {correct: true, time: 12},
      {correct: true, time: 14},
      {correct: true, time: 15},
      {correct: true, time: 17},
      {correct: false, time: 30},
      {correct: false, time: 30}
    ]}), {points: 12, pointFast: 16});
  });

  it(`should return 1 when 7 answers are correct and time of correct answer > 30 seconds`, () => {
    assert.deepEqual(calculatePoints({answersArr: [
      {correct: true, time: 36},
      {correct: true, time: 37},
      {correct: true, time: 35},
      {correct: true, time: 40},
      {correct: true, time: 32},
      {correct: true, time: 34},
      {correct: true, time: 35},
      {correct: false, time: 17},
      {correct: false, time: 30},
      {correct: false, time: 30}
    ]}), {points: 1, pointFast: 0});
  });

  it(`should return 10 if all answers are correct and time > 30 seconds`, () => {
    assert.deepEqual(calculatePoints({answersArr: [
      {correct: true, time: 36},
      {correct: true, time: 37},
      {correct: true, time: 35},
      {correct: true, time: 40},
      {correct: true, time: 32},
      {correct: true, time: 34},
      {correct: true, time: 35},
      {correct: true, time: 37},
      {correct: true, time: 33},
      {correct: true, time: 33}
    ]}), {points: 10, pointFast: 0});
  });

  it(`should return 20 if all answers are correct and time < 30 seconds`, () => {
    assert.deepEqual(calculatePoints({answersArr: [
      {correct: true, time: 26},
      {correct: true, time: 17},
      {correct: true, time: 25},
      {correct: true, time: 10},
      {correct: true, time: 12},
      {correct: true, time: 14},
      {correct: true, time: 15},
      {correct: true, time: 17},
      {correct: true, time: 27},
      {correct: true, time: 26}
    ]}), {points: 20, pointFast: 20});
  });

  it(`should return -20 if all answers are not correct`, () => {
    assert.deepEqual(calculatePoints({answersArr: [
      {correct: false, time: 26},
      {correct: false, time: 17},
      {correct: false, time: 25},
      {correct: false, time: 10},
      {correct: false, time: 12},
      {correct: false, time: 14},
      {correct: false, time: 15},
      {correct: false, time: 17},
      {correct: false, time: 27},
      {correct: false, time: 26}
    ]}), {points: -20, pointFast: 0});
  });
});
