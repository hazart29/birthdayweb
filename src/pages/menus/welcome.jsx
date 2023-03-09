/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const cake = "/cake.svg"
let username,birthday,data

function welcome() {
    const [data, setData] = useState({username,birthday})

    function handler() {
        const username = document.getElementById('name').value
        const birthday = document.getElementById('birthday').value
        setData({
            username: username,
            birthday: birthday
        })
    }
    
    return (
        <div className="flex-col gap-4 md:flex">
            <div className="flex justify-center md:justify-start mb-4">
                <Image width={182} height={182} alt="cake img" src={cake} priority />
            </div>
            <div className="flex flex-col gap-8">
                <div id="welcome-text">
                    <p>Birthday Web Page</p>
                    <p className="text-3xl font-bold
                 text-blue-500">Is your birthday today?</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <input type="text" name="name" id="name" placeholder="Your name?" className="rounded-full p-2" />
                        <input type="date" name="birthday" id="birthday" className="rounded-full p-2" />
                    </div>
                    <Link
                        onMouseOver={handler}
                        onTouchStartCapture={handler}
                        href={{
                            pathname: '/menus/isBirthday',
                            query: data
                        }}
                        className=" hover:bg-black text-black hover:text-white rounded-full outline outline-2 p-2"
                    >Check Now!</Link>
                </div>
            </div>
        </div>
    )
}

export default welcome;