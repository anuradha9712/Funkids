import React from 'react';
import './App.css';
import Button from "./components/Button.jsx";


function App() {
  return (
    <div className="App">
      <Button
        onClick={() => console.log("Button clicked!!")}
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--small"
      >
      </Button>
    </div>
  );
}

export default App;
