import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscompo from './components/Newscompo';

export default class App extends Component {
  // can make variables like c='Palash' and then call below using {this.c}
  render() {
    return (
      <div>
        <Navbar/>
        <Newscompo/>
      </div>
    )
  }
}
