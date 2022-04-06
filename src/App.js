import "./App.css";
import React, {useState} from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Array from './components/CardArray'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selected, setSelected] = useState([]);
  const [cardArr, setCardArr] = useState(Array)

  const initialiseCardArr = () => {
    setCardArr(Array)
  }

  const onClickHandler = (newValue) => {
    if (existInArr(newValue)) {
      setScore(score + 1);
      setSelected([...selected, newValue]);
      shuffleLogic();
    } else {
      // Game Over
      if (bestScore < score) {
        setBestScore(score); // Set Best Score
      }
      resetGame();
    }
    
  }

  const resetGame = () => {
    setScore(0); // Reset Score
    setSelected([]);
    initialiseCardArr();
  }

  const existInArr = (value) => {
    if (selected.indexOf(value) === -1) {
      return true;
    }
    return false;
  }

  const shuffleLogic = () => {
    let currentIndex = cardArr.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [cardArr[currentIndex], cardArr[randomIndex]] = [
        cardArr[randomIndex], cardArr[currentIndex]];
    }
  }

  return <div className="App">
    <Header score={score} bestScore={bestScore} />
    <Cards cardArr={cardArr} clickHandler={onClickHandler}  />
  </div>;
}

export default App;
