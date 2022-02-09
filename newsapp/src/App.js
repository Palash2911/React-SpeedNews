import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscompo from './components/Newscompo';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  // laoding bar Progress
  state = {
      progress: 0
  }

  setProgress = (progress)=>{
      this.setState({progress: progress})
  }
  pagesize=6
  // can make variables like c='Palash' and then call below using {this.c}
  render() {
    return (
      <div>
        <Router>
          <Navbar/>

          {/* Loading Bar */}
          <LoadingBar
            height={2}
            color='#adb5bd'
            progress={this.state.progress}
           />

          {/* You can pass country also but i dont want to */}
            <Routes>
            {/* Use exact if making big website so when user click / only that part opens */}
              <Route exact path="/" element={ <Newscompo setProgress={this.setProgress} key="general" srcolor="danger" pagesize={this.pagesize} category="general"/>}>
                </Route>
              <Route exact path="/sports" element={ <Newscompo setProgress={this.setProgress} key="sports" srcolor="warning" pagesize={this.pagesize} category="sports"/>}>
                </Route>
              <Route exact path="/business" element={ <Newscompo setProgress={this.setProgress} key="business" srcolor="success" pagesize={this.pagesize} category="business"/>}>
                </Route>
              <Route exact path="/technology" element={ <Newscompo setProgress={this.setProgress} key="technology" srcolor="dark" pagesize={this.pagesize} category="technology"/>}>
                </Route>
              <Route exact path="/general" element={ <Newscompo setProgress={this.setProgress} key="general" srcolor="danger" pagesize={this.pagesize} category="general"/>}>
                </Route>
              <Route exact path="/health" element={ <Newscompo setProgress={this.setProgress} key="health" srcolor="info" pagesize={this.pagesize} category="health"/>}>
                </Route>
              <Route exact path="/entertainment" element={ <Newscompo setProgress={this.setProgress} key="entertainment" srcolor="secondary" pagesize={this.pagesize} category="entertainment"/>}>
                </Route>
              <Route exact path="/science" element={ <Newscompo setProgress={this.setProgress} key="science" srcolor="primary" pagesize={this.pagesize} category="science"/>}>
                </Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
