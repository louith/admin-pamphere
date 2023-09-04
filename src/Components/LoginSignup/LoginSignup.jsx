import React from "react";
import admin from '../Assets/admin.svg';
import {Routes, Route, useNavigate} from 'react-router-dom';



const LoginSignup = () => {
    return(
        <div className="h-screen w-screen flex place-items-center items-center">
            <div className="w-fit h-fit p-10 bg-purple-300">
                <h1 className="mb-6">Admin Login</h1>
                <div className="flex flex-col place-items-center">
                    <input className="mb-2" placeholder="Username"></input>
                    <input className="mb-2" type="password" placeholder="Password"></input>
                    <button type="button" className="bg-purple-600 px-2.5">Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup