import React from 'react';
import logo from './logo.svg';
import './App.css';
import { tsImportEqualsDeclaration } from '@babel/types';

const ToCelsious = (props) => 
{
  return (props.temperature - 32) * 5 / 9;
}

const ToFahrenheit = (props) => 
{
  return (props.temperature  * 9 / 5) + 32;
}

const Type = (props) => 
{
  if(props.scale == "c")
  {
    return "Celsius";
  }
  else if(props.scale == "f")
  {
    return "Fahrenheit"
  }
}

class Temperature extends React.Component
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
    return(
      <fieldset>
        <legend>Enter {<Type scale={this.props.scale}/>} :</legend>
        <input value={temperature} onChange = {(e) => this.handleChange(e)}></input>
      </fieldset>
    );
  }
}

class Calculator extends React.Component
{
    render()
    {
      return (
      <div>
        <Temperature scale = "c"/>
        <Temperature scale = "f"/>
      </div>);
    }
}

export default Calculator;