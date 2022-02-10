import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Newscompo from './components/Newscompo';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

//  WHENEVER GETTING ERROR OF TYPE LIKE UNDEFINED LENGTH, ETC. API KEY EXHAUSTED

const App = ()=> {
  
    const pagesize = 6
    // Always use REACT_APP_ to name any variable in ENVIRONMENT VARIABLE
    const apikey = process.env.REACT_APP_API
  
    // loading bar Progress
    const [progress, setProgress] = useState(0)
  // can make variables like c='Palash' and then call below using {c}
    return (
      <div>
        <Router>
          <Navbar/>
          {/* Loading Bar */}
          <LoadingBar
            height={2}
            color='#adb5bd'
            progress={progress}
           />

          {/* You can pass country also but i dont want to */}
            <Routes>
            {/* Use exact if making big website so when user click / only that part opens */}
              <Route exact path="/" element={ <Newscompo setProgress={setProgress} apikey={apikey} key="general" srcolor="danger" pagesize={pagesize} category="general"/>}>
                </Route>
              <Route exact path="/sports" element={ <Newscompo setProgress={setProgress} apikey={apikey} key="sports" srcolor="warning" pagesize={pagesize} category="sports"/>}>
                </Route>
              <Route exact path="/business" element={ <Newscompo setProgress={setProgress} apikey={apikey} key="business" srcolor="success" pagesize={pagesize} category="business"/>}>
                </Route>
              <Route exact path="/technology" element={ <Newscompo setProgress={setProgress} apikey={apikey} key="technology" srcolor="dark" pagesize={pagesize} category="technology"/>}>
                </Route>
              <Route exact path="/general" element={ <Newscompo setProgress={setProgress} apikey={apikey} key="general" srcolor="danger" pagesize={pagesize} category="general"/>}>
                </Route>
              <Route exact path="/health" element={ <Newscompo setProgress={setProgress} apikey={apikey} key="health" srcolor="info" pagesize={pagesize} category="health"/>}>
                </Route>
              <Route exact path="/entertainment" element={ <Newscompo setProgress={setProgress} apikey={apikey} key="entertainment" srcolor="secondary" pagesize={pagesize} category="entertainment"/>}>
                </Route>
              <Route exact path="/science" element={ <Newscompo setProgress={setProgress} apikey={apikey} key="science" srcolor="primary" pagesize={pagesize} category="science"/>}>
                </Route>
          </Routes>
        </Router>
      </div>
    )
}

export default App