import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './heading.css';
import './project.css'; 
import './skills.css'; 
import Project from './project.js'; 
import Heading from './heading.js'; 
import Skills from './skills.js'

let projects = [
  { url: 'https://github.com/bcheeseman18/teeup', 
    image: './teeuppic.png', 
    name: 'teeUp', 
    technology: 'AngularJS, Sass, HTML5', 
    description: 'teeUp is a golf course bid service application that allows a user to create a bid based on criteria such as distance from current location, quality of the course and price. It will then return a course based on the users input.', 
    },
  { url: 'https://github.com/bcheeseman18/repository-22', 
    image: './chatapp.png', 
    name: 'Chat App', 
    technology: 'Angular JS, Sass, HTML5', 
    description: 'NerdChat lets users communicate with eachother in real time by sending and recieving messages to and from an API',
    },
  { url: 'https://github.com/bcheeseman18/devApp', 
    image: './map.png', 
    name: 'Dev Map', 
    technology: 'JavaScript, LeafletJS, CSS3, HTML5',
    description: 'Development Map is focused on Charlotte development projects in each neighborhood, allowing a resident to view information about his or her city more easily and in one location. You can choose which neighborhood you want to focus on, choose a particular project and find all the details about that project in a popup.',
    }
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
        <Skills></Skills>
      </div>
    );
  }
}

export default App;
