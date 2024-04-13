import React from 'react'

const GameOver = ({ winner, rematchHandler }) => {
    return (
        <div id='game-over'>
            <h2>Game Over!</h2>
            {winner ? <p>{winner} won!</p> : <p>It's Draw</p>}
            <p><button onClick={rematchHandler}>Rematch!</button></p>
        </div>
    )
}

export default GameOver