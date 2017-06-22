
import React, { Component } from 'react';



class Heading extends Component {
    render() {
        return (
            <div className="App">
                <div className="header">
                    <h1 id="name">Hi, I'm Ben Cheeseman</h1>
                    <p id="brief">I am a front end web developer living in Charlotte, NC focusing on 
                        making mobile-first, responsive websites!</p>
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





