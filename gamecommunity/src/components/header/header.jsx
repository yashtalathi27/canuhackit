import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {

    const [div,showDiv]=useState(false);
    console.log(div);
    

    const navigate=useNavigate();
    return (

        
        <header className="flex justify-between items-center p-5 bg-gray-800 bg-opacity-50 backdrop-blur-[10px] fixed z-50 w-full">
            <div className="text-2xl font-bold text-purple-500">GAME STORE</div>
            <nav>
            <ul className="flex space-x-6 text-white">
                    <li><button onClick={() => navigate('/')}>HOME</button></li>
                    <li><button onClick={() => navigate('/allgames')}>ALL GAMES</button></li>
                    <li><button onClick={() => navigate('#trend')}>TRENDING</button></li>
                 
                </ul>
            </nav>
           
        </header>

    )
}

export default Header;
