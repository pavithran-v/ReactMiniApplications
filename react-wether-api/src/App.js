import React from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';

const API_key = "bfbac9b77d9a11f37be3175510edd787";

class App extends React.Component
{
  
  getWeather = async (e) =>
  {
    e.preventDefault();
    //console.log(e.target.elements.city.value);
    //console.log(e.target.elements.country.value);
    const api_call = await fetch();
  }
  render()
  {
    return (
      <div>
        <Title />
        <Form getWeather = {this.getWeather}/>
      </div>
    );
  }
}

export default App;
