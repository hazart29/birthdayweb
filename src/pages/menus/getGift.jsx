/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link"
import { useState } from "react"
let datagift
export default function getGift() {
    const [data, setData] = useState(datagift)

    function handler() {
        const g1 = document.getElementById('gift1').value
        const g2 = document.getElementById('gift2').value
        const g3 = document.getElementById('gift3').value
        const g4 = document.getElementById('gift4').value
        const g5 = document.getElementById('gift5').value
        setData({
            datagift: [g1,g2,g3,g4,g5,]
        })
    }
    return (
        <div className="flex flex-col md:flex-row gap-0 md:gap-8 justify-center items-center h-screen text-center">
            <div className="flex flex-col gap-2">
                <p>Enter the list of gifts you want!</p>
                <input type="text" name="gift1" id="gift1" className="rounded-full p-2" />
                <input type="text" name="gift2" id="gift2" className="rounded-full p-2" />
                <input type="text" name="gift3" id="gift3" className="rounded-full p-2" />
                <input type="text" name="gift4" id="gift4" className="rounded-full p-2" />
                <input type="text" name="gift5" id="gift5" className="rounded-full p-2" />
                <Link
                    onMouseOver={handler}
                    onTouchStartCapture={handler}
                    href={{
                        pathname: '/menus/yourGift',
                        query: data
                    }}
                    className=" hover:bg-black text-black hover:text-white rounded-full outline outline-2 p-2"
                >Process</Link>
            </div>
        </div>
    )
}