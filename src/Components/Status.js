import React from 'react'

const Status = ({ calculateWinner, squares, xIsNext }) => {

    const winner = calculateWinner(squares);
    let status
    if (winner) {
        status = "winner: " + winner
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <div className='status'>
            {status}
        </div>
    )
}
export default Status 