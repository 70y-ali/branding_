/* eslint-disable */
import React, { Component } from 'react';
// import Background from '../assets/background1.png';
// import Diamond from '../assets/google.png';
import '../../App.css'
class Main extends Component {
    render() {
        return (
            <div>
                {/* <img src={Background}></img> */}
                <div className='hero'>
                    <div className='navbar'>
                        <img  className='logo'/> {/*src={Diamond}*/}
                        <button type='button'>Sign up</button>
                    </div>
                    <div className='content'>
                        <small>Welcome to our web</small>
                        <h1>Astronoum and alien's comment</h1>
                        <button type='button'>Take a tour</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main