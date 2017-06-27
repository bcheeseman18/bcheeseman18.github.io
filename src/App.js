import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './heading.css';
import './project.css'; 
import Project from './project.js'; 
import Heading from './heading.js'; 

let projects = [
  { url: 'https://github.com/bcheeseman18/teeup', 
    image: './teeuppic.png', 
    name: 'teeUp', 
    technology: 'AngularJS, Sass, HTML5', 
    description: 'A golf course bid service application', date: 'June 2017' },
  { url: 'https://github.com/bcheeseman18/repository-22', 
    image: './chatapp.png', 
    name: 'Chat App', 
    technology: 'Angular JS, Sass, HTML5', 
    description: 'Lets users communicate with eachother by sending and recieving messages between an API',
    date: 'May 2017'},
  { url: 'https://github.com/bcheeseman18/devApp', 
    image: './map.png', 
    name: 'Development Map', 
    technology: 'JavaScript, CSS3, HTML5',
    description: 'Focus on Charlotte development projects in each neighborhood',
    date: 'April 2017'}
   ]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading></Heading>
        <div className="projectTitle">
          <h1 className="myPro"><img className="atom" src="./atomIcon.png"/>My Projects</h1>
        </div>
        <Project details={projects[0]}></Project>
        <Project details={projects[1]}></Project>
        <Project details={projects[2]}></Project>
      </div>
    );
  }
}

export default App;
