import React from 'react'

const Log = ({ gameTurns }) => {
    return (
        <ol id='log'>
            {gameTurns.map((turn, idx) => <li key={idx}>{turn.player} selected {turn.square.row},{turn.square.col}</li>)}
        </ol>
    )
}

export default Log