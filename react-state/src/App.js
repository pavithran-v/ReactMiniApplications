import React from 'react';
import logo from './logo.svg';
//import './App.css';
/*function Class(props)
{
  return ( <h1>{props.date.toLocaleTimeString()}</h1>);
}*/
class Clock extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state = {date : new Date()};
  }
  componentDidMount()
  {
      this.timerId = setInterval(() => this.thick(),1000);
  }
  componentWillUnmount()
  {
      clearInterval(this.timerId);
  }
  thick()
  {
    this.setState({
      date: new Date()
    });
  }
  render = () => <h1>{this.state.date.toLocaleTimeString()}</h1>;
}
function App() {
  return (
    <div className="App">
     <Clock/>
     <Clock/>
     <Clock/>
    </div>
  );
}

export default App;
