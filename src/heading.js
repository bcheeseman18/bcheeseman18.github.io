
import React, { Component } from 'react';
import Style from './heading.css';


class Heading extends Component {
    render() {
        return (
            <div className="App">
                <div className="header">
                    <h1>Ben Cheeseman</h1>
                    <p>I am a front end web developer living in Charlotte, NC</p>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/benjamin-cheeseman-b767972a/">LinkedIn</a></li>
                        <li><a href="https://github.com/bcheeseman18">GitHub</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Heading;





