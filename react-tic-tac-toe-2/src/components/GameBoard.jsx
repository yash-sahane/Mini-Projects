import React from 'react'


const GameBoard = ({ gameBoard, onSelectSquare }) => {
    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIdx) => <li key={rowIdx}>
                <ol>
                    {row.map((playerSymbol, colIdx) => <li key={colIdx}>
                        <button onClick={() => onSelectSquare(rowIdx, colIdx)} disabled={playerSymbol}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard