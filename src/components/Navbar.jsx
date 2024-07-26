import React, { useEffect, useState } from 'react';
import icon from "../assets/icon.png";
import Ahref from '../ui/ahref';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../database/firebase';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../helpers/token.helpers';
import { IoIosArrowDropdown } from "react-icons/io";
import useZustand from '../ui/zustand';


export default function Navbar() {

    const { open, isOpen } = useZustand()

    const [user, SetUser] = useState(null)
    const [userName, SetUserName] = useState(null)
    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault()
        signOut(auth).then(res => {
            removeToken("token")
            navigate("/register")
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                return navigate("/login")
            } else {
                const email = user.email;
                SetUserName(email.replace("@gmail.com", "").toLocaleUpperCase())
                SetUser(email)
            }
        }, [handleLogout])
    })


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
                <div className='relative'>
                    <button onClick={isOpen} className="dark:focus:border-sky-400 py-2 cursor-pointer text-white flex items-center gap-4 p-4 border border-slate-500 rounded-lg">
                        Profile
                        <IoIosArrowDropdown width={40} height={40} />
                    </button>
                </div>
                {open ? <div className='flex text-white text-md flex-col w-72 py-2 px-4 bg-slate-600 absolute top-20 right-5 rounded-sm z-30'>
                    <div className="flex flex-col text-center items-center text-sm ">
                        <p className='text-sky-400'>{userName}</p>
                        <p className='text-sky-400 '>{user}</p>
                    </div>
                    <hr class="h-[0.6px] my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className='flex items-center flex-1 justify-center'>
                        <button onClick={handleLogout} className='rounded-md block px-4 py-2 text-sm text-gray-700 dark:hover:bg-slate-900 dark:text-gray-200 dark:hover:text-white transition-all'>
                            Sign Out
                        </button>
                    </div>

                </div>
                    : ""}
            </nav>
        </div>
    )
}