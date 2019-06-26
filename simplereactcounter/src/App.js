import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import MinusButton from './Component/MinusButton';
import PlusButton from './Component/PlusButton';
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {count:0};
    //this.handleChange = this.handleChange.bind(this);
  }
  handleChange(count)
  {
    this.setState(
      {count}
    );
  }
  //<PlusButton count = {count} increaseCount = {(count) => this.setState({count})}/>
  render()
  {
    let count = this.state.count;
    return (
      <div>
        <Counter count = {count}/>
        <PlusButton count = {count} increaseCount = {(count) => this.handleChange(count)}/>
        <MinusButton count={count} decreaseCount = {(count) => this.setState({count})}/>
      </div>
    );
  }
}

export default App;
