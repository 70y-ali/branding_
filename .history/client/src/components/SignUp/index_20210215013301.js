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
        <div>
            <div className='row' onClick={register}>
                Sign in to your account
                <div className="input-field col s6">
                    <input placeholder="Placeholder" id="first_name" type="text" class="validate">
                    <label for="first_name">First Name</label>
                </div>
                <label className='form-label'>Username</label>
                <input type='text' placeholder='Username' onChange={(e) => {setusernameReq(e.target.value)}}></input>
                
                <label>Password</label>
                <input type='password' placeholder='Password' onChange={(e) => {setpasswordReq(e.target.value)}}></input>
                <span className='text-right'>Forgot your password</span>
                <div className='row'>
                    <button className='rounded blue' type='submit' id='color' size='md'>Signup</button>
                </div>
                Don't have a account? <span color='blue'>Create</span>
            </div>
            {/* <div className='row' onClick={login}>
                <h4>login</h4>
                <label>username1</label>
                <input type='text' onChange={(e) => {setusername(e.target.value)}}></input>
                <label>password1</label>
                <input type='password' onChange={(e) => {setpassword(e.target.value)}}></input>
                <button id='color'>login</button>
            </div> */}
        </div>
    );
}
export default Signup