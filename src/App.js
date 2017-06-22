import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Project from './project.js'; 
import Heading from './heading.js'; 

let projects = [
  { url: 'https://github.com/bcheeseman18/teeup', 
    image: '/src/map.png', 
    name: 'teeUp', 
    technology: 'AngularJS, Sass, HTML5', 
    description: 'A golf course bid service application', date: 'June 2017' },
  { url: 'https://github.com/bcheeseman18/repository-23', 
    image: '/Users/bencheeseman/Documents/Personal Projects/porfolio/bcheeseman18.github.io/src/map.png', 
    name: 'GitHub Activity Tracker', 
    technology: 'Angular JS, Sass, HTML5', 
    description: 'Tracks activity of each member of The Iron Yard Cohort',
    date: 'May 2017'},
  { url: 'https://github.com/bcheeseman18/devApp', 
    image: './map.png', 
    name: 'Map Dev Project', 
    technology: 'JavaScript, CSS3, HTML5',
    description: 'Focus on Charlotte development projects in each neighborhood',
    date: 'April 2017'}
   ]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading></Heading>
        <Project details={projects[0]}></Project>
        <Project details={projects[1]}></Project>
        <Project details={projects[2]}></Project>
      </div>
    );
  }
}

export default App;
