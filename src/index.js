import readlineSync from 'readline-sync';

export const getRandomNumber = (minNumber = 1, maxNumber = 100) => Math.floor(
  Math.random() * (maxNumber - minNumber + 1) + minNumber,
);

export const getRandomNumberAnswer = (randomNumber) => (randomNumber % 2 === 0 ? 'yes' : 'no');

export const getRandomOperator = () => {
  const listOfOperators = ['+', '-', '*'];
  const startOfList = 0;
  const endOfList = listOfOperators.length - 1;
  const randomNumber = getRandomNumber(startOfList, endOfList);

  return listOfOperators[randomNumber];
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const getPlayerName = () => readlineSync.question('May I have your name? ');

export const showRules = (userName, gameRules) => {
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const getPlayerAnswer = () => readlineSync.question('Your answer: ');

export const showResult = (isAllAnswersCorrect, playerName) => {
  if (isAllAnswersCorrect) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export const getRandomExpression = () => {
  const randomNumberOne = getRandomNumber();
  const randomNumberTwo = getRandomNumber();
  const randomOperator = getRandomOperator();

  return `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`;
};

export const getRandomExpressionAnswer = (randomExpression) => {
  const [firstNumber, operator, secondNumber] = randomExpression.split(' ');
  let result = null;

  switch (operator) {
    case '+':
      result = Number(firstNumber) + Number(secondNumber);
      break;
    case '-':
      result = Number(firstNumber) - Number(secondNumber);
      break;
    case '*':
      result = Number(firstNumber) * Number(secondNumber);
      break;
    default:
      break;
  }

  return String(result);
};

export const getRandomTwoNumbers = () => {
  const randomNumberOne = getRandomNumber();
  const randomNumberTwo = getRandomNumber();

  return `${randomNumberOne} ${randomNumberTwo}`;
};

export const getRandomTwoNumbersAnswer = (randomTwoNumbers) => {
  const [firstNumber, secondNumber] = randomTwoNumbers.split(' ');
  const minNumber = firstNumber < secondNumber ? firstNumber : secondNumber;

  for (let i = minNumber; minNumber >= 1; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      return String(i);
    }
  }

  return null;
};

export const getProgression = () => {
  const randomStartNumber = getRandomNumber();
  const randomIncrementNumber = getRandomNumber(1, 10);
  const randomEmptyPosition = getRandomNumber(0, 9);
  const hiddenNumberString = '..';
  const progressionArray = [randomStartNumber];
  const maxProgressionLength = 10;

  for (let i = 1; i < maxProgressionLength; i += 1) {
    progressionArray.push(
      progressionArray[progressionArray.length - 1] + randomIncrementNumber,
    );
  }

  return [
    ...progressionArray.slice(0, randomEmptyPosition),
    hiddenNumberString,
    ...progressionArray.slice(randomEmptyPosition + 1),
  ].join(' ');
};

export const getProgressionAnswer = (progression) => {
  const progressionArray = progression.split(' ');
  const hiddenNumberString = '..';
  const emptyNumberIndex = progressionArray.indexOf(hiddenNumberString);

  if (
    progressionArray[emptyNumberIndex - 1]
    && progressionArray[emptyNumberIndex - 2]
  ) {
    const increment = Number(progressionArray[emptyNumberIndex - 1])
      - Number(progressionArray[emptyNumberIndex - 2]);

    return String(Number(progressionArray[emptyNumberIndex - 1]) + increment);
  }

  return String(
    Number(progressionArray[emptyNumberIndex + 1])
      - Math.abs(
        Number(progressionArray[emptyNumberIndex + 1])
          - Number(progressionArray[emptyNumberIndex + 2]),
      ),
  );
};

export const getPrimeNumberAnswer = (primeNumber) => {
  if (primeNumber <= 1) {
    return 'no';
  }

  for (let i = 2; i < primeNumber; i += 1) {
    if (primeNumber % i === 0) {
      return 'no';
    }
  }

  return 'yes';
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
      console.log('Correct!');
    } else {
      console.log(
        `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      isAllAnswersCorrect = false;
      break;
    }
  }

  showResult(isAllAnswersCorrect, playerName);
};
