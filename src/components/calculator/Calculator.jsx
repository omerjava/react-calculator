import React from "react";
import Button from "../button/Button";
import "./Calculator.css";
import { useState } from "react";

function Calculator() {
  const [userInput, setUserInput] = useState("");
  const [booleanDisable, setBooleanDisable] = useState(false);
  const [firstValue, setFirstValue] = useState("");
  const [operator, setOperator] = useState("");
  const [message, setMessage] = useState("");

  const handleNumber = (e) => {
    if (booleanDisable === false) setUserInput(userInput + e.target.value);
  };

  const handleOperator = (e) => {
    if (booleanDisable === false) {
      if (operator !== "") {
        handleCalculate();
      } else {
        if (userInput.length === 0) {
          setMessage("You should enter a number!");
        } else {
          setFirstValue(userInput);
          setOperator(e.target.value);
          setUserInput("");
          setMessage("");
        }
      }
    }
  };

  const handlePower = () => {
    if (booleanDisable === false) {
      const result = userInput * userInput;
      setUserInput(result);
      setMessage(`Your calculation is: ${userInput}x${userInput}=${result}`);
    }
  };

  const handleAllClear = () => {
    if (booleanDisable === false) {
      setUserInput("");
      setMessage('');
    }
  };

  const handleDelete = () => {
    if (booleanDisable === false) {
      const inputString = String(userInput);
      setUserInput(inputString.substring(0, inputString.length - 1));
      setMessage('');
    }
  };

  const handleCalculate = () => {
    if (booleanDisable === false) {
      if (userInput.length === 0) {
        setMessage("You should enter a number!");
      } 
      else if (operator === "") setMessage("Enter a valid operator!");
      else {
        const operations = (a, b) => {
          if (operator === "/") return Number(a) / Number(b);
          if (operator === "x") return Number(a) * Number(b);
          if (operator === "+") return Number(a) + Number(b);
          if (operator === "-") return Number(a) - Number(b);
          if (operator === "%") return Number(a) % Number(b);
        };
        const result = operations(firstValue, userInput);
        setUserInput(result);
        setOperator("");
        setFirstValue("");
        setMessage(
          `Your calculation is: ${firstValue}${operator}${userInput}=${result}`
        );
      }
    }
  };

  const handleOnOff = () => {
    setBooleanDisable(!booleanDisable);
  };

  const data = [
    1,
    2,
    3,
    "/",
    4,
    5,
    6,
    "x",
    7,
    8,
    9,
    "+",
    0,
    "%",
    "^2",
    "-",
    "AC",
    "DEL",
    "=",
    "ON/OFF",
  ];
  const events = [
    handleNumber,
    handleNumber,
    handleNumber,
    handleOperator,
    handleNumber,
    handleNumber,
    handleNumber,
    handleOperator,
    handleNumber,
    handleNumber,
    handleNumber,
    handleOperator,
    handleNumber,
    handleOperator,
    handlePower,
    handleOperator,
    handleAllClear,
    handleDelete,
    handleCalculate,
    handleOnOff,
  ];

  return (
    <div className="calculator">
      <h2>React Calculator App</h2>
      <div className={message.length > 0 ? "message" : "no-message"}>
        {message}
      </div>
      <div>
        <input
          type="text"
          className="userInput"
          placeholder="Enter"
          value={userInput}
          disabled={booleanDisable}
        />
      </div>
      <div className="numbers">
        {data.map((v, i) => (
          <Button key={i} btnClass={`class${i+1}`} value={v} event={events[i]} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
