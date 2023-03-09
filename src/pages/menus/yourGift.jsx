/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import moment from 'moment/moment'
import { useRouter } from 'next/router'
import BtnGift from "./btnGift";
import React, { useEffect, useState } from 'react';


export default function isBirthday() {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)

        return () => {
            setMounted(false)
        }
    }, []);



    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    let data = ""
    data = router.query
    const random = Math.floor(Math.random() * 5);
    let listGift = ""
    listGift = data.datagift
    console.log(data)

    if (mounted) {
        console.log('mounted')
        setGift()
    }

    function setGift() {
        const p = document.getElementById('gift')
        p.innerText = 'CONGRATTULATION YOUR GIFT IS [' + listGift[random] + ']'
    }

    return (
        <div id="main-content" className="flex flex-col gap-8 justify-center text-center items-center h-screen">
            <p id='gift' className="text-3xl font-bold"></p>
            <Link
                href={{
                    pathname: '/',
                }}
                className=" hover:bg-black text-black hover:text-white rounded-full outline outline-2 p-2"
            >Back to Home</Link>
        </div>
    )
}