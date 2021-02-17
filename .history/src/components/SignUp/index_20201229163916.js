import React, { Component } from 'react';
class Signup extends Component {
    render() {
        return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}
export default Signup