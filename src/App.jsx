import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import React from "react";

import {Home,Couple,Event,Invitation} from "./pages/export_pages";
// import {Navbar,Couple} from './components/export_component';

const App = () => {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/couple" element={<Couple/>}/>
          <Route path="/event" element={<Event/>}/>
          <Route path="/invitation" element={<Invitation/>}/>
        </Routes>
      </Router>
    </div>
  )
};

export default App;
