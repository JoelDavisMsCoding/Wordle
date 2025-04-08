import { useState, useEffect, useRef } from "react";
import "../styles/Wordle.css";
import Row from "./Row.jsx";
import {LETTERS, potentialWords} from "../data/lettersAndWords.js"
//import Keyboard from "./Keyboard.jsx";

const SOLUTION = "table";

export default function Wordle() {
  const [guesses, setGuesses] = useState([
    "     ",
    "     ",
    "     ",
    "     ",
    "     ",
    "     "
  ]);

  const [solutionFound, setSolutionFound] = useState(false);
  const [activeLetterIndex, setActiveLetterIndex] = useState(0);
  const [notification, setNotification] = useState("");

  const wordleRef = useRef();

  useEffect(() => {
    wordleRef.current.focus();
  }, []);

  const typeLetter = (letter) => {
    if (activeLetterIndex < 5) {
      setNotification("");

      let newGuesses = 
    }
  };

  const hitEnter = () => {
    //TODO
  }

  const handleKeyDown = (event) => {
    if (solutionFound) return;

    if (LETTERS.includes(event.key)) {
      typeLetter(event.key);
      return;
    }

    if (event.key === "Enter") {
      hitEnter();
      return;
    }

    if (event.key === "Backspace") {
      hitBackspace();
    }
  }

  return (
    <div className="wordle"
      ref={wordleRef}
      tabIndex="0"
      onBlur={(e) => {
        e.target.focus();
      }}
      onKeyDown={handleKeyDown}
    >
      <h1 className="title">Wordle Clone</h1>
      <div className="notification"></div>
      {guesses.map((guess, index) => {
        return (<Row key={index} word={guess} />);
      })}
    </div>
  )
}