import { useState } from "react"
import "./App.css"

function App() {
  const [inputValue, setInputValue] = useState("")
  const [prevValue, setPrevValue] = useState("")

  //Function to handle onclick button
  const handleBtn = (value) => {
    if (value === "DEL") {
      setInputValue(inputValue.slice(0, -1))
    } else if (value === "AC") {
      setInputValue("")
      setPrevValue("")
    } else if (value === "=") {
      setInputValue(eval(inputValue))
      setPrevValue(inputValue)
    } else {
      setInputValue(inputValue + value)
    }
  }

  return (
    <>
      <div className='calculator-grid'>
        <div className='output'>
          <div className='previous-operand'>{prevValue}</div>
          <div className='current-operand'>{inputValue}</div>
        </div>
        <button className='span-two' onClick={() => handleBtn("AC")}>
          AC
        </button>
        <button onClick={() => handleBtn("DEL")}>DEL</button>
        <button onClick={() => handleBtn("/")}>/</button>
        <button onClick={() => handleBtn("1")}>1</button>
        <button onClick={() => handleBtn("2")}>2</button>
        <button onClick={() => handleBtn("3")}>3</button>
        <button onClick={() => handleBtn("*")}>*</button>
        <button onClick={() => handleBtn("4")}>4</button>
        <button onClick={() => handleBtn("5")}>5</button>
        <button onClick={() => handleBtn("6")}>6</button>
        <button onClick={() => handleBtn("+")}>+</button>
        <button onClick={() => handleBtn("7")}>7</button>
        <button onClick={() => handleBtn("8")}>8</button>
        <button onClick={() => handleBtn("9")}>9</button>
        <button onClick={() => handleBtn("-")}>-</button>
        <button onClick={() => handleBtn(".")}>.</button>
        <button onClick={() => handleBtn("0")}>0</button>
        <button className='span-two' onClick={() => handleBtn("=")}>
          =
        </button>
      </div>
    </>
  )
}

export default App
