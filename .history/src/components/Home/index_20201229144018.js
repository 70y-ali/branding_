/* eslint-disable */
import React, { Component } from 'react';
import Background from '../assets/background1.png';
import Diamond from '../assets/google.png';
import '../../App.css'
class Main extends Component {
    render() {
        return (
            <div>
                <img src={Background}></img>
                <div className='hero'>
                    <div className='navbar'>
                        <img src={Diamond} className='logo'/>
                        <button type='button'>Sign up</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main