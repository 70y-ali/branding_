/* eslint-disable */
import { autofocus } from 'jodit/src/plugins';
import React, { Component } from 'react';
import Background from '../assets/background1.png';
import Diamond from '../assets/diamond.jpg';
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
                <div 
                    className='hero' 
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: "url(../assets/background1.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                        overflow: "hidden",

                    }}
                >
                    <div 
                        className='navbar'
                        style={{
                            width:'85%',
                            height:'15%',
                            margin:'auto',
                            display:'flex',
                            alignItems: 'center'
                        }}
                    >
                        <img
                            src={Diamond} 
                            className='logo'
                            style={{
                                width:"100%",
                                cursor:'pointer',
                            }}
                        />
                        <button type='button'>Sign up</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main