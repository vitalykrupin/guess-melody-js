import {MAX_QUESTIONS, Time} from './game-data';

const Points = {
  LOOSE: -1,
  DEFAULT: 1,
  FAST: 2,
  WRONG: -2
};

export const calculatePoints = (state) => {
  let points = 0;
  let pointFast = 0;
  if (state.answersArr.length < MAX_QUESTIONS) {
    return Points.LOOSE;
  }
  state.answersArr.forEach((answer) => {
    if (answer.correct) {
      points += (answer.time < Time.FAST) ? Points.FAST : Points.DEFAULT;
      pointFast += (answer.time < Time.FAST) ? Points.FAST : 0;
    } else {
      points += Points.WRONG;
    }
  });
  return {points, pointFast};
};
