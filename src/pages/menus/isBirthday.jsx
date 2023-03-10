/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import moment from 'moment/moment'
import { useRouter } from 'next/router'
import BtnGift from "./btnGift";
import BtnBack from "./btnBack";
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
    const data = router.query
    const username = data.username
    const birthday = data.birthday
    const date = moment().format('YYYY-MM-DD')
    console.log(data)

    if (mounted) {
        console.log('mounted')
        console.log(birthday === date)

        setUcapan()
    }

    function setUcapan() {
        const p = document.getElementById('ucapan')
        const b = document.getElementById('btngift')
        const c = document.getElementById('btnback')

        if (birthday === date) {
            p.innerText = 'HELLO ' + username + ' WE WISH YOU HAPPY BIRTHDAY ON ' + birthday
            b.className = 'flex'
        } else {
            p.innerText = 'SORRY, YOU DONT HAVE BIRTHDAY TODAY'
            c.className = 'flex'
        }
    }

    return (
        <div id="main-content" className="flex flex-col gap-8 justify-center text-center items-center h-screen">
            <p id='ucapan' className="text-3xl font-bold"></p>
            <div className=" hidden" id="btngift"><BtnGift/></div>
            <div className=" hidden" id="btnback"><BtnBack/></div>
        </div>
    )
}