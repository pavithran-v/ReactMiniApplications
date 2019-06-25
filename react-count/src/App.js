import React from 'react';
import logo from './logo.svg';
import './App.css';
class Counter extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {count : 0};
  }
  onClick = () =>
  {
    this.setState(
      {
        count : this.state.count += 1
      }

    );
  }
  render = () =>
  {
    return(
      <div>
        <div>{this.state.count}</div>
        <div><button onClick={this.onClick}>cick!</button></div>
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default Counter;
