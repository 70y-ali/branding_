/* eslint-disable */
import React, { Component } from 'react';
import Background from '../../../public/assets/background1.png';
import Diamond from '../../../public/assets/diamond.jpg';
import './style.css'
class Main extends Component {
    render() {
        // const override = css`
        //     *{
        //         margin: 0;
        //         padding: 0;
        //         font-family: sans-serif;
        //     }
        //     .hero{
        //         width: 100%;
        //         height: 100%;
        //         background-image: url(public/background1.png);
        //         background-size: cover;
        //         background-position: center;
        //         position: relative;
        //         overflow: hidden;
        //     }
        // `;
        return (
            <div>
                <img src={Background}></img>
                <div className='hero' >
                    <div className='navbar'>
                        <img src={Diamond} className='logo'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main