import React, { useState } from 'react'

const PlayerInfo = ({ name, symbol, isActive }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    const nameChangeHandler = (e) => {
        setPlayerName(e.target.value);
    }

    return (
        <li className={isActive ? 'active' : ''}>
            <span className='player'>
                {isEditing ? <input type="text" value={playerName} onChange={nameChangeHandler} required /> : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
                <button onClick={() => setIsEditing(prev => !prev)}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>
        </li>
    )
}

export default PlayerInfo