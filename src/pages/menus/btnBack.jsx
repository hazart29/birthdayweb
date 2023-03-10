import Link from "next/link"
export default function btnBack() {
    return (
        <div>
            <Link
                href={{
                    pathname: '/',
                }}
                className=" hover:bg-black text-black hover:text-white rounded-full outline outline-2 p-2"
            >Back</Link>
        </div>
    )
}