import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from "react-router-dom";
import Route from "react-router-dom/Route";


const User = (params) => {
  return ( <h1> Welcome to our User Page {params.username}</h1>)
}

class App extends Component {
  state = {
    logIn: false
  }
  loginHandle = () => {
    this.setState(prevState => ({
      logIn: !prevState.logIn
    }))
  }

  render() {
    return (
      <Router>
      <div className="App">
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={{ color: 'green'}}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" exact activeStyle={{ color: 'green'}}>About</NavLink>
        </li>
        <li>
          <NavLink to="/user/Padmavathi. K" exact activeStyle={{ color: 'green'}}>User Padma</NavLink>
        </li>
        <li>
          <NavLink to="/user/Nagesh. K" exact activeStyle={{ color: 'green'}}>User Nagesh</NavLink>
        </li>
        <li>
          <NavLink to="/user/Satish" exact activeStyle={{ color: 'green'}}>User Satish</NavLink>
        </li>
      </ul> 

      <Prompt
        when={!this.state.logIn}
        message={(location)=>{
          return location.pathname.startsWith("/user") ? 'Are you sure want to continue this page?' 
          : true
        }}
      />

      <input type="button" value={this.state.logIn ? 'logout':'login'} 
             onClick={this.loginHandle.bind(this)}/>

        <Route exact strict path="/" render={
          () => {
            return ( <h1> Welcome to our Home Page..!!! </h1> );
          }
        }/>

        <Route exact strict path="/about" render={
          () => {
            return ( <h1> Welcome to our About Page..!!! </h1> );
          }
        }/>
        <Route exact strict path="/user/:username" render={({match})=>(
          this.state.logIn ? ( 
          <User username={match.params.username}/> ) : ( <Redirect to="/" /> )
        )}/> 
      </div>
      </Router>
    );
  }
}

export default App;
