import {
  getPlayerName,
  getRandomTwoNumbers,
  getRandomTwoNumbersAnswer,
  greeting,
  playRounds,
  showRules,
} from '../index.js';

const brainGcdGame = () => {
  greeting();

  const playerName = getPlayerName();

  showRules(playerName, 'Find the greatest common divisor of given numbers.');

  playRounds({
    randomQuestionFunc: getRandomTwoNumbers,
    correctAnswerFunc: getRandomTwoNumbersAnswer,
    playerName,
  });
};

export default brainGcdGame;
