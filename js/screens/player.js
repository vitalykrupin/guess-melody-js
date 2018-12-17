export const getGenrePlayer = (src) => `
  <div class="track">
    <button class="track__button track__button--play" type="button"></button>
    <div class="track__status">
    <audio src="${src}" preload="auto"></audio>
  </div>
`;

export const getArtistPlayer = (src) => `
  <div class="game__track">
    <button class="track__button track__button--play" type="button"></button>
    <audio src="${src}" preload="auto"></audio>
  </div>
`;

export const playTrack = (tracks) => {
  const audios = Array.from(tracks.map((item) => item.querySelector(`audio`)));
  const buttons = Array.from(tracks.map((item) => item.querySelector(`button`)));

  const stopAll = () => {
    buttons.forEach((button, index) => {
      if (button.classList.contains(`track__button--pause`)) {
        stopAudio(index);
      }
    });
  };

  const stopAudio = (index) => {
    buttons[index].classList.replace(`track__button--pause`, `track__button--play`);
    audios[index].pause();
  };

  const playAudio = (index) => {
    buttons[index].classList.replace(`track__button--play`, `track__button--pause`);
    audios[index].play();
  };

  buttons[0].classList.replace(`track__button--play`, `track__button--pause`);
  audios[0].setAttribute(`autoplay`, true);

  const playAudioHandler = (evt, index) => {
    if (evt.target.classList.contains(`track__button--play`)) {
      stopAll();
      playAudio(index);
    } else {
      stopAudio(index);
    }
  };

  buttons.forEach((item, index) => {
    item.addEventListener(`click`, (evt) => playAudioHandler(evt, index));
  });
};
