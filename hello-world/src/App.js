import React from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
  //return null;
}
const user = {
  firstName:"Pavithran",
  lastName:"Viswanathan"
};
const Name = () => 
{
  var name = formatName(user);
  if(name)
  {
    return name;
  }
  else
  {
    return "Stranger";
  }
}
const element = (<div className="App">
<h1>Hello!!!{Name()}</h1>
</div>);
function App() {
  return element;
}

export default App;
