import React from 'react';

function Topcomment() {
  return (
    <div className="w-full bg-custom-white h-80 mt-5 mb-5">
      <button className="text-lg font-bold mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 m-6">
  Top Comments
</button>

      
      <div className="flex justify-center">
        {/* Comment 1 */}
        <div className="w-[20%] h-auto bg-[#201F31] shadow-sm shadow-white rounded-lg p-4 ml-[40px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={`https://via.placeholder.com/50`} 
                alt="Okay" 
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h4 className="font-bold  text-pink-300">Okay</h4>
                <p className="text-sm text-[#fcfbfbcb]">ANGELFISH</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">3 minutes ago</p>
          </div>
          <p className="mt-4 text-lg text-yellow-400">No way she is just a humanoid 😭😭</p>
          <div className="mt-4 text-pink-300">
            <p className="text-sm ">Atri -My Dear Moments-</p>
          </div>
        </div>

        {/* Comment 2 */}
        <div className="w-[20%] h-auto bg-[#201F31] shadow-sm shadow-white rounded-lg p-4 ml-[40px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={`https://via.placeholder.com/50`} 
                alt="MonkeyDluFFy" 
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h4 className="font-bold  text-pink-300">MonkeyDluFFy</h4>
                <p className="text-sm text-gray-400">CRAB</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">4 minutes ago</p>
          </div>
          <p className="mt-4 text-lg text-yellow-400">A plot hole Emma died but that doesn't make any sense</p>
          <div className="mt-4 text-pink-300">
            <p className="text-sm">Ninja Kamui</p>
          </div>
        </div>

        {/* Comment 3 */}
        <div className="w-[20%] h-auto bg-[#201F31] shadow-sm shadow-white rounded-lg p-4 ml-[40px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={`https://via.placeholder.com/50`} 
                alt="Mr.Shadow" 
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h4 className="font-bold  text-pink-300">Mr.Shadow</h4>
                <p className="text-sm text-gray-400">CRAB</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">4 minutes ago</p>
          </div>
          <p className="mt-4 text-lg text-yellow-400">Story is good 👍</p>
          <div className="mt-4 text-pink-300">
            <p className="text-sm">Undead Unluck</p>
          </div>
        </div>

        {/* Comment 4 */}
        <div className="w-[20%] h-auto bg-[#201F31] shadow-sm shadow-white rounded-lg p-4 ml-[40px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={`https://via.placeholder.com/50`} 
                alt="Kawai_kun" 
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h4 className="font-bold  text-pink-300">Kawai_kun</h4>
                <p className="text-sm text-gray-400">CRAB</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">4 minutes ago</p>
          </div>
          <p className="mt-4 text-lg text-yellow-400">bro this zappa mf bigger simp than sanji💀</p>
          <div className="mt-4 text-pink-300">
            <p className="text-sm">One Piece</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topcomment;
