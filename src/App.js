import React, { useState } from 'react';
import MyForm from './MyForm';
import './App.css';

function App() {
  const [turtle, setTurtle] = useState(null);
  const turtles = ['Michaelangelo', 'Raphael', 'Donatello', 'Leonardo'];
  const showTurtle = () => {
    const turtleIndex = Math.round(Math.random() * 3);
    setTurtle(turtles[turtleIndex]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Which Ninja Turtle Are You?</h2>
        <MyForm />
        <button onClick={showTurtle}>Find Out</button>
        { turtle && 
        <div>You are {turtle}!</div>
        }
      </header>
    </div>
  );
}

export default App;
