import React from 'react';
import './App.css';
import DisplayMessage from './DisplayMessage';
import withLogger from './withLogger';

const EnhancedDisplayMessage = withLogger(DisplayMessage);

function App() {
  return (
    <div className="App">
      <h1>React App with Higher-Order Component</h1>
      <EnhancedDisplayMessage />
    </div>
  );
}

export default App;
