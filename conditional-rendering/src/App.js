import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

class LogIncontrol extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {isLoggedIn : false};
  }
  logIn()
  {
    this.setState(state => ({isLoggedIn : true}));
  }

  logOut()
  {
    this.setState(state => ({isLoggedIn : false}));
  }
  render()
  {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn)
    {
      button = <ChangeLogOut onClick = {() => this.logOut()}/>
    }
    else
    {
      button = <ChangeLogIn onClick = {() => this.logIn()}/>
    }
    return (
      <div>
        <Greeting isLoggedIn = {isLoggedIn} />
        {button}
      </div>
    );
  }
}
const UserGreeting = () => "Wellcome";
const GuestGreeting = () => "Plese SignUp";
const Greeting = (props) =>
{
  if(props.isLoggedIn)
  {
    return <UserGreeting /> ;
  }
  else{
    return <GuestGreeting />
  }
}
const ChangeLogOut = (props) => 
{
  return(
  <div>
    <button onClick = {props.onClick}>
      LogOut
    </button>
  </div>);
}

const ChangeLogIn = (props) => 
{
  return(
  <div>
    <button onClick = {props.onClick}>
      LogIn
    </button>
  </div>);
}

export default LogIncontrol;