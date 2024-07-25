import React from 'react'
import icon from "../assets/icon.png"

export default function Footer() {
    return (
        <div className='bg-slate-950 h-56 text-white flex items-center mt-20'>
            <div className='container w-[90%] m-auto flex justify-between md:flex-row flex-col items-center text-center'>
                <div className='flex flex-col'>
                    <div className='flex items-center mx-7 md:m-0'>
                        <img src={icon} alt="Mohirdev Icon" className='w-20' />
                        <a href='/' className='text-3xl text-white'>mohirdev</a>
                    </div>
                    <div>
                        <p className='text-slate-500'>Toshkent shahar, Muminov ko'chasi, 4A</p>
                    </div>
                </div>
                <div className='flex flex-col justify-end md:items-end items-center'>
                    <h1 className='text-2xl md:text-3xl '>+998 (78) 113 62 72</h1>
                    <p className='mt-3 text-sm text-slate-500'>© Mohirdev 2024. Barcha huquqlari himoyalangan</p>
                </div>
            </div>
        </div>
    )
}
