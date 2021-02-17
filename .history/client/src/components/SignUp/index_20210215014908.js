/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import HomePage from '../Home/'

function Signup(){
    const [usernameReq, setusernameReq] = useState("")
    const [passwordReq, setpasswordReq] = useState("")

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    
    const [loginStatus, setLoginStatus] = useState("")

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':' GET,POST',
            'Access-Control-Allow-Credentials': true
        }
    };
    const register = () => {
        console.log('TEST REGISTER');
        Axios.post("http://localhost:8000/register", {
            username: usernameReq,
            password: passwordReq
        }, config).then((response) => {
            console.log('%c 🍉 response: ', 'font-size:20px;background-color: #FCA650;color:#fff;', response);
            // console.log(response);
        })
    }

    const login = () => {
        Axios.post("http://localhost:8000/login", {
            username: username,
            password: password
        }, { withCredentials: true}, config).then((response) => {
            console.log('%c 🎂 loginresponse: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', response);
            if(response.data.message){
                // setLoginStatus(response.data.message)
                setLoginStatus({loginStatus: response.data.message})
                console.log('SUCCESSSSS');
                return <Redirect to="HomePage" />
                // <Redirect to="/ticket-list"/>
            }else{
                // setLoginStatus(response.data[0].username)
                setLoginStatus({loginStatus: response.data[0].username})
            }
        })
    }
    useEffect(() => {
        console.log('%c 🍧 TEST1: ', 'font-size:20px;background-color: #7F2B82;color:#fff;');
        Axios.post("http://localhost:8000/login", config).then((response) => {
            console.log('%c 🍑useeect response: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', response);
            if(response.data.loggedIn === true){
                setLoginStatus(response.data.user[0].username);
                return <Redirect to="HomePage" />
            }
        });
    }, []);
    return (
        <div className="container px-4 py-5 mx-auto">
            <div className="card card0">
                <div className="d-flex flex-lg-row flex-column-reverse">
                    <div className="card card1">
                        <div className="row justify-content-center my-auto">
                            <div className="col-md-8 col-10 my-5">
                                <div className="row justify-content-center px-3 mb-3"> <img id="logo" src="https://i.imgur.com/PSXxjNY.png"/> </div>
                                <h3 className="mb-5 text-center heading">We are Tidi</h3>
                                <h6 className="msg-info">Please login to your account</h6>
                                <div className="form-group"> <label className="form-control-label text-muted">Username</label> <input type="text" id="email" name="email" placeholder="Phone no or email id" className="form-control"/> </div>
                                <div className="form-group"> <label className="form-control-label text-muted">Password</label> <input type="password" id="psw" name="psw" placeholder="Password" className="form-control"/> </div>
                                <div className="row justify-content-center my-3 px-3"> <button class="btn-block btn-color">Login to Tidi</button> </div>
                                <div className="row justify-content-center my-2"> <a href="#"><small class="text-muted">Forgot Password?</small></a> </div>
                            </div>
                        </div>
                        <div className="bottom text-center mb-5">
                            <p href="#" className="sm-text mx-auto mb-3">Don't have an account?<button class="btn btn-white ml-2">Create new</button></p>
                        </div>
                    </div>
                    <div className="card card2">
                        <div className="my-auto mx-md-5 px-md-5 right">
                            <h3 className="text-white">We are more than just a company</h3> <small className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <label className='form-label'>Username</label>
        <input type='text' placeholder='Username' onChange={(e) => {setusernameReq(e.target.value)}}></input>
        
        <label>Password</label>
        <input type='password' placeholder='Password' onChange={(e) => {setpasswordReq(e.target.value)}}></input>
        <span className='text-right'>Forgot your password</span>
        <div className='row'>
            <button className='rounded blue' type='submit' id='color' size='md'>Signup</button>
        </div> */}
    
    );
}
export default Signup