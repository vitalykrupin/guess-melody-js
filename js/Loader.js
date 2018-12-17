import adaptServerData from './data/data-converter';

const URL = `https://es.dump.academy/guess-melody`;

const APP_ID = 319049;
const Statuses = {
  SUCCESS: 200,
  MULTIPLE_CHOICES: 300
};

const checkStatus = (response) => {
  if (response.status >= Statuses.SUCCESS && response.status < Statuses.MULTIPLE_CHOICES) {
    return response;
  }
  throw new Error(`${response.status}: ${response.statusText}`);
};

const toJSON = (res) => res.json();

export default class Loader {

  static loadData() {
    return fetch(`${URL}/questions`)
      .then(checkStatus)
      .then(toJSON)
      .then(adaptServerData);
  }

  static loadResults() {
    return fetch(`${URL}/stats/${APP_ID}`)
      .then(checkStatus)
      .then(toJSON);
  }

  static saveResults(data) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${URL}/stats/${APP_ID}`, requestSettings)
      .then(checkStatus);
  }
}
