import React from 'react';
import logo from './logo.svg';
import './App.css';
import { tsImportEqualsDeclaration } from '@babel/types';

const Type = (props) => 
{
  if(props.scale === "c")
  {
    return "Celsius";
  }
  else if(props.scale === "f")
  {
    return "Fahrenheit"
  }
}


const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

/*const ToCelsious = (props) => 
{
  return (props.temperature - 32) * 5 / 9;
}

const ToFahrenheit = (props) => 
{
  return (props.temperature  * 9 / 5) + 32;
}
*/
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature,convert)
{
  const input = parseFloat(temperature);
  if(Number.isNaN(input))
  {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
class Temperature extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  handleChange(e)
  {
    this.props.onTemperatureChange(e.target.value);
  }
  render()
  {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
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
  constructor(props)
  {
    super(props);
    this.state = {temperature:'',scale:'c'};
  }
  
  handleCelsiusChange(temperature)
  {
    this.setState(
      {scale:'c',temperature}
    );
  }

  handleFahrenheitChange(temperature)
  {
    this.setState(
      {scale:'f',temperature}
    );
  }

  render()
  {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature,toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit) : temperature;
    return (
    <div>
      <Temperature scale = "c"
        temperature = {celsius}  
        onTemperatureChange = {(e) => this.handleCelsiusChange(e)}
      />
      <Temperature scale = "f"
       temperature = {fahrenheit}
       onTemperatureChange = {(e) => this.handleFahrenheitChange(e)}
      />
    </div>);
  }
}

export default Calculator;