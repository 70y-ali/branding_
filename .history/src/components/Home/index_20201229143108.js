/* eslint-disable */
import React, { Component } from 'react';
import Background from '../assets/background1.png';
import Diamond from '../assets/diamond.jpg';
class Main extends Component {
    render() {
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
                            alignItems: 'center',
                            justifyContent:'space-between'
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