export const Time = {
  FAST: 30,
  MAX: 300
};

export const MAX_QUESTIONS = 10;

export const MAX_MISTAKES = 3;

export const InitialState = Object.freeze({
  time: Time.MAX,
  lives: 3,
  questions: [],
  level: 0,
  answers: []
});
