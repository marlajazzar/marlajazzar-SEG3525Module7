import React, {Component} from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Explore from './components/Explore'
import BookAppointment from './components/BookAppointment';
import { Button } from 'reactstrap';
import Error404 from './components/Error404';
import Help from './components/Help';


class App extends Component {
render() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
    
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/explore' component={Explore} />
      <Route  path='/bookAppointment' component={BookAppointment} />
      <Route  path='/help' component={Help} />
     <Route exact path= '/*' component={Error404} /> 
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

