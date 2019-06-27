import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    user : [
      {name:'Ram',age:20},
      {name:'Raj',age:25},
      {name:'Rahul',age:30},
      {name:'Ramesh',age:35}
    ]
  }
  render()
  {
  return (
    <div>
      <br/>   <br/>
      <ul>
        {
          this.state.user.map(
            (user) => 
            {
              return(
              <li>Name:{user.name}|Age:{user.age}</li>);
            }
          )
        }
      </ul>
    </div>
  );
  }
}

export default App;
