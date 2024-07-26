import React from 'react';
import icon from "../assets/icon.png";
import Ahref from '../ui/ahref';


export default function Navbar() {

    return (
        <div className='bg-slate-950 mb-14'>
            <nav className='flex items-center w-[90%] m-auto justify-between'>
                <div className='flex items-center'>
                    <img src={icon} alt="Mohirdev Icon" className='w-20' />
                    <a href='/' className='text-3xl text-white'>mohirdev</a>
                </div>

                <div className='hidden md:block'>
                    <ul className='text-white flex items-center gap-14 justify-between px-6'>
                        <Ahref text="Asosiy" className="hover:text-sky-300 transition-all" />
                        <Ahref text="Kasblar" className="text-slate-400 hover:text-sky-300 transition-all" />
                        <Ahref text="Kurslar" className="text-slate-400 hover:text-sky-300 transition-all" />
                        <Ahref text="Faollar" className="text-slate-400 no-underline hover:text-sky-300 transition-all" />
                    </ul>
                </div>
                <div className='block md:hidden text-white '>
                    <i className="fa-solid fa-bars text-3xl"></i>
                </div>

            </nav>
        </div>
    )
}