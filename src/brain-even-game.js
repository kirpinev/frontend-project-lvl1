import readlineSync from 'readline-sync';

const brainEvenGame = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const numberOfRounds = 3;
  let isAllAnswersCorrect = true;

  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${playerName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);

    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      isAllAnswersCorrect = false;
      break;
    }
  }

  if (isAllAnswersCorrect) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export default brainEvenGame;
