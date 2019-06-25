import React from 'react';
import logo from './logo.svg';
//import './App.css';

class Toggle extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {isToggleOn : true};
   // this.handleClick = this.handleClick.bind(this);
  }
  handleClick()
  {
    this.setState(
      state => (
        {
          isToggleOn : !state.isToggleOn
        }
      )
    );
  }
  render()
  {
    return(
      <div>
        <h1>Hello World</h1>
        <button onClick={() => this.handleClick()}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      </div>
    );
  }
}
export default Toggle;