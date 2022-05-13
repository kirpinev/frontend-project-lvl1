import {
  getPlayerName,
  getProgression,
  getProgressionAnswer,
  greeting,
  playRounds,
  showRules,
} from "../index.js";

const brainProgressionGame = () => {
  greeting();

  const playerName = getPlayerName();

  showRules(playerName, "What number is missing in the progression?");

  playRounds({
    randomQuestionFunc: getProgression,
    correctAnswerFunc: getProgressionAnswer,
    playerName,
  });
};

export default brainProgressionGame;
