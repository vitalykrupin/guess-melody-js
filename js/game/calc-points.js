import {MAX_QUESTIONS, Time} from '../data/game-data';

const Points = {
  LOOSE: -1,
  DEFAULT: 1,
  FAST: 2,
  WRONG: -2
};

export const calculatePoints = (state) => {
  let points = 0;
  let pointFast = 0;
  if (state.answers.length < MAX_QUESTIONS) {
    return Points.LOOSE;
  }
  state.answers.forEach((answer) => {
    if (answer.correct) {
      points += answer.time >= Time.FAST ? Points.DEFAULT : Points.FAST;
      pointFast += answer.time >= Time.FAST ? 0 : Points.FAST;
    } else {
      points += Points.WRONG;
      pointFast += pointFast > 0 ? Points.WRONG : 0;
    }
  });

  return {points, pointFast};
};
