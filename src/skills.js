import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div className="App">
                <div className="skillBody">
                    <h1 className="techSkills"><img className="atom" src="./atomIcon.png"/>Tech Skills</h1>
                </div>
                    <nav>
                        <ul className="skillList">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Sass</li>
                            <li>JavaScript</li>
                            <li>AngularJS</li>
                            <li>ReactJS</li>
                            <li>jQuery</li>
                            <li>Bootstrap</li>
                            <li>JSON</li>
                            <li>AJAX</li>
                            <li>MVC</li>
                            <li>Gulp</li>
                            <li>Git/GitHub</li>
                            <li>Visual Studio Code</li>
                            <li>Terminal</li>
                        </ul>
                    </nav>
            </div>
        );
    }
}

export default Skills;