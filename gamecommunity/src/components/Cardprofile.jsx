import React from 'react'
import image from "../images/download.jpeg"
import {useAppStore} from "../store/index.js";
export default function Cardprofile() {

    const {userInfo} = useAppStore();

    return (
        <div className='flex items-center w-[70vw] h-[70vh] border-2 bg-gray-800 px-[30px]'>
            <img src={userInfo.image} className='w-[500px] ml-44                  rounded-[50%]'/>
            <div className='flex text-white flex-col gap-[50px] w-full items-start pl-[30%]'>
                <div>
                    <p className='font-[50] mb-[20px] text-gray-400 tracking-[3px]'>USERNAME</p>
                    <p className=' text-2xl'>{userInfo && <div>{userInfo.displayName}</div>}</p>
                </div>
                <div>
                    <p className='font-[50] mb-[20px]  text-gray-400 tracking-[3px]'>Email ID</p>
                    <p className='text-2xl'>{userInfo && <div>{userInfo.email}</div>}</p>
                </div>
                <div>
                    <p className='font-[50] mb-[20px]  text-gray-400 tracking-[3px]'>Badges</p>
                    <p className='text-2xl'>4</p>
                </div>
            </div>
        </div>
    )
}