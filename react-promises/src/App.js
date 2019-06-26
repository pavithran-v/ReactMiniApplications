import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Promise, reject } from 'q';
import { resolve } from 'path';

const toRoomClean =new Promise((resolve,reject) =>
{
  let isRoomClean = true;
  if(isRoomClean)
  {
    return(resolve('Clean'));
  }
  else
  {
    return(reject('Not Clean'));
  }
});

function App() {
  toRoomClean.then((result)=> console.log('Room is' + result)).catch((result) => console.log('Room is' + result));
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
