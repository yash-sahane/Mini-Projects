import React from 'react'

const style = {
    background: "lightblue",
    border: "2px solid darkblue",
    fontSize: "30px",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none",
};

const Square = ({ value, clickHandler }) => {
    return (
        <button style={style} onClick={clickHandler}>{value}</button>
    )
}

export default Square