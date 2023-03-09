/* eslint-disable react-hooks/rules-of-hooks */
import moment from 'moment/moment'
import { useRouter } from 'next/router'
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
    console.log(birthday === date)

    if (mounted) {

        setUcapan()
    }

    function setUcapan() {
        const p = document.getElementById('ucapan')

        if (birthday === date) {
            p.innerText = 'HELLO ' + username + ' WE WISH YOU HAPPY BIRTHDAY ON ' + birthday
        } else {
            p.innerText = 'SORRY, YOU DONT HAVE BIRTHDAY TODAY'
        }
    }

    return (
        <div id="main-content" className="flex flex-col gap-8 justify-center items-center h-screen">
            <p id='ucapan'></p>
        </div>
    )
}