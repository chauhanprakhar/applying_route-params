import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/:profile" component={Profile}/>

    </div>
    </BrowserRouter>
    
  );
}

export default App;
