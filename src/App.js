import React, { useState } from "react";
import Card from "./components/cards/card";
import "./App.css";
import { data } from "./component-practice-data";

function App() {
  const [added, setAdded] = useState([]);
  const handleAdded = (index) => {
    const newAdded = [...added];
    if (!newAdded.includes(index)) {
      newAdded.push(index);
    }
    setAdded(newAdded);
  };
  return (
    <div className="app">
      <div className="title">
        <h2>مقالات افزوده شده:</h2>
        <span>{added.length}</span>
      </div>
      <div className="container">
        <div></div>
        {data.map((item, index) => {
          return (
            <Card
              selected={added.includes(index)}
              data={item}
              cardIndex={index}
              handleAdded={handleAdded}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
