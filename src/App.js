
import './App.css';
import {BrowserRouter as Router,Routes,Route, NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import React from 'react';
import '../src/component/nav.css'

function App() {
  return (
    <div className="App">
       <Router>
      <div className='content'>
        {/* <NavLink className="content" exact activeClassName="active" to="/">home</NavLink>
        <NavLink className="content" activeClassName="active" to="/About">about</NavLink> */}
        {/* <NavLink className="content" activeClassName="active" to="/">login</NavLink> */}
      </div>
      <Routes>
        {/* <Route path="/" element ={<Home />}></Route>
        <Route path="/About" element ={<About />}></Route> */}
        <Route path="/" element ={<Login />}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
