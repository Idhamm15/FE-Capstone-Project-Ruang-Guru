"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic

// Import gambar-gambar dari folder public
const marioBg = '/game-images/whac-a-mole/mario-bg.jpg'; // gunakan path relatif dari public folder
const soilImg = '/game-images/whac-a-mole/soil.png';
const pipeImg = '/game-images/whac-a-mole/pipe.png';
const montyMoleImg = '/game-images/whac-a-mole/monty-mole.png';
const piranhaPlantImg = '/game-images/whac-a-mole/piranha-plant.png';

const WhacAMole = () => {
  const [score, setScore] = useState(0);
  const [tiles, setTiles] = useState(Array.from({ length: 9 }, () => ({
    hasMole: false,
    hasPlant: false
  })));
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const moleInterval = setInterval(setMole, 1000);
    const plantInterval = setInterval(setPlant, 2000);

    return () => {
      clearInterval(moleInterval);
      clearInterval(plantInterval);
    };
  }, []);

  const setMole = () => {
    if (gameOver) return;

    const num = getRandomTile();
    if (tiles[num].hasPlant) return;

    const newTiles = [...tiles];
    newTiles[num].hasMole = true;
    setTiles(newTiles);
  };

  const setPlant = () => {
    if (gameOver) return;

    const num = getRandomTile();
    if (tiles[num].hasMole) return;

    const newTiles = [...tiles];
    newTiles[num].hasPlant = true;
    setTiles(newTiles);
  };

  const getRandomTile = () => {
    return Math.floor(Math.random() * 9);
  };

  const selectTile = (index: number) => {
    if (gameOver) return;
  
    const selectedTile = tiles[index];
    const newScore = selectedTile.hasMole ? score + 10 : score;
  
    setScore(newScore);
  
    if (selectedTile.hasMole) {
      const newTiles = [...tiles];
      newTiles[index].hasMole = false;
      setTiles(newTiles);
    } else if (selectedTile.hasPlant) {
      setGameOver(true);
    }
  };
  

  useEffect(() => {
    if (gameOver) {
      alert(`GAME OVER: ${score}`);
    }
  }, [gameOver, score]);

  return (
    <div className="text-center font-sans bg-cover h-screen" style={{ backgroundImage: `url(${marioBg})` }}>
      <h1 className="text-4xl">Whac a Mole</h1>
      <h2 className="text-2xl mt-4">Score: {score}</h2>
      <div className="w-[540px] h-[540px] mx-auto mt-8 flex flex-wrap bg-cover border-3 border-white rounded-2xl" style={{ backgroundImage: `url(${soilImg})` }}>
        {tiles.map((tile, index) => (
          <div key={index} className="w-[180px] h-[180px] bg-cover relative" style={{ backgroundImage: `url(${pipeImg})` }}>
            {tile.hasMole && <img src={montyMoleImg} alt="mole" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
            {tile.hasPlant && <img src={piranhaPlantImg} alt="plant" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
            <button onClick={() => selectTile(index)} className="w-full h-full opacity-0 cursor-pointer hover:opacity-50"></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhacAMole;
