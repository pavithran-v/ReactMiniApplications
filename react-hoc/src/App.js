import React from 'react';
import './App.css';
import ButtonOne from  './component/ButtonOne';
class App extends React.Component{
  render()
  {
    return (
      <div className="App">
        <ButtonOne disable/>
      </div>
    );
  }
}

export default App;
