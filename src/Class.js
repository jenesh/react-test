import React, { Component } from "react";
// import './Class.css';

class GreetingsClass extends React.Component {
    render() {
        return (
            <div>
                Hi for the third time {this.props.firstName} {this.props.lastName}!
            </div>
        );
    }
}

export default GreetingsClass;