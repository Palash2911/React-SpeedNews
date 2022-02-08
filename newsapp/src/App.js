import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscompo from './components/Newscompo';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  // can make variables like c='Palash' and then call below using {this.c}
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          {/* You can pass country also but i dont want to */}
            <Routes>
            {/* Use exact if making big website so when user click / only that part opens */}
              <Route exact path="/" element={ <Newscompo key="general" srcolor="danger" pagesize="6" category="general"/>}>
                </Route>
              <Route exact path="/sports" element={ <Newscompo key="sports" srcolor="warning" pagesize="6" category="sports"/>}>
                </Route>
              <Route exact path="/business" element={ <Newscompo key="business" srcolor="success" pagesize="6" category="business"/>}>
                </Route>
              <Route exact path="/technology" element={ <Newscompo key="technology" srcolor="dark" pagesize="6" category="technology"/>}>
                </Route>
              <Route exact path="/general" element={ <Newscompo key="general" srcolor="danger" pagesize="6" category="general"/>}>
                </Route>
              <Route exact path="/health" element={ <Newscompo key="health" srcolor="info" pagesize="6" category="health"/>}>
                </Route>
              <Route exact path="/entertainment" element={ <Newscompo key="entertainment" srcolor="secondary" pagesize="6" category="entertainment"/>}>
                </Route>
              <Route exact path="/science" element={ <Newscompo key="science" srcolor="primary" pagesize="6" category="science"/>}>
                </Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
