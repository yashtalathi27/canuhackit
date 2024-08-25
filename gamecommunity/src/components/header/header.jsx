import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    window.open("http://localhost:6005/auth/google/callback", "_self");
  }

  return (
    <header className="flex justify-between items-center p-5 bg-gray-800 bg-opacity-50 backdrop-blur-[10px] fixed z-50 w-full">
      <div className="text-2xl font-bold text-purple-500">GAME STORE</div>
      <nav>
        <ul className="flex space-x-6 text-white">
          <li>
            <button onClick={() => navigate("/")}>HOME</button>
          </li>
          <li>
            <button onClick={() => navigate("/")}>ABOUT US</button>
          </li>
          <li>
            <button onClick={() => navigate("/allgames")}>ALL GAMES</button>
          </li>
          <li>
            <button onClick={() => navigate("/")}>TRENDING</button>
          </li>
          <li>
            <button onClick={() => navigate("/signup")}>REVIEWS</button>
          </li>
        </ul>
      </nav>
      <div>
        <button
          onClick={loginWithGoogle}
          className="bg-purple-600 text-white py-2 px-4 rounded mr-2"
        >
          Sign up
        </button>
      </div>
    </header>
  );

}

export default Header;
