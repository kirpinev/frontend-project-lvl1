import readlineSync from "readline-sync";

export const getRandomNumber = (minNumber = 1, maxNumber = 100) =>
  Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

export const getRandomOperator = () => {
  const listOfOperators = ["+", "-", "*"];
  const startOfList = 0;
  const endOfList = listOfOperators.length - 1;
  const randomNumber = getRandomNumber(startOfList, endOfList);

  return listOfOperators[randomNumber];
};

export const greeting = () => {
  console.log("Welcome to the Brain Games!");
};

export const getPlayerName = () =>
  readlineSync.question("May I have your name? ");

export const showRules = (userName, gameRules) => {
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const getPlayerAnswer = () => readlineSync.question("Your answer: ");

export const showResult = (isAllAnswersCorrect, playerName) => {
  if (isAllAnswersCorrect) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export const getRandomNumberAnswer = (randomNumber) =>
  randomNumber % 2 === 0 ? "yes" : "no";

export const getRandomExpression = () => {
  const randomNumberOne = getRandomNumber();
  const randomNumberTwo = getRandomNumber();
  const randomOperator = getRandomOperator();

  return `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
};

export const getRandomExpressionAnswer = (randomExpression) => {
  const [firstNumber, operator, secondNumber] = randomExpression.split(" ");
  let result = null;

  switch (operator) {
    case "+":
      result = Number(firstNumber) + Number(secondNumber);
      break;
    case "-":
      result = Number(firstNumber) - Number(secondNumber);
      break;
    case "*":
      result = Number(firstNumber) * Number(secondNumber);
      break;
    default:
      break;
  }

  return String(result);
};

export const playRounds = ({
  randomQuestionFunc,
  correctAnswerFunc,
  playerName,
  numberOfRounds = 3,
}) => {
  let isAllAnswersCorrect = true;

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const randomQuestion = randomQuestionFunc();
    const correctAnswer = correctAnswerFunc(randomQuestion);

    askQuestion(randomQuestion);

    const playerAnswer = getPlayerAnswer();

    if (playerAnswer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      isAllAnswersCorrect = false;
      break;
    }
  }

  showResult(isAllAnswersCorrect, playerName);
};
