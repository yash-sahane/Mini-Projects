import React from 'react'
import Square from './Square'

const Squares = ({ board, clickHandler }) => {
    return board.map((square, i) => {
        return <Square key={i} value={square} clickHandler={() => clickHandler(i)} />
    })
}

export default Squares