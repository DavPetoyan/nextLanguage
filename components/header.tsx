import React from 'react'
import Nav from './nav'
import { useTranslations } from 'next-intl'

export default function Header() {


      const z = useTranslations("features.legacy")
    


    return (
        <>
            <header className='bg-black py-6 border-b border-yellow-500'>
                <div className='max-w-360 mx-auto flex items-center justify-around'>
                    <h1 className='text-2xl font-bold text-white tracking-[1px] '>{z("title")}</h1>
                    <Nav />
                </div>
            </header>
        </>
    )
}
