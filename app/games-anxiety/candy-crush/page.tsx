"use client";

import { useEffect, useState } from 'react';

const rows = 9;
const columns = 9;

const imgBlank = '/game-images/candy-crush/images/blank.png';
const candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];

const CandyCrush = () => {
    const [board, setBoard] = useState<string[][]>(Array(rows).fill(null).map(() => Array(columns).fill('')));
    const [score, setScore] = useState<number>(0);
    const [currTile, setCurrTile] = useState<HTMLImageElement | null>(null);
    const [otherTile, setOtherTile] = useState<HTMLImageElement | null>(null);

    useEffect(() => {
        startGame();

        const interval = setInterval(() => {
            crushCandy();
            slideCandy();
            generateCandy();
        }, 100);

        return () => clearInterval(interval);
    }, []);

    const randomCandy = (): string => candies[Math.floor(Math.random() * candies.length)];

    const startGame = () => {
        setScore(0); // Reset score to 0 when starting a new game

        const initialBoard = [];
        for (let r = 0; r < rows; r++) {
            const row = [];
            for (let c = 0; c < columns; c++) {
                if (board[r][c] === imgBlank) {
                    row.push(imgBlank); // Keep the existing blank spaces
                } else {
                    row.push(`/game-images/candy-crush/images/${randomCandy()}.png`);
                }
            }
            initialBoard.push(row);
        }
        setBoard(initialBoard);
    };

    const handleDragStart = (e: React.DragEvent<HTMLImageElement>, r: number, c: number) => {
        setCurrTile(e.target as HTMLImageElement);
    };

    const handleDragOver = (e: React.DragEvent<HTMLImageElement>) => {
        e.preventDefault();
    };

    const handleDragEnter = (e: React.DragEvent<HTMLImageElement>) => {
        e.preventDefault();
    };

    const handleDragLeave = () => {};

    const handleDrop = (e: React.DragEvent<HTMLImageElement>, r: number, c: number) => {
        setOtherTile(e.target as HTMLImageElement);
    };

    const handleDragEnd = () => {
        if (!currTile || !otherTile) return;

        const currCoords = currTile.id.split("-");
        const r = parseInt(currCoords[0]);
        const c = parseInt(currCoords[1]);

        const otherCoords = otherTile.id.split("-");
        const r2 = parseInt(otherCoords[0]);
        const c2 = parseInt(otherCoords[1]);

        const moveLeft = c2 === c - 1 && r === r2;
        const moveRight = c2 === c + 1 && r === r2;
        const moveUp = r2 === r - 1 && c === c2;
        const moveDown = r2 === r + 1 && c === c2;

        const isAdjacent = moveLeft || moveRight || moveUp || moveDown;

        if (isAdjacent) {
            const newBoard = [...board];
            const temp = newBoard[r][c];
            newBoard[r][c] = newBoard[r2][c2];
            newBoard[r2][c2] = temp;

            setBoard(newBoard);

            const validMove = checkValid();
            if (!validMove) {
                const temp = newBoard[r][c];
                newBoard[r][c] = newBoard[r2][c2];
                newBoard[r2][c2] = temp;
                setBoard(newBoard);
            } else {
                setCurrTile(null);
                setOtherTile(null);
            }
        }
    };

    const crushCandy = () => {
        let newBoard = [...board];
        const updatedBoard = crushThree(newBoard);
        if (updatedBoard) {
            setBoard(updatedBoard);
        }
    };

    const crushThree = (board: string[][]) => {
        let newBoard = [...board];
        let scoreChanged = false;

        // Check rows
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns - 2; c++) {
                const candy1 = newBoard[r][c];
                const candy2 = newBoard[r][c + 1];
                const candy3 = newBoard[r][c + 2];
                if (candy1 === candy2 && candy2 === candy3 && !candy1.includes("blank")) {
                    newBoard[r][c] = imgBlank;
                    newBoard[r][c + 1] = imgBlank;
                    newBoard[r][c + 2] = imgBlank;
                    setScore(prevScore => prevScore + 30);
                    scoreChanged = true;
                }
            }
        }
        // Check columns
        for (let c = 0; c < columns; c++) {
            for (let r = 0; r < rows - 2; r++) {
                const candy1 = newBoard[r][c];
                const candy2 = newBoard[r + 1][c];
                const candy3 = newBoard[r + 2][c];
                if (candy1 === candy2 && candy2 === candy3 && !candy1.includes("blank")) {
                    newBoard[r][c] = imgBlank;
                    newBoard[r + 1][c] = imgBlank;
                    newBoard[r + 2][c] = imgBlank;
                    setScore(prevScore => prevScore + 30);
                    scoreChanged = true;
                }
            }
        }

        if (scoreChanged) {
            return newBoard;
        } else {
            return null;
        }
    };

    const checkValid = () => {
        // Check rows
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns - 2; c++) {
                const candy1 = board[r][c];
                const candy2 = board[r][c + 1];
                const candy3 = board[r][c + 2];
                if (candy1 === candy2 && candy2 === candy3 && !candy1.includes("blank")) {
                    return true;
                }
            }
        }
        // Check columns
        for (let c = 0; c < columns; c++) {
            for (let r = 0; r < rows - 2; r++) {
                const candy1 = board[r][c];
                const candy2 = board[r + 1][c];
                const candy3 = board[r + 2][c];
                if (candy1 === candy2 && candy2 === candy3 && !candy1.includes("blank")) {
                    return true;
                }
            }
        }
        return false;
    };

    const slideCandy = () => {
        const newBoard = [...board];
        for (let c = 0; c < columns; c++) {
            let ind = rows - 1;
            for (let r = rows - 1; r >= 0; r--) {
                if (!newBoard[r][c].includes("blank")) {
                    newBoard[ind][c] = newBoard[r][c];
                    ind--;
                }
            }
            for (let r = ind; r >= 0; r--) {
                newBoard[r][c] = imgBlank;
            }
        }
        setBoard(newBoard);
    };

    const generateCandy = () => {
        const newBoard = [...board];
        for (let c = 0; c < columns; c++) {
            if (newBoard[0][c].includes("blank")) {
                newBoard[0][c] = `/game-images/candy-crush/images/${randomCandy()}.png`;
            }
        }
        setBoard(newBoard);
    };

    return (
        <div className="bg-cover bg-center fixed inset-0" style={{ backgroundImage: `url(/game-images/candy-crush/background.jpg)` }}>
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="text-white text-4xl mb-4">Score: {score}</h1>
                <div id="board" className="w-[450px] h-[450px] bg-lightblue border-5 border-slategray rounded-10 flex flex-wrap">
                    {board.map((row, rowIndex) => (
                        row.map((candy, colIndex) => (
                            <img
                                key={`${rowIndex}-${colIndex}`}
                                id={`${rowIndex}-${colIndex}`}
                                src={candy}
                                alt={`${rowIndex}-${colIndex}`}
                                className="w-12 h-12"
                                draggable="true"
                                onDragStart={(e) => handleDragStart(e, rowIndex, colIndex)}
                                onDragOver={handleDragOver}
                                onDragEnter={handleDragEnter}
                                onDragLeave={handleDragLeave}
                                onDrop={(e) => handleDrop(e, rowIndex, colIndex)}
                                onDragEnd={handleDragEnd}
                            />
                        ))
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CandyCrush;
