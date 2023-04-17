export const calculateWinner = (squares) => {
    const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
    ];
    
    for (let line of lines){
        const [a, b, c] = line;    // helps to get a actual value in the square ie. X or O
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {     // ((X or O present) && X === X && X === X)
            return squares[a];  // return X
        }
    }
    return null;    // if nothing returns in above line return null
}