import React from 'react'
import CoursesCard from './CoursesCard'

export default function Courses() {
    return (
        <>
            <div className='mt-6 flex flex-col'>
                <p className='text-3xl text-white'>Kurslarim</p>
                <div className='grid gap-3 md:grid-cols-2 grid-cols-1 lg:gap-4 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row'>
                    <CoursesCard />
                </div>
            </div>
        </>
    )
}
