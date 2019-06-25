import React from 'react';
import logo from './logo.svg';
import './App.css';
const BolingTemperature = (props) =>
{
  if(props.celsious >= 100)
  {
    return (
      <h1>Temperature is Enough to boil</h1>
    );
  }
  else{
    return (
      <h1>Temperature is not Enough to boil</h1>
    );
  }
}
class Calculator extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {temperature : ''};
  }


  handleChange(e)
  {
    this.setState(
      {temperature : e.target.value}
    );
  }
  render()
  {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>
          Enter Temperature Here:
          </legend>
          <input value={temperature} onChange={(e) => this.handleChange(e)}>
          </input>
          <BolingTemperature celsious={parseFloat(temperature)}/>
      </fieldset>
    );
  }
}

export default Calculator;
