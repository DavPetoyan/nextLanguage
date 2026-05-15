"use client"


import { usePathname, useRouter } from '@/src/i18n/navigation';
import { useLocale } from 'next-intl';
import React from 'react'


const locales = [{
    id: 1,
    name: 'English',
    code: 'en',
}, {
    id: 2,
    name: 'Armenian',
    code: 'hy',
}, {
    id: 3,
    name: 'Russian',
    code: 'ru',
}];



export default function LanguageSwitcher() {


    const router = useRouter();
    const local = useLocale();
    const pathName = usePathname()



    function handleChangeLanguage(e: React.ChangeEvent<HTMLSelectElement>) {
        router.replace(pathName, { locale: e.target.value });
    }


    return (
        <>
            <select onChange={handleChangeLanguage} value={local} className='bg-transparent cursor-pointer text-[#c5d13b] border border-gray-300 rounded-md p-2'>
                {locales.map((e) => <option key={e.id} value={e.code}>{e.name}</option>)}
            </select>
        </>
    )
}
