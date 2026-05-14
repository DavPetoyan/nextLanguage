"use client"


import React, { use, useState } from 'react'


import en from "@/messages/en.json";
import hy from "@/messages/hy.json";
import ru from "@/messages/ru.json";
import { useLocale } from 'next-intl';




export default function NavItem() {


    const local = useLocale();
    const [locale, setLocale] = useState(
        local === 'en'
            ? en
            : local === 'hy'
                ? hy
                : ru
    )


    return (
        <>

            {Object.entries(locale.navbar).map(([key, value]) => (
                <li><a className='hover:text-blue-200 transition-colors duration-300' href='#' key={key}>{value}</a></li>
            ))}

        </>
    )
}
