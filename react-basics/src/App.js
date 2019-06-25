import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';


function App()
{
  return(
    <div className="App">
    <h1>Time Now {new Date().toLocaleTimeString()}</h1>
    </div>
  );
  
}
export default App;