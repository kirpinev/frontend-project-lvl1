import {
  getPlayerName,
  getPrimeNumberAnswer,
  getRandomNumber,
  greeting,
  playRounds,
  showRules,
} from '../index.js';

const brainPrimeGame = () => {
  greeting();

  const playerName = getPlayerName();

  showRules(
    playerName,
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  );

  playRounds({
    randomQuestionFunc: getRandomNumber,
    correctAnswerFunc: getPrimeNumberAnswer,
    playerName,
  });
};

export default brainPrimeGame;
