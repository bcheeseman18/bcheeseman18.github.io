import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <div className="App">
                <h1>
                    <a href={this.props.details.url}><img src={this.props.details.image} alt='map'/></a>
                </h1>
                <h3>{this.props.details.name}</h3>
                <p>{this.props.details.technology}</p>
                <p>{this.props.details.description}</p>
                <p>{this.props.details.date}</p>
            </div>
        );
    }
}

export default Project;
