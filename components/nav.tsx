import React from 'react'
import NavItem from './navItem'
import LanguageSwitcher from './language-switcher'






export default function Nav() {
    return (
        <>
            <nav className='flex items-center gap-10'>
                <ul className='flex items-center gap-10 text-white'>
                    <NavItem />
                </ul>
                <LanguageSwitcher />

            </nav>
        </>
    )
}

