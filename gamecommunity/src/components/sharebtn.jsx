import React from 'react';
import { FaTelegramPlane, FaTwitter, FaFacebookF, FaRedditAlien, FaShareAlt } from 'react-icons/fa';

const ShareButtons = () => {
  return (
    <div className="flex space-x-2 p-4">
      <button className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl">
        <FaTelegramPlane />
        <span><a target="_blank"href="https://web.telegram.org/a/">Telegram</a></span>
      </button>
      <button className="flex items-center space-x-1 bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-xl border-white-2px">
        <FaTwitter />
        <span><a target="_blank"href="https://x.com/?lang=en">Tweet</a></span>
      </button>
      <button className="flex items-center space-x-1 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-xl">
        <FaFacebookF />
        <span><a target="_blank"href="https://www.facebook.com/">Facebook</a></span>
      </button>
      <button className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl">
        <FaRedditAlien />
        <span><a target="_blank"href="https://www.reddit.com/r/JEENEETards/comments/177u4cc/allen_worth_it_hai_kya/">RedItAlien</a></span>
      </button>
      <button className="flex items-center space-x-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl">
        <FaShareAlt />
      </button>
    </div>
  );
};

export default ShareButtons;
