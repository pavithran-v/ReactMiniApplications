import React from 'react';
import './App.css';

class  App extends React.Component{
  state = {
    name:'Pavin'
  }
  handleClick(newName)
  {
    this.setState(
      {
          name : newName
      }
    );
  }
  handleChange(event)
  {
      this.setState(
        {
          name : event.target.value
        }
      );
  }
  render()
  {
    return (
      <div className="App">
        <button onClick = {this.handleClick.bind(this,'Pavithran.V')}>Click To Change Name</button>
        <br/>    <br/>
        <input type="text" onChange={this.handleChange.bind(this)} value={this.state.name}></input>
        <br/>    <br/>
        <h1>{this.state.name}</h1>
      </div>
    );
  }  
}

export default App;
