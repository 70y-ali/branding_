/* eslint-disable */
import React, { Component } from 'react';
import menu from '../assets/menu.png';
import fb from '../assets/filled_fb.png';
import instagram from '../assets/filled_instagram.png';
import twitter from '../assets/filled_twitter.png';
import share from '../assets/filled_share.png'
import info from '../assets/filled_info.png'
import star from '../assets/start.png'
import alien1 from '../assets/alien1.png'
import alien2 from '../assets/alien2.png'
import alien5 from '../assets/alien5.png'
import '../../App.css'
import Signup from '../SignUp/index'

import { Link } from 'react-router-dom';
class Main extends Component {
    render() {
        return (
            <div>
                {/* <img src={Background}></img> */}
                <div className='hero'>
                    <div className='navbar'>
                        <img  className='logo'/> {/*src={Diamond}*/}
                        <button type='button' >
                        <Link to="/sign-up">About</Link>
                        </button>
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
                            <img src={share}/>
                            <img src={info}/>
                        </div>
                    </div>
                    <div className='star'>
                        <img src={star}/>
                        <img src={alien1}/>
                        <img src={alien2}/>
                        <img src={star}/>
                        <img src={alien2}/>
                        <img src={alien1}/>
                        <img src={alien5}/>
                        <img src={star}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main