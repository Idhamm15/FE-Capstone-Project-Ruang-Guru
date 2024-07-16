'use client';

import { useState } from 'react';
import rockImage from '../../../public/game-images/rock-paper-scissors/rock.png';
import paperImage from '../../../public/game-images/rock-paper-scissors/paper.png';
import scissorsImage from '../../../public/game-images/rock-paper-scissors/scissors.png';
import firstOpponent from '../../../public/game-images/rock-paper-scissors/scissors.png';
import firstChoice from '../../../public/game-images/rock-paper-scissors/rock.png';

type Choice = "rock" | "paper" | "scissors";

const RockPaperScissors = () => {
  const [yourChoice, setYourChoice] = useState<Choice | "">("");
  const [yourScore, setYourScore] = useState<number>(0);
  const [opponentChoice, setOpponentChoice] = useState<Choice | "">("");
  const [opponentScore, setOpponentScore] = useState<number>(0);

  const choices: Choice[] = ["rock", "paper", "scissors"];
  const images: { [key in Choice]: string } = {
    rock: rockImage.src,
    paper: paperImage.src,
    scissors: scissorsImage.src
  };

  const selectChoice = (choice: Choice) => {
    setYourChoice(choice);
    const opponent = choices[Math.floor(Math.random() * 3)];
    setOpponentChoice(opponent);

    if (choice === opponent) {
      setYourScore(prev => prev + 1);
      setOpponentScore(prev => prev + 1);
    } else if ((choice === 'rock' && opponent === 'scissors') ||
               (choice === 'scissors' && opponent === 'paper') ||
               (choice === 'paper' && opponent === 'rock')) {
      setYourScore(prev => prev + 1);
    } else {
      setOpponentScore(prev => prev + 1);
    }
  };

  return (
    <div className="text-center font-sans">
      <h1 className="text-2xl" id="opponent-score">Score Lawan : {opponentScore}</h1>
      <br />
      <center>
        <img
          id="opponent-choice"
          src={opponentChoice ? images[opponentChoice as Choice] : firstOpponent.src}
          className="w-60 h-60 mt-2"
          alt="Opponent's Choice"
        />
      </center>
      <br/>
      <center>
        <img
          id="your-choice"
          src={yourChoice ? images[yourChoice as Choice] : firstChoice.src}
          className="w-60 h-60 mt-2"
          alt="Your Choice"
        />
      </center>
      <div id="choices" className="w-60 h-20 mt-2 mx-auto flex justify-around items-center">
        {choices.map(choice => (
          <img
            key={choice}
            id={choice}
            src={images[choice]}
            className="w-20 h-20 cursor-pointer"
            onClick={() => selectChoice(choice)}
            alt={choice}
          />
        ))}
      </div>
      <br />
      <h1 className="text-2xl" id="your-score">Score Kamu : {yourScore}</h1>
    </div>
  );
};

export default RockPaperScissors;
