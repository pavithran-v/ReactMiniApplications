import React from 'react';
import './App.css';
import Parent from './component/parenttochild/Parent'

class App extends React.Component {
  state = {
    title:'Hello World'
  }

  handleChange(newName)
  {
    this.setState(
      {title : newName}
    );
  }
  render()
  {
    return (
      <div className="App">
        <br/>   <br/>
        <Parent   changeTheWorldEvent={this.handleChange.bind(this,'New World')} 
          changeTheWorldSameEvent={this.handleChange.bind(this,'Same World')}
          title={this.state.title}/>
      </div>
    );
  }
}

export default App;
