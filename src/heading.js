
import React, { Component } from 'react';



class Heading extends Component {
    render() {
        return (
            <div className="App">
                <div className="header">
                    <p>Hello! My name is</p>
                    <p id="name">BEN CHEESEMAN</p>
                    <p>I am a</p>
                        <p id="brief">FRONT-END WEB <span>DEVELOPER</span></p>
                        <p>focusing on</p> 
                        <p id="phrase">making mobile-first, responsive websites!</p>
                    <div className="navigation">
                            <a href="https://www.linkedin.com/in/benjamin-cheeseman-b767972a/">
                                <button id="linkedin"><img src="./linkedinBtn.png" alt="linkedin"/></button>
                            </a>
                            <a href="https://github.com/bcheeseman18">
                                <button id="github"><img src="http://www.iconninja.com/files/688/484/851/hub-git-github-icon.svg" alt="github"/></button>
                            </a>
                            {/*<a href="https://benjamincheeseman18@gmail.com">
                                <button id="email"><img src="./gmailIcon.png" alt="email"/></button>
                            </a>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default Heading;





