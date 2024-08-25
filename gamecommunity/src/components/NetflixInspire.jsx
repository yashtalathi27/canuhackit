import React from 'react'

export default function NetflixInspire() {
  return (
        <div className='relative w-full h-[90vh] pt-[90px] bg-cover bg-no-repeat bg-[url("https://wallpapers.com/images/hd/all-games-6qke80qaq3agizpd.jpg")]'>
            <div className='bg-blue-600 opacity-50 w-full h-full absolute top-0'>
                <div className='pt-[170px] text-center font-[1000] italic text-[70px] text-yellow-200'>
                        <h1 >Unlimited Games</h1>
                        <h1>Review,Chat and Get Addicted</h1>
                </div>
                <div className='text-center mt-[50px]'>
                <button onClick={() => navigate('/signup')}
                className="bg-yellow-200  h-[40px] text-black py-2 px-4 mr-2 text-[24px] font-bold text-center leading-6 rounded-[20px] duration-1000 hover:scale-110">Sign In With Google</button>
            </div>
            </div>
        </div>
  )
}
