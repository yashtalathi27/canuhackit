import React from 'react'

function Header() {
    return (
        <header className="flex justify-between items-center p-5 bg-gray-900">
        <div className="text-2xl font-bold text-purple-500">GAME STORE</div>
        <nav>
            <ul className="flex space-x-6 text-white">
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">UPCOMING</a></li>
                <li><a href="#">TRENDING</a></li>
                <li><a href="#">REVIEWS</a></li>
            </ul>
        </nav>
        <div>
            <button className="bg-purple-600 text-white py-2 px-4 rounded mr-2">Sign up</button>
        </div>
    </header>
    )
}

export default Header
