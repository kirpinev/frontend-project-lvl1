import {
  getRandomNumber,
  getPlayerName,
  greeting,
  showRules,
  playRounds,
  getRandomNumberAnswer,
} from '../index.js';

const brainEvenGame = () => {
  greeting();

  const playerName = getPlayerName();

  showRules(
    playerName,
    'Answer "yes" if the number is even, otherwise answer "no".',
  );

  playRounds({
    randomQuestionFunc: getRandomNumber,
    correctAnswerFunc: getRandomNumberAnswer,
    playerName,
  });
};

export default brainEvenGame;
