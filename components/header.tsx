import React from 'react'
import Nav from './nav'

export default function Header() {
    return (
        <>
            <header className='bg-blue-300 py-4'>
                <div className='max-w-360 mx-auto flex items-center justify-around'>
                    <h1 className='text-2xl font-bold text-white tracking-[1px] '>Header</h1>
                    <Nav />
                </div>
            </header>
        </>
    )
}
