/* eslint-disable */
import React, { Component } from 'react';
import menu from '../assets/menu.png';
import fb from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter_color.png';
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
                        <h1>Spaceman<br/>Alien</h1>
                        <button type='button'>Take a tour</button>
                    </div>
                    <div className='side-bar'>
                        <img src={menu} className="menu"/>
                        <div className="social-links">
                            <img src={fb}/>
                            <img src={instagram}/>
                            <img src={twitter}/>
                        </div>
                        <div className="useful-links">
                            <img src={fb}/>
                            {/* <img src={instagram}/>
                            <img src={twitter}/> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main