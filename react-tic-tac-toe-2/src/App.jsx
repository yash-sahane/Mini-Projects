import React, { useState } from 'react'
import PlayerInfo from './components/PlayerInfo'
import GameBoard from './components/GameBoard'
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './utils/winning_combinations';
import GameOver from './components/GameOver';

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');
  const [isDraw, setIsDraw] = useState(false);

  let gameBoard = [...initialBoard.map(innerArray => [...innerArray])];
  let winner = null;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSqareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && secondSquareSymbol && thirdSqareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSqareSymbol) {
      winner = firstSquareSymbol;
    }

  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const onSelectSquare = (rowIdx, colIdx) => {
    setActivePlayer(prev => prev === 'X' ? 'O' : 'X');
    setGameTurns(prev => {
      if ((prev.length > 0 && prev[0].player === 'X') ? 'O' : 'X');
      const updatedTurns = [{ square: { row: rowIdx, col: colIdx }, player: activePlayer }, ...prev];
      return updatedTurns;
    })
  }

  const rematchHandler = () => {
    setGameTurns([]);
    setActivePlayer('X');
    winner = null;
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <PlayerInfo name={'Player 1'} symbol={'X'} isActive={activePlayer === 'X'} />
          <PlayerInfo name={'Player 2'} symbol={'O'} isActive={activePlayer === 'O'} />
        </ol>
        {(winner || hasDraw) && <GameOver rematchHandler={rematchHandler} winner={winner} />}
        <GameBoard gameBoard={gameBoard} onSelectSquare={onSelectSquare} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  )
}

export default App