import {
  getPlayerName,
  getRandomExpression,
  getRandomExpressionAnswer,
  greeting,
  playRounds,
  showRules,
} from '../index.js';

export const brainCalcGame = () => {
  greeting();

  const playerName = getPlayerName();

  showRules(playerName, 'What is the result of the expression?');

  playRounds({
    randomQuestionFunc: getRandomExpression,
    correctAnswerFunc: getRandomExpressionAnswer,
    playerName,
  });
};

export default brainCalcGame;
