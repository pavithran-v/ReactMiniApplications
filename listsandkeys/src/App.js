import React from 'react';
import logo from './logo.svg';
import './App.css';

const numbers  = [{id:1,name:"duke"},{id:2,name:"ktm"},{id:3,name:"pulsar"},{id:4,name:"apache"}];
const ListItems = (props) =>
{
  let numbers = props.numbers;
  return (
    numbers.map(
      (numbers) => <li key={numbers.id}>{numbers.name}</li>
    )
  );
}
function App() {
  return (
      <ul><ListItems numbers = {numbers}/></ul>   
  );
}

export default App;
