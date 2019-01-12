const convertArtistAnswers = (answers: { forEach: (arg0: (item: any, i: any) => void) => void; }): Object => {
  const screenAnswers = {};
  answers.forEach((item: { title: any; image: { url: any; }; isCorrect: any; }, i: any) => {
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

const convertGenreAnswers = (answers: { forEach: (arg0: (item: any, i: any) => void) => void; }, genre: any): Object => {
  const screenAnswers = {};
  answers.forEach((item: { src: any; genre: any; }, i: any) => {
    screenAnswers[`answer-${i}`] = {
      song: {
        src: item.src
      },
      correct: item.genre === genre
    };
  });
  return screenAnswers;
};

export default (data: any) => {
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
