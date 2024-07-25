import React from 'react'

export default function CoursesCardDetail({ img, text, button, alt }) {
    return (
        <div className="relative  rounded-xl bg-slate-700 mb-5 text-white mt-10" >
            <img src={img} alt={alt} className='rounded-t-lg w-full' />
            <div className='p-4 flex flex-col'>
                <p className='text-xl'>{text}</p>
                <button className='border relative top-0 border-sky-500 bg-sky-400 rounded-xl mt-10 w-full p-3 items-center hover:bg-sky-500 transition-all duration-200'>{button}</button>
            </div>
        </div>
    )
}
