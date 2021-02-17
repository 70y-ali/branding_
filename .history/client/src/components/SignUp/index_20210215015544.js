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
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="col-md-6 d-none d-md-flex bg-image"></div>
                {/* <!-- The content half --> */}
                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                        {/* <!-- Demo content--> */}
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <h3 className="display-4">Split page!</h3>
                                    <p className="text-muted mb-4">Create a login split page using Bootstrap 4.</p>
                                    <form>
                                        <div className="form-group mb-3">
                                            <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                        </div>
                                        <div className="form-group mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input id="customCheck1" type="checkbox" checked className="custom-control-input"/>
                                            <label for="customCheck1" className="custom-control-label">Remember password</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                        <div className="text-center d-flex justify-content-between mt-4"><p>Snippet by <a href="https://bootstrapious.com/snippets" className="font-italic text-muted"> 
                                                <u>Boostrapious</u></a></p></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    
    );
}
export default Signup
{/* <label className='form-label'>Username</label>
        <input type='text' placeholder='Username' onChange={(e) => {setusernameReq(e.target.value)}}></input>
        
        <label>Password</label>
        <input type='password' placeholder='Password' onChange={(e) => {setpasswordReq(e.target.value)}}></input>
        <span className='text-right'>Forgot your password</span>
        <div className='row'>
            <button className='rounded blue' type='submit' id='color' size='md'>Signup</button>
        </div> */}