/* eslint-disable */
import React, { Component } from 'react';
import menu from '../assets/menu.png';
import fb from '../assets/filled_fb.png';
import instagram from '../assets/filled_instagram.png';
import twitter from '../assets/filled_twitter.png';
import share from '../assets/filled_share.png'
import info from '../assets/filled_info.png'
// import star from '../assets/start.png'
// import alien1 from '../assets/alien1.png'
// import alien2 from '../assets/alien2.png'
// import alien5 from '../assets/alien5.png'
// import '../../App.css'
import Signup from '../SignUp/index'
// import { MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBIcon, MDBBtn } from "mdbreact";


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
                        <Link to="/sign-up">Signup</Link>
                        </button>
                    </div>
                    <div className='content'>
                        <small>Welcome to our web</small>
                        <h1>Coders<br/>EveryWhere</h1>
                        <button type='button'>Take a tour</button>
                    </div>
                    <div className='side-bar'>
                        <img src={menu} className="menu"/>
                        <div className="social-links">
                            <img src={fb}/>
                            <img src={instagram}/>
                            <img src={twitter}/>
                        </div>
                        {/* <MDBContainer>
                            <MDBBtn onClick={this.sidenavToggle("Left")}>
                                <MDBIcon size="lg" icon="bars" />
                            </MDBBtn>
                            <MDBSideNav slim fixed mask="rgba-blue-strong" triggerOpening={this.state.sideNavLeft} breakWidth={1300}
                                className="sn-bg-1">
                                <li>
                                <div className="logo-wrapper sn-ad-avatar-wrapper">
                                    <a href="#!">
                                    <img alt="" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle" />
                                    <span>Anna Deynah</span>
                                    </a>
                                </div>
                                </li>

                                <MDBSideNavNav>
                                <MDBSideNavLink to="/other-page" topLevel>
                                    <MDBIcon icon="pencil-alt" className="mr-2" />Submit listing</MDBSideNavLink>
                                <MDBSideNavCat name="Submit blog" id="submit-blog" icon="chevron-right">
                                    <MDBSideNavLink>Submit listing</MDBSideNavLink>
                                    <MDBSideNavLink>Registration form</MDBSideNavLink>
                                </MDBSideNavCat>
                                <MDBSideNavCat name="Instruction" id="instruction" icon="hand-pointer" href="#">
                                    <MDBSideNavLink>For bloggers</MDBSideNavLink>
                                    <MDBSideNavLink>For authors</MDBSideNavLink>
                                </MDBSideNavCat>
                                <MDBSideNavCat name="About" id="about" icon="eye">
                                    <MDBSideNavLink>Instruction</MDBSideNavLink>
                                    <MDBSideNavLink>Monthly meetings</MDBSideNavLink>
                                </MDBSideNavCat>
                                <MDBSideNavCat name="Contact me" id="contact-me" icon="envelope">
                                    <MDBSideNavLink>FAQ</MDBSideNavLink>
                                    <MDBSideNavLink>Write a message</MDBSideNavLink>
                                </MDBSideNavCat>
                                </MDBSideNavNav>
                            </MDBSideNav>
                            </MDBContainer> */}
                        {/* <div className="useful-links">
                            <img src={share}/>
                            <img src={info}/>
                        </div> */}
                    </div>
                    {/* <div className='star'>
                        <img src={star}/>
                        <img src={alien1}/>
                        <img src={alien2}/>
                        <img src={star}/>
                        <img src={alien2}/>
                        <img src={alien1}/>
                        <img src={alien5}/>
                        <img src={star}/>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Main