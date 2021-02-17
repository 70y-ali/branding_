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
        // <div>
        //     <div className='row' onClick={register}>
        //         <h4>register</h4>
        //         <label>username</label>
        //         <input type='text' onChange={(e) => {setusernameReq(e.target.value)}}></input>
        //         <label>password</label>
        //         <input type='password' onChange={(e) => {setpasswordReq(e.target.value)}}></input>
        //         <div className='row'>
        //             <button className='rounded blue' type='submit' id='color' size='md'>Signup</button>
        //         </div>
        //     </div>
        //     <div className='row' onClick={login}>
        //         <h4>login</h4>
        //         <label>username1</label>
        //         <input type='text' onChange={(e) => {setusername(e.target.value)}}></input>
        //         <label>password1</label>
        //         <input type='password' onChange={(e) => {setpassword(e.target.value)}}></input>
        //         <button id='color'>login</button>
        //     </div>
        // </div>
        <div className='col-lg-6 p-0'>
			<div className='auth-form-wrap py-xl-0 py-50'>
				<div className='auth-form w-xxl-55 w-xl-75 w-sm-90 w-xs-100'>
					<form>
						<h1 className='mb-10'>Sign in</h1>
						<input
							// data-testid='input-username'
							className='form-control mb-10'
							type='text'
							name='username'
							placeholder='Нэвтрэх нэр'
							required
						/>
						<input
							// data-testid='input-password'
							className='form-control mb-10'
							type='password'
							name='password'
							placeholder='Нууц үг'
							required
						/>
						<Button
							className='btn btn-block rounded'
							color='primary'
							type='submit'>
							Нэвтрэх
						</Button>
					</form>
				</div>
			</div>
		</div>
    );
}
export default Signup