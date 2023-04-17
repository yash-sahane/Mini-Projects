import React, { useState } from 'react'
import Squares from './components/Squares';
import { calculateWinner } from './calculateWinner';
import './App.css'

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));  // create a array of 9 elements and fill all with null
  const [turnX, setTurnX] = useState(true);
  const isTie = board.every(square => square != null);
  const winner = calculateWinner(board);

  const clickHandler = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;   // if winner is true or space is occupied then return
    boardCopy[i] = turnX ? 'X' : 'O';     // updated boardCopy with X or O
    setBoard(boardCopy);                  // update board state
    setTurnX(!turnX);                     // invert turn
  }

  const resetHandler = () => {
    setBoard(Array(9).fill(null));
    setTurnX(true);
  }

  return (
    <div className='container'>
      <div className='board'>
        <Squares board={board} clickHandler={clickHandler} />
      </div>
      <h2> {winner ? `Winner ${winner}` : isTie ? 'Tie!' : `Next player : ${turnX ? 'X' : 'O'}`} </h2>
      <button className='btn' onClick={resetHandler}>Retry</button>
    </div>
  )
}

export default App