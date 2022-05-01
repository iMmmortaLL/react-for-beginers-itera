import React from 'react';
import './App.css';
import info from "./info.json";

const localData = info.Data;

function App() {
  return (
    <div className="App">
      <h1> Hello React</h1>
        <ul>
            {localData.map(s => (<li>{s}</li>))}
        </ul>
    </div>
  );
}



export default App;
