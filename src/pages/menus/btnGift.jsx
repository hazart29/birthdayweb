import Link from "next/link"
export default function btnGift() {
    return (
        <div>
            <Link
                href={{
                    pathname: '/menus/getGift',
                }}
                className=" hover:bg-black text-black hover:text-white rounded-full outline outline-2 p-2"
            >Lets Get The Gift!</Link>
        </div>
    )
}