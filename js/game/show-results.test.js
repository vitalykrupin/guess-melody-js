import {assert} from 'chai';
import {showResults} from './show-results';

const statistics = [
  {
    userPoint: 10,
    lives: 2,
    time: 45
  },
  {
    userPoint: 4,
    lives: 2,
    time: 90
  },
  {
    userPoint: 8,
    lives: 1,
    time: 7
  },
  {
    userPoint: 9,
    lives: 1,
    time: 55
  }
];

const getGameResult = (userPoints, userLives, userTime) => ({
  userPoint: userPoints,
  lives: userLives,
  time: userTime
});

describe(`Show results`, () => {
  it(`should return Время вышло! Вы не успели отгадать все мелодии`, () => {
    assert.equal(showResults(statistics, getGameResult(10, 2, 300)), `Время вышло! Вы не успели отгадать все мелодии`);
  });

  it(`should return У вас закончились все попытки. Ничего, повезёт в следующий раз!`, () => {
    assert.equal(showResults(statistics, getGameResult(10, 0, 45)), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });

  it(`should return Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков`, () => {
    assert.equal(showResults(statistics, getGameResult(20, 3, 140)), `Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков`);
  });

  it(`should return Вы заняли 4 место из 5 игроков. Это лучше, чем у 20% игроков`, () => {
    assert.equal(showResults(statistics, getGameResult(7, 2, 140)), `Вы заняли 4 место из 5 игроков. Это лучше, чем у 20% игроков`);
  });

  it(`should return Вы заняли 5 место из 5 игроков. Это лучше, чем у 0% игроков`, () => {
    assert.equal(showResults(statistics, getGameResult(3, 2, 140)), `Вы заняли 5 место из 5 игроков. Это лучше, чем у 0% игроков`);
  });
});
