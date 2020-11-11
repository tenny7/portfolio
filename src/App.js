import './App.css';
import React, { Component } from 'react';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.css'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Navigation from './Navigation';


export default class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return (
      <>
        <Navigation />
        <Router>
            
            <About path='/about' />
            <Skills path='/skills' />
            <Projects path='/projects' />
            <Experience path='/experience'/>
        </Router>
      </>
    );
  }
}
