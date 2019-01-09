const convertArtistAnswers = (answers) => {
  const screenAnswers = {};
  answers.forEach((item, i) => {
    screenAnswers[`artist-${i}`] = {
      song: {
        name: item.title,
        image: item.image.url
      },
      correct: item.isCorrect
    };
  });
  return screenAnswers;
};

const convertGenreAnswers = (answers, genre) => {
  const screenAnswers = {};
  answers.forEach((item, i) => {
    screenAnswers[`answer-${i}`] = {
      song: {
        src: item.src
      },
      correct: item.genre === genre
    };
  });
  return screenAnswers;
};

export default (data) => {
  for (const question of data) {
    question.type = question.type;
    question.title = question.question;
    if (question.type === `artist`) {
      question.answers = convertArtistAnswers(question.answers);
    } else if (question.type === `genre`) {
      question.answers = convertGenreAnswers(question.answers, question.genre);
    }
  }
  return data;
};
