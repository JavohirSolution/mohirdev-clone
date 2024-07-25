import React from 'react'
import comp from "../assets/comp.png"
import Courses from './Courses'

export default function Main() {
    return (
        <div className='w-[90%] m-auto'>
            <div className='flex flex-wrap relative overflow-hidden'>
                <h1 className="text-3xl font-medium mb-9">Kasblarim</h1>
                <div className='w-full bg-slate-900 h-[400px] rounded-2xl text-white flex flex-col items-center justify-center'>
                    <img src={comp} alt="Computer Icon" className='w-40 flex justify-center items-center' />
                    <p className='text-lg text-center'>Hayotingizni bugundan o'zgartiring - o'zingizga mos kasbni tanlang</p>
                    <button className='transition ease-in-out font-semibold p-4 rounded-lg bg-transparent border-sky-500 mt-10 border-2 text-sky-500 hover:bg-sky-800'>Kasb tanlash</button>
                </div>
            </div>
            <Courses />
        </div>


    )
}
