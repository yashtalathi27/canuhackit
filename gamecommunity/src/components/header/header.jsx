import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logoimg from '../../../public/Screenshot_from_2024-08-26_14-26-29-removebg-preview.png'

function Header() {

    const [div,showDiv]=useState(false);
    console.log(div);


    const navigate=useNavigate();
    return (


        <header className={"flex justify-between items-center p-4 bg-gray-800 bg-opacity-50 backdrop-blur-[10px]z-50 w-full"}>

            <div className="flex items-center">
                <img src={logoimg} className="w-[7vw] h-[8vh]" alt="" />
                <div onClick={() => navigate('/home')} className="text-3xl cursor-pointer font-bold text-purple-500 ">GAMER_GRID</div>
            </div>

            <nav>
                <ul className="flex space-x-6 text-white text-[16px]">
                    <li><button onClick={() => navigate('/home')}>HOME</button></li>
                    <li><button onClick={()=>{navigate('/chat')}}>CHAT</button> </li>
                    <li><button onClick={() => navigate('/allgames')}>ALL GAMES</button></li>
                    <li><button onClick={() => navigate('/profile')}>PROFILE</button></li>
                    {/* <li><button onClick={() => navigate('/profile')}>Profile</button></li> */}
                </ul>
            </nav>

        </header>

    )
}

export default Header;