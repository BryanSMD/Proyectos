import { useState, useEffect } from 'react'
import './App.css'
import { saveGameToStorage, resetGameStorage } from './storage'
import confetti from 'canvas-confetti'

const turns = {
  X: '❌',
  O: '⭕'
}

const Square = ({children, isSelected, updateBoard, index}) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

const Winner_Combos=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : turns.X
  })

  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of Winner_Combos) {
      const [a,b,c] = combo
      if(
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    return null
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every(square => square != null)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)
    resetGameStorage()
  }

  const updateBoard = (index) => {
    const newBoard = [...board]
    // Si la posicion esta ocupada, no actualizar
    if (newBoard[index] || winner) return
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === turns.X ? turns.O : turns.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      resetGameStorage()
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // Empate
      resetGameStorage()
    }
  }

  useEffect(() => {
    if (winner !== null) return

    saveGameToStorage({
      board,
      turn
    })
  }, [board, turn, winner])

  return (
    <main className="board">
      <h1>Tres en raya</h1>
      <button onClick={resetGame}>Resetear Juego</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square 
                key={index} 
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === turns.X}>
          {turns.X}
        </Square>
        <Square isSelected={turn === turns.O}>
          {turns.O}
        </Square>
      </section>

      {winner != null && (
        <section className='winner'>
          <div className='text'>
            <h2>
              {
                winner == false ? 
                  'Empate' :
                  'Ha ganado: ' + winner
              }
            </h2>
            <button onClick={resetGame}>
              Empezar de nuevo
            </button>
          </div>
        </section>
      )}

    </main>
  )
}

export default App
