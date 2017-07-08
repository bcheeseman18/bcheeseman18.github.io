import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                        <div className="image">
                            <h2>{this.props.details.name}</h2>
                            <a href={this.props.details.url}><img className="projImage" src={this.props.details.image} alt='map'/></a>
                        </div>
                            <div className="projInfo">
                                <p>{this.props.details.description}</p>
                                <p>{this.props.details.technology}</p>
                            </div>
                </div>
            </div>
        );
    }
}

export default Project;
