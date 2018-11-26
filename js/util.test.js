import {assert} from 'chai';
import {showStats} from './utils';

const setGameResults = (playerLives, playerPoints, playerTime) => ({
  lives: playerLives,
  points: playerPoints,
  time: playerTime
});

const statistics = [4, 5, 8, 10, 11];

describe(`Stats`, () => {
  it(`should return Вы заняли 1 место из 6 игроков. Это лучше, чем у 83% игроков.`, () => {
    assert.strictEqual(showStats(setGameResults(3, 20, 100), statistics), `Вы заняли 1 место из 6 игроков. Это лучше, чем у 83% игроков.`);
  });

  it(`should return Время вышло! Вы не успели отгадать все мелодии.`, () => {
    assert.strictEqual(showStats(setGameResults(1, 12, 0), statistics), `Время вышло! Вы не успели отгадать все мелодии`);
  });

  it(`should return У вас закончились все попытки. Ничего, повезёт в следующий раз!`, () => {
    assert.strictEqual(showStats(setGameResults(0, 12, 30), statistics), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });

  it(`should return Вы заняли 7 место из 7 игроков. Это лучше, чем у 0% игроков.`, () => {
    assert.strictEqual(showStats(setGameResults(1, 2, 100), statistics), `Вы заняли 7 место из 7 игроков. Это лучше, чем у 0% игроков.`);
  });
});
