import React, { Component } from 'react';
class Signup extends Component {
    render() {
        return (
        <div>
            <label>username</label>
            <input type='text'></input>
            <label>email</label>
            <input type='text'></input>
            <label>password</label>
            <input type='password'></input>
            <button type='submit'>Signup</button>
        </div>
        );
    }
}
export default Signup