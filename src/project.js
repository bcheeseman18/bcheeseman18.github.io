import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <div className="App">
                <h2>{this.props.details.name}</h2>
                <p>{this.props.details.technology}</p>
                <a href={this.props.details.url}><img className="projImage" src={this.props.details.image} alt='map'/></a>
                <p>{this.props.details.description}</p>
                <p>{this.props.details.date}</p>
            </div>
        );
    }
}

export default Project;
